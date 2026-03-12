# F-009 - Codex CLI Wrapper Integration

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`
- Owner: `TBD`

## Goal
Launch Codex CLI through a local wrapper that binds sessions to broker-enforced governance.

## In Scope
- Startup wrapper handshake with broker.
- Memory/policy bootstrap at session start.
- Privileged action gating hooks.

## Out of Scope
- Replacing Codex runtime behavior outside wrapper hooks.

## Acceptance Criteria
- Wrapped session can fetch memory and policy state before work.
- Privileged actions hit broker policy checks before execution.
- Trace and proof submission works from Codex CLI workflow.

## Dependencies
- `F-003`, `F-004`, `F-005`, `F-012`
