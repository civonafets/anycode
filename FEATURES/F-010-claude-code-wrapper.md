# F-010 - Claude Code Wrapper Integration

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`
- Owner: `TBD`

## Goal
Launch Claude Code through a local wrapper with the same governance contract used for Codex CLI.

## In Scope
- Session bootstrap with broker.
- Memory/policy retrieval path.
- Approval/proof/trace routing.

## Out of Scope
- Vendor-specific model orchestration beyond wrapper hooks.

## Acceptance Criteria
- Wrapped session behavior matches governance contract from Codex CLI path.
- Approval boundaries are enforced before risky actions.
- Trace captures proposal, disposition, and proof linkage.

## Dependencies
- `F-003`, `F-004`, `F-005`, `F-012`
