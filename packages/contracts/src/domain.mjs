export const workflowKinds = Object.freeze([
  'coding_task',
  'memory_change',
  'policy_change',
  'risky_action',
  'general_work_item'
]);

export const approvalStatuses = Object.freeze([
  'pending',
  'approved',
  'rejected',
  'deferred',
  'needs_proof'
]);

export const dispositionKinds = Object.freeze([
  'approve',
  'reject',
  'edit',
  'rewrite',
  'request_proof',
  'defer',
  'escalate'
]);

export const messageAuthorKinds = Object.freeze([
  'agent',
  'user',
  'system'
]);

export function isWorkflowKind(value) {
  return workflowKinds.includes(value);
}

export function isDispositionKind(value) {
  return dispositionKinds.includes(value);
}

export function isMessageAuthorKind(value) {
  return messageAuthorKinds.includes(value);
}

export function apiEnvelope(data, meta = {}) {
  return {
    ok: true,
    data,
    meta
  };
}

export function apiError(status, message, details = {}) {
  return {
    ok: false,
    error: {
      status,
      message,
      ...details
    }
  };
}
