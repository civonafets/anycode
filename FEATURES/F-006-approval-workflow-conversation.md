# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-006 - Approval Workflow and Conversation

## Status
- Priority: `P0`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`
- Owner: `TBD`

## Goal
Deliver approval review surfaces with non-binary outcomes, same-screen agent chat, and attached conversation history on top of the reusable approval domain.

## In Scope
- Approval detail UX for generic approval objects.
- Conversation thread UX tied to pending approval.
- Real-time chat with the agent inside the approval detail screen.
- Editing, rewrite, defer, and escalation flows.

## Out of Scope
- Enterprise workflow engine integrations in MVP.

## Acceptance Criteria
- Supported outcomes include approve/reject/edit/rewrite/request-proof/defer/escalate.
- Every approval item includes a human-readable reason from the agent or workflow.
- Approval surfaces work for coding and non-coding workflow types.
- Approver can ask follow-up questions and receive agent responses without leaving the approval screen.
- Privileged step can be unblocked by approved disposition only.
- Full conversation and disposition history is retained.

## Dependencies
- `F-004`, `F-005`, `F-015`
