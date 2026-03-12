# F-006 - Approval Workflow and Conversation

## Status
- Priority: `P0`
- Phase: `3 - Surfaces`
- State: `Planned`
- Owner: `TBD`

## Goal
Deliver approval objects with non-binary outcomes, same-screen agent chat, and attached conversation history.

## In Scope
- Approval state machine and dispositions.
- Conversation thread model tied to pending approval.
- Real-time chat with the agent inside the approval detail screen.
- Editing, rewrite, defer, and escalation flows.

## Out of Scope
- Enterprise workflow engine integrations in MVP.

## Acceptance Criteria
- Supported outcomes include approve/reject/edit/rewrite/request-proof/defer/escalate.
- Every memory or rule/procedure change proposal includes a human-readable reason from the agent.
- Approver can ask follow-up questions and receive agent responses without leaving the approval screen.
- Privileged step can be unblocked by approved disposition only.
- Full conversation and disposition history is retained.

## Dependencies
- `F-002`, `F-004`, `F-005`
