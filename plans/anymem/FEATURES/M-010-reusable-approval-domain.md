# M-010 - Reusable Approval Domain

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `In Progress`

## Goal
Define workflow-generic approval object model with conversations, non-binary outcomes, and scope-safe visibility.

## Required Object Shape
- Core record fields: stable approval ID, workflow type, status, requested action, actor, scope, target resource references, policy/proof references, created/updated timestamps.
- Conversation fields: message ID, approval ID, speaker type (`agent`, `human`, `system`), body, attachments/evidence refs, created timestamp.
- Disposition fields: disposition ID, approval ID, action (`approve`, `reject`, `edit`, `rewrite`, `request-proof`, `defer`, `escalate`), actor, rationale, payload patch or replacement ref, created timestamp.

## Initial API Resource Shape
- Approval resource:
  - `approval_id`
  - `workflow_type`
  - `status`
  - `requested_action`
  - `created_by_actor_id`
  - `current_scope`
  - `target_refs`
  - `policy_refs`
  - `proof_refs`
  - `created_at`
  - `updated_at`
- Message resource:
  - `message_id`
  - `approval_id`
  - `speaker_type`
  - `body`
  - `attachment_refs`
  - `created_at`
- Disposition resource:
  - `disposition_id`
  - `approval_id`
  - `action`
  - `actor_id`
  - `rationale`
  - `payload_ref`
  - `created_at`

## State Model
- States: `pending`, `awaiting-agent-response`, `awaiting-proof`, `approved`, `rejected`, `deferred`, `escalated`, `superseded`, `cancelled`.
- Terminal states: `approved`, `rejected`, `superseded`, `cancelled`.
- Non-terminal states: `pending`, `awaiting-agent-response`, `awaiting-proof`, `deferred`, `escalated`.
- Rule: only one terminal state is active at a time.
- Rule: `edit`, `rewrite`, and `request-proof` produce follow-up state transitions without creating a second approval thread unless scope changes materially.

## Initial Transition Table
- `pending -> awaiting-agent-response`
  - trigger: human follow-up requires explicit agent reply before disposition
- `pending -> awaiting-proof`
  - trigger: `request-proof` disposition
- `pending -> approved`
  - trigger: `approve` disposition
- `pending -> rejected`
  - trigger: `reject` disposition
- `pending -> deferred`
  - trigger: `defer` disposition
- `pending -> escalated`
  - trigger: `escalate` disposition
- `pending -> cancelled`
  - trigger: initiator or system cancel before terminal resolution
- `awaiting-agent-response -> pending`
  - trigger: agent reply received
- `awaiting-agent-response -> approved|rejected|deferred|escalated|cancelled`
  - trigger: human disposition after reply or explicit closure
- `awaiting-proof -> pending`
  - trigger: required proof attached and validated for re-review
- `awaiting-proof -> rejected|deferred|escalated|cancelled`
  - trigger: human disposition without successful proof completion
- `deferred -> pending`
  - trigger: explicit reopen
- `escalated -> pending`
  - trigger: returned from escalated reviewer/workflow
- `pending|awaiting-agent-response|awaiting-proof|deferred|escalated -> superseded`
  - trigger: material target/scope change requiring replacement approval

## Disposition Result Rules
- `edit` updates the requested payload in-place and returns the approval to `pending`.
- `rewrite` attaches replacement payload and returns the approval to `pending`.
- `request-proof` moves the approval to `awaiting-proof`.
- `defer` moves the approval to `deferred`.
- `escalate` moves the approval to `escalated`.

## Acceptance Criteria
- Domain supports memory/policy/risky-action/non-coding workflows.
- Supports package export/import approval workflows.
- Model is consumable by standalone UI and external products.
- State machine and disposition transitions are explicit and deterministic.
- Live approval updates are emitted as events suitable for first-party subscribed UI.
- External products can resume approval handling from canonical resource state after disconnect or process restart.
- Initial approval, message, and disposition resource fields are fixed enough for backend and UI implementation.

## Dependencies
- `M-001`, `M-002`, `M-009`

## Required Coverage
- Unit tests for approval state transitions, disposition semantics, and invalid transition rejection.
- Integration tests for same-thread conversation + disposition flows and reconnect/resume behavior from canonical resources.
- Event-contract tests validating live update ordering and replay compatibility for first-party subscribed clients.
