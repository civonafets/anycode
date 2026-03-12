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
} from '../../../packages/contracts/src/domain.mjs';
import { JsonStore } from './lib/json-store.mjs';
import { fail, ok, readJson } from './lib/http.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_STORE_PATH = resolve(__dirname, '../../../.local/dev-state.json');
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
          service: 'memory-guardrail-proof-system-api',
          status: 'ok',
          now: new Date().toISOString()
        });
      }

      if (method === 'GET' && url.pathname === '/api/v1/meta') {
        return ok(response, 200, {
          product: 'Memory Guardrail Proof System',
          mode: 'standalone-core',
          auth: 'standalone',
          approval_model: 'workflow-generic',
          workflow_kinds: workflowKinds,
          dispositions: dispositionKinds
        });
      }

      if (method === 'GET' && url.pathname === '/api/v1/approval-types') {
        return ok(response, 200, {
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
        const name = String(body.name || '').trim();
        const organizationName = String(body.organization_name || '').trim();

        if (!email || !password || !name || !organizationName) {
          return fail(response, 400, 'email, password, name, and organization_name are required');
        }
        if (password.length < 10) {
          return fail(response, 400, 'password must be at least 10 characters');
        }

        const state = await store.update(async (current) => {
          if (current.users.some((user) => user.email === email)) {
            throw new AppError(409, 'user already exists');
          }

          const organizationId = randomUUID();
          const userId = randomUUID();
          const now = new Date().toISOString();
          const passwordHash = hashPassword(password);

          current.organizations.push({
            id: organizationId,
            name: organizationName,
            created_at: now
          });
          current.users.push({
            id: userId,
            organization_id: organizationId,
            email,
            name,
            password_hash: passwordHash,
            created_at: now
          });

          return current;
        });

        const user = state.users.find((entry) => entry.email === email);
        return ok(response, 201, sanitizeUser(user));
      }

      if (method === 'POST' && url.pathname === '/api/v1/auth/login') {
        const body = await readJson(request);
        const email = String(body.email || '').trim().toLowerCase();
        const password = String(body.password || '');

        if (!email || !password) {
          return fail(response, 400, 'email and password are required');
        }

        const state = await store.read();
        const user = state.users.find((entry) => entry.email === email);
        if (!user || !verifyPassword(password, user.password_hash)) {
          return fail(response, 401, 'invalid credentials');
        }

        const token = randomBytes(24).toString('hex');
        const now = Date.now();
        const expiresAt = new Date(now + SESSION_TTL_MS).toISOString();

        state.sessions = state.sessions.filter((session) => session.user_id !== user.id);
        state.sessions.push({
          token,
          user_id: user.id,
          created_at: new Date(now).toISOString(),
          expires_at: expiresAt
        });
        await store.write(state);

        return ok(response, 200, {
          token,
          expires_at: expiresAt,
          user: sanitizeUser(user)
        });
      }

      if (method === 'GET' && url.pathname === '/api/v1/approvals') {
        const session = await requireSession(request, store);
        const state = await store.read();
        const approvals = state.approvals.filter(
          (approval) =>
            approval.requested_by_user_id === session.user.id ||
            approval.approver_user_id === session.user.id
        );
        return ok(response, 200, approvals, { count: approvals.length });
      }

      if (method === 'POST' && url.pathname === '/api/v1/approvals') {
        const session = await requireSession(request, store);
        const body = await readJson(request);
        const workflowKind = String(body.workflow_kind || '').trim();
        const title = String(body.title || '').trim();
        const reason = String(body.reason || '').trim();
        const context = body.context && typeof body.context === 'object' ? body.context : {};

        if (!isWorkflowKind(workflowKind)) {
          return fail(response, 400, 'workflow_kind is invalid', { allowed: workflowKinds });
        }
        if (!title || !reason) {
          return fail(response, 400, 'title and reason are required');
        }

        const now = new Date().toISOString();
        const approval = {
          id: randomUUID(),
          workflow_kind: workflowKind,
          title,
          reason,
          status: 'pending',
          requested_by_user_id: session.user.id,
          approver_user_id: session.user.id,
          context,
          messages: [
            {
              id: randomUUID(),
              author_kind: 'agent',
              body: reason,
              created_at: now
            }
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
        const approval = await findApproval(store, approvalMatch[1]);
        if (
          approval.requested_by_user_id !== session.user.id &&
          approval.approver_user_id !== session.user.id
        ) {
          return fail(response, 403, 'approval not visible to current user');
        }
        return ok(response, 200, approval);
      }

      const messageMatch = url.pathname.match(/^\/api\/v1\/approvals\/([^/]+)\/messages$/);
      if (method === 'POST' && messageMatch) {
        const session = await requireSession(request, store);
        const body = await readJson(request);
        const authorKind = String(body.author_kind || '').trim();
        const messageBody = String(body.body || '').trim();

        if (!isMessageAuthorKind(authorKind) || !messageBody) {
          return fail(response, 400, 'author_kind and body are required');
        }

        const state = await store.update(async (current) => {
          const approval = current.approvals.find((entry) => entry.id === messageMatch[1]);
          if (!approval) {
            throw new AppError(404, 'approval not found');
          }
          if (
            approval.requested_by_user_id !== session.user.id &&
            approval.approver_user_id !== session.user.id
          ) {
            throw new AppError(403, 'approval not visible to current user');
          }

          approval.messages.push({
            id: randomUUID(),
            author_kind: authorKind,
            body: messageBody,
            created_at: new Date().toISOString()
          });
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
        const kind = String(body.kind || '').trim();
        const note = String(body.note || '').trim();

        if (!isDispositionKind(kind)) {
          return fail(response, 400, 'kind is invalid', { allowed: dispositionKinds });
        }
        if (!note) {
          return fail(response, 400, 'note is required');
        }

        const state = await store.update(async (current) => {
          const approval = current.approvals.find((entry) => entry.id === dispositionMatch[1]);
          if (!approval) {
            throw new AppError(404, 'approval not found');
          }
          if (approval.approver_user_id !== session.user.id) {
            throw new AppError(403, 'current user is not the approver');
          }

          approval.dispositions.push({
            id: randomUUID(),
            kind,
            note,
            actor_user_id: session.user.id,
            created_at: new Date().toISOString()
          });
          approval.status = mapDispositionToStatus(kind);
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
  const session = state.sessions.find((entry) => entry.token === token);
  if (!session) {
    throw new AppError(401, 'invalid session token');
  }
  if (Date.now() > Date.parse(session.expires_at)) {
    throw new AppError(401, 'session expired');
  }

  const user = state.users.find((entry) => entry.id === session.user_id);
  if (!user) {
    throw new AppError(401, 'session user missing');
  }

  return {
    token,
    user
  };
}

async function findApproval(store, approvalId) {
  const state = await store.read();
  const approval = state.approvals.find((entry) => entry.id === approvalId);
  if (!approval) {
    throw new AppError(404, 'approval not found');
  }
  return approval;
}

function sanitizeUser(user) {
  return {
    id: user.id,
    organization_id: user.organization_id,
    email: user.email,
    name: user.name,
    created_at: user.created_at
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
