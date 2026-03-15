# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

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
- Memory package manager view with install source, version, trust/provenance, and external vs embedded state.
- Activation controls for package/category/tag with per-scope toggles (workspace/user/session as allowed).
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
- Operators can clearly see which memory packages are installed and whether each is external or embedded.
- Operators can toggle package/category/tag activation and see effective retrieval source state.
- Dashboard exposes enough retrieval attribution to debug memory impact on precision/effectiveness.

## Dependencies
- `F-002`, `F-005`, `F-006`, `F-014`, `F-015`
