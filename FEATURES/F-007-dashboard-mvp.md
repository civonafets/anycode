# F-007 - Dashboard MVP

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`
- Owner: `TBD`

## Goal
Provide a standalone web dashboard for memory, policy/procedure, approvals, trace, and proof that can also be embedded into suite shells.

## In Scope
- Memory browser and tag registry view.
- Policy/procedure browser.
- Approval queue and detail panel with embedded agent conversation.
- Trace explorer and proof viewer.
- Embed-friendly routing and shell integration hooks.

## Out of Scope
- Advanced analytics beyond basic operational views in MVP.

## Acceptance Criteria
- Operators can inspect and filter pending approvals.
- Dashboard is usable directly outside suite shells.
- Reviewers can ask the agent why a coding or non-coding workflow change was proposed from the approval detail view.
- Reviewers can navigate from action to proof and policy context.
- Memory/policy records are browsable with revision context.

## Dependencies
- `F-002`, `F-005`, `F-006`, `F-014`, `F-015`
