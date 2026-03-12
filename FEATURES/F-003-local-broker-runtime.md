# F-003 - Local Broker Runtime

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`
- Owner: `TBD`

## Goal
Build a local broker that exposes MCP/HTTP interfaces, mediates memory retrieval and policy checks, and emits trace/proof events to backend.

## In Scope
- Broker lifecycle and session binding.
- Tool-facing local interfaces.
- Routing for retrieval, approval requests, and proof submission.

## Out of Scope
- Model hosting or token proxying.

## Acceptance Criteria
- Tool session can bootstrap through broker.
- Privileged actions are paused at approval boundaries.
- Trace/proof events are persisted server-side.

## Dependencies
- `F-001`, `F-002`, `F-004`, `F-005`
