import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const DEFAULT_STATE = Object.freeze({
  workspaces: [],
  actors: [],
  sessions: [],
  approvals: []
});

export class JsonStore {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async init() {
    await mkdir(dirname(this.filePath), { recursive: true });
    try {
      const raw = await readFile(this.filePath, 'utf8');
      const next = normalizeState(JSON.parse(raw));
      await this.write(next);
    } catch {
      await this.write(structuredClone(DEFAULT_STATE));
    }
  }

  async read() {
    await this.init();
    const raw = await readFile(this.filePath, 'utf8');
    return normalizeState(JSON.parse(raw));
  }

  async write(state) {
    const next = JSON.stringify(normalizeState(state), null, 2);
    const tempPath = `${this.filePath}.tmp`;
    await writeFile(tempPath, next);
    await rename(tempPath, this.filePath);
  }

  async update(mutator) {
    const state = await this.read();
    const nextState = await mutator(state);
    const result = nextState && typeof nextState === 'object' ? nextState._result : undefined;
    const persistableState =
      nextState && typeof nextState === 'object' && '_result' in nextState
        ? Object.fromEntries(Object.entries(nextState).filter(([key]) => key !== '_result'))
        : nextState;
    await this.write(persistableState);
    return result ? { ...persistableState, _result: result } : persistableState;
  }
}

function normalizeState(state) {
  const workspaces = Array.isArray(state.workspaces) ? state.workspaces : state.organizations || [];
  const actors = Array.isArray(state.actors) ? state.actors : state.users || [];
  const sessions = Array.isArray(state.sessions) ? state.sessions : [];
  const approvals = Array.isArray(state.approvals) ? state.approvals : [];

  return {
    workspaces: workspaces.map(normalizeWorkspace),
    actors: actors.map(normalizeActor),
    sessions: sessions.map(normalizeSession),
    approvals: approvals.map(normalizeApproval)
  };
}

function normalizeWorkspace(workspace) {
  return {
    id: workspace.id,
    name: workspace.name,
    created_at: workspace.created_at
  };
}

function normalizeActor(actor) {
  return {
    id: actor.id,
    workspace_id: actor.workspace_id || actor.organization_id,
    email: actor.email,
    display_name: actor.display_name || actor.name,
    password_hash: actor.password_hash,
    created_at: actor.created_at
  };
}

function normalizeSession(session) {
  return {
    access_token: session.access_token || session.token,
    refresh_token: session.refresh_token ?? null,
    actor_id: session.actor_id || session.user_id,
    created_at: session.created_at,
    expires_at: session.expires_at
  };
}

function normalizeApproval(approval) {
  return {
    id: approval.id,
    workspace_id: approval.workspace_id,
    workflow_type: approval.workflow_type || approval.workflow_kind,
    workflow_kind: approval.workflow_type || approval.workflow_kind,
    title: approval.title,
    reason: approval.reason,
    status: approval.status,
    requested_by_actor_id: approval.requested_by_actor_id || approval.requested_by_user_id,
    approver_actor_id: approval.approver_actor_id || approval.approver_user_id,
    context: approval.context || {},
    messages: Array.isArray(approval.messages) ? approval.messages.map(normalizeMessage) : [],
    dispositions: Array.isArray(approval.dispositions)
      ? approval.dispositions.map(normalizeDisposition)
      : [],
    created_at: approval.created_at,
    updated_at: approval.updated_at
  };
}

function normalizeMessage(message) {
  return {
    id: message.id,
    speaker_type: message.speaker_type || message.author_kind,
    author_kind: message.speaker_type || message.author_kind,
    body: message.body,
    created_at: message.created_at
  };
}

function normalizeDisposition(disposition) {
  return {
    id: disposition.id,
    action: disposition.action || disposition.kind,
    kind: disposition.action || disposition.kind,
    rationale: disposition.rationale || disposition.note,
    note: disposition.rationale || disposition.note,
    actor_id: disposition.actor_id || disposition.actor_user_id,
    created_at: disposition.created_at
  };
}
