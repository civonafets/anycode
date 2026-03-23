import { createServer } from 'node:http';
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  approvalStatuses,
  dispositionKinds,
  isDispositionKind,
  isMessageAuthorKind,
  isWorkflowKind,
  messageAuthorKinds,
  workflowKinds
} from '../../../packages/anymem-contracts/src/domain.mjs';
import { JsonStore } from './lib/json-store.mjs';
import { fail, ok, readJson } from './lib/http.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_STORE_PATH = resolve(__dirname, '../../../.local/anymem-dev-state.json');
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

export async function createApp(options = {}) {
  const store = new JsonStore(options.storePath || DEFAULT_STORE_PATH);
  await store.init();

  const server = createServer(async (request, response) => {
    try {
      const method = request.method || 'GET';
      const url = new URL(request.url || '/', 'http://127.0.0.1');

      if (method === 'GET' && url.pathname === '/healthz') {
        return ok(response, 200, {
          service: 'anymem-api',
          status: 'ok',
          now: new Date().toISOString()
        });
      }

      if (method === 'GET' && url.pathname === '/api/v1/meta') {
        return ok(response, 200, {
          product: 'anymem',
          mode: 'standalone-core',
          auth: 'standalone',
          approval_model: 'workflow-generic',
          workflow_types: workflowKinds,
          workflow_kinds: workflowKinds,
          dispositions: dispositionKinds
        });
      }

      if (method === 'GET' && url.pathname === '/api/v1/approval-types') {
        return ok(response, 200, {
          workflow_types: workflowKinds,
          workflow_kinds: workflowKinds,
          message_author_kinds: messageAuthorKinds,
          approval_statuses: approvalStatuses,
          disposition_kinds: dispositionKinds
        });
      }

      if (method === 'POST' && url.pathname === '/api/v1/auth/register') {
        const body = await readJson(request);
        const email = String(body.email || '').trim().toLowerCase();
        const password = String(body.password || '');
        const displayName = String(body.display_name || body.name || '').trim();
        const workspaceName = String(body.workspace_name || body.organization_name || '').trim();

        if (!email || !password || !displayName || !workspaceName) {
          return fail(
            response,
            400,
            'email, password, display_name/name, and workspace_name/organization_name are required'
          );
        }
        if (password.length < 10) {
          return fail(response, 400, 'password must be at least 10 characters');
        }

        const result = await store.update(async (current) => {
          if (current.actors.some((actor) => actor.email === email)) {
            throw new AppError(409, 'actor already exists');
          }

          const workspaceId = randomUUID();
          const actorId = randomUUID();
          const now = new Date().toISOString();
          const passwordHash = hashPassword(password);
          const workspace = {
            id: workspaceId,
            name: workspaceName,
            created_at: now
          };
          const actor = {
            id: actorId,
            workspace_id: workspaceId,
            email,
            display_name: displayName,
            password_hash: passwordHash,
            created_at: now
          };

          current.workspaces.push(workspace);
          current.actors.push(actor);

          const session = issueSession(current, actorId);
          return {
            ...current,
            _result: {
              actor,
              workspace,
              session
            }
          };
        });

        return ok(response, 201, buildAuthPayload(result._result));
      }

      if (method === 'POST' && url.pathname === '/api/v1/auth/login') {
        const body = await readJson(request);
        const email = String(body.email || '').trim().toLowerCase();
        const password = String(body.password || '');

        if (!email || !password) {
          return fail(response, 400, 'email and password are required');
        }

        const result = await store.update(async (current) => {
          const actor = current.actors.find((entry) => entry.email === email);
          if (!actor || !verifyPassword(password, actor.password_hash)) {
            throw new AppError(401, 'invalid credentials');
          }

          const workspace = current.workspaces.find((entry) => entry.id === actor.workspace_id);
          if (!workspace) {
            throw new AppError(500, 'actor workspace missing');
          }

          const session = issueSession(current, actor.id);
          return {
            ...current,
            _result: {
              actor,
              workspace,
              session
            }
          };
        });

        return ok(response, 200, buildAuthPayload(result._result));
      }

      if (method === 'GET' && url.pathname === '/api/v1/approvals') {
        const session = await requireSession(request, store);
        const state = await store.read();
        const approvals = state.approvals.filter(
          (approval) =>
            approval.workspace_id === session.workspace.id &&
            (approval.requested_by_actor_id === session.actor.id ||
              approval.approver_actor_id === session.actor.id)
        );
        return ok(response, 200, approvals, { count: approvals.length });
      }

      if (method === 'POST' && url.pathname === '/api/v1/approvals') {
        const session = await requireSession(request, store);
        const body = await readJson(request);
        const workflowType = String(body.workflow_type || body.workflow_kind || '').trim();
        const title = String(body.title || '').trim();
        const reason = String(body.reason || body.initial_reason || '').trim();
        const context = body.context && typeof body.context === 'object' ? body.context : {};

        if (!isWorkflowKind(workflowType)) {
          return fail(response, 400, 'workflow_type is invalid', { allowed: workflowKinds });
        }
        if (!title || !reason) {
          return fail(response, 400, 'title and reason are required');
        }

        const now = new Date().toISOString();
        const approval = {
          id: randomUUID(),
          workspace_id: session.workspace.id,
          workflow_type: workflowType,
          workflow_kind: workflowType,
          title,
          reason,
          status: 'pending',
          requested_by_actor_id: session.actor.id,
          approver_actor_id: session.actor.id,
          context,
          messages: [
            buildMessage({
              speakerType: 'agent',
              body: reason,
              createdAt: now
            })
          ],
          dispositions: [],
          created_at: now,
          updated_at: now
        };

        await store.update(async (state) => {
          state.approvals.push(approval);
          return state;
        });

        return ok(response, 201, approval);
      }

      const approvalMatch = url.pathname.match(/^\/api\/v1\/approvals\/([^/]+)$/);
      if (method === 'GET' && approvalMatch) {
        const session = await requireSession(request, store);
        const approval = await findVisibleApproval(store, approvalMatch[1], session);
        return ok(response, 200, approval);
      }

      const messageMatch = url.pathname.match(/^\/api\/v1\/approvals\/([^/]+)\/messages$/);
      if (method === 'POST' && messageMatch) {
        const session = await requireSession(request, store);
        const body = await readJson(request);
        const speakerType = String(body.speaker_type || body.author_kind || '').trim();
        const messageBody = String(body.body || '').trim();

        if (!isMessageAuthorKind(speakerType) || !messageBody) {
          return fail(response, 400, 'speaker_type/author_kind and body are required');
        }

        const state = await store.update(async (current) => {
          const approval = findVisibleApprovalInState(current, messageMatch[1], session);

          approval.messages.push(
            buildMessage({
              speakerType,
              body: messageBody,
              createdAt: new Date().toISOString()
            })
          );
          approval.updated_at = new Date().toISOString();
          return current;
        });

        const approval = state.approvals.find((entry) => entry.id === messageMatch[1]);
        return ok(response, 201, approval);
      }

      const dispositionMatch = url.pathname.match(/^\/api\/v1\/approvals\/([^/]+)\/dispositions$/);
      if (method === 'POST' && dispositionMatch) {
        const session = await requireSession(request, store);
        const body = await readJson(request);
        const action = String(body.action || body.kind || '').trim();
        const rationale = String(body.rationale || body.note || '').trim();

        if (!isDispositionKind(action)) {
          return fail(response, 400, 'action/kind is invalid', { allowed: dispositionKinds });
        }
        if (!rationale) {
          return fail(response, 400, 'rationale/note is required');
        }

        const state = await store.update(async (current) => {
          const approval = findVisibleApprovalInState(current, dispositionMatch[1], session);
          if (approval.approver_actor_id !== session.actor.id) {
            throw new AppError(403, 'current actor is not the approver');
          }

          approval.dispositions.push(
            buildDisposition({
              action,
              rationale,
              actorId: session.actor.id,
              createdAt: new Date().toISOString()
            })
          );
          approval.status = mapDispositionToStatus(action);
          approval.updated_at = new Date().toISOString();
          return current;
        });

        const approval = state.approvals.find((entry) => entry.id === dispositionMatch[1]);
        return ok(response, 201, approval);
      }

      return fail(response, 404, 'route not found');
    } catch (error) {
      if (error instanceof SyntaxError) {
        return fail(response, 400, 'invalid JSON body');
      }
      if (error instanceof AppError) {
        return fail(response, error.statusCode, error.message);
      }
      return fail(response, 500, 'internal server error', {
        detail: error instanceof Error ? error.message : 'unknown error'
      });
    }
  });

  return {
    server,
    storePath: options.storePath || DEFAULT_STORE_PATH
  };
}

