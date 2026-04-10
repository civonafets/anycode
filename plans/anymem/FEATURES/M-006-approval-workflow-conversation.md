# M-006 - Approval Workflow and Conversation Surfaces

## Status
- Priority: `P0`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Provide generic approval review surfaces with non-binary outcomes and same-screen agent chat.

## Acceptance Criteria
- Approvers can approve/reject/edit/rewrite/request-proof/defer/escalate.
- Chat and disposition history remain first-class and immutable in trace.
- Works for coding and non-coding workflow types.
- Mandatory approval behavior is enforceable from policy risk-tier outputs (`medium`/`high`/`critical` as configured).
- Critical-tier actions support multi-party approval requirements with deterministic completion rules.

## Dependencies
- `M-004`, `M-005`, `M-010`
