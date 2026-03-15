# C-001 - Codex CLI Wrapper Integration

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Launch Codex CLI through an anycode wrapper that consumes anymem APIs for memory/policy/approval/trace workflows.

## Acceptance Criteria
- Session bootstrap retrieves anymem context through API/SDK only.
- Privileged action gating honors anymem policy decisions.
- Trace/proof submissions route through anymem contracts.

## Dependencies
- `M-002`, `M-003`, `M-004`, `M-005`, `M-013`