class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const derived = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${derived}`;
}

function verifyPassword(password, passwordHash) {
  const [salt, expected] = String(passwordHash || '').split(':');
  if (!salt || !expected) {
    return false;
  }

  const candidate = scryptSync(password, salt, 64);
  const expectedBuffer = Buffer.from(expected, 'hex');
  if (candidate.length !== expectedBuffer.length) {
    return false;
  }
  return timingSafeEqual(candidate, expectedBuffer);
}

async function requireSession(request, store) {
  const authHeader = request.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice('Bearer '.length) : '';
  if (!token) {
    throw new AppError(401, 'missing bearer token');
  }

  const state = await store.read();
  const session = state.sessions.find((entry) => entry.access_token === token);
  if (!session) {
    throw new AppError(401, 'invalid session token');
  }
  if (Date.now() > Date.parse(session.expires_at)) {
    throw new AppError(401, 'session expired');
  }

  const actor = state.actors.find((entry) => entry.id === session.actor_id);
  if (!actor) {
    throw new AppError(401, 'session actor missing');
  }

  const workspace = state.workspaces.find((entry) => entry.id === actor.workspace_id);
  if (!workspace) {
    throw new AppError(401, 'session workspace missing');
  }

  return {
    accessToken: token,
    actor,
    workspace,
    session
  };
}

async function findVisibleApproval(store, approvalId, session) {
  const state = await store.read();
  return findVisibleApprovalInState(state, approvalId, session);
}

function findVisibleApprovalInState(state, approvalId, session) {
  const approval = state.approvals.find((entry) => entry.id === approvalId);
  if (!approval) {
    throw new AppError(404, 'approval not found');
  }
  if (approval.workspace_id !== session.workspace.id) {
    throw new AppError(403, 'approval not visible to current actor');
  }
  if (
    approval.requested_by_actor_id !== session.actor.id &&
    approval.approver_actor_id !== session.actor.id
  ) {
    throw new AppError(403, 'approval not visible to current actor');
  }
  return approval;
}

function buildAuthPayload({ actor, workspace, session }) {
  return {
    actor: sanitizeActor(actor),
    workspace: sanitizeWorkspace(workspace),
    session: {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      expires_at: session.expires_at
    }
  };
}

function sanitizeActor(actor) {
  return {
    id: actor.id,
    workspace_id: actor.workspace_id,
    email: actor.email,
    display_name: actor.display_name,
    name: actor.display_name,
    created_at: actor.created_at
  };
}

function sanitizeWorkspace(workspace) {
  return {
    workspace_id: workspace.id,
    id: workspace.id,
    name: workspace.name,
    created_at: workspace.created_at
  };
}

function issueSession(state, actorId) {
  const now = Date.now();
  const session = {
    access_token: randomBytes(24).toString('hex'),
    refresh_token: null,
    actor_id: actorId,
    created_at: new Date(now).toISOString(),
    expires_at: new Date(now + SESSION_TTL_MS).toISOString()
  };

  state.sessions = state.sessions.filter((entry) => entry.actor_id !== actorId);
  state.sessions.push(session);
  return session;
}

function buildMessage({ speakerType, body, createdAt }) {
  return {
    id: randomUUID(),
    speaker_type: speakerType,
    author_kind: speakerType,
    body,
    created_at: createdAt
  };
}

function buildDisposition({ action, rationale, actorId, createdAt }) {
  return {
    id: randomUUID(),
    action,
    kind: action,
    rationale,
    note: rationale,
    actor_id: actorId,
    created_at: createdAt
  };
}

function mapDispositionToStatus(kind) {
  switch (kind) {
    case 'approve':
    case 'edit':
    case 'rewrite':
      return 'approved';
    case 'reject':
    case 'escalate':
      return 'rejected';
    case 'request_proof':
      return 'needs_proof';
    case 'defer':
      return 'deferred';
    default:
      return 'pending';
  }
}
