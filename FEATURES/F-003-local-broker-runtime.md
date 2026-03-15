# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-003 - Local Broker Runtime

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`
- Owner: `TBD`

## Goal
Build a local broker that exposes MCP/HTTP interfaces, mediates memory retrieval and policy checks, and emits trace/proof events to backend in both standalone and host-managed modes.

## In Scope
- Broker lifecycle and session binding.
- Tool-facing local interfaces.
- Routing for retrieval, approval requests, and proof submission.
- Standalone lifecycle plus externally managed lifecycle hooks for suites such as Analyt.
- Automatic pre-task memory recall and agent-invoked on-demand memory search.
- Per-session operation serialization to prevent ingest/retrieval/proposal races under concurrent tool activity.
- Restart reconciliation for local queue/state so broker restarts do not break trace continuity.
- Delegated deep-recall orchestration with bounded execution and guaranteed cleanup hooks.

## Out of Scope
- Model hosting or token proxying.

## Acceptance Criteria
- Tool session can bootstrap through broker.
- Broker can run independently of Analyt host runtime.
- The same broker binary can be supervised by an external host manager without changing protocol behavior.
- Broker injects top-ranked relevant context before work starts when retrieval policy allows it.
- Broker exposes a searchable memory interface for mid-task lookup.
- Broker serializes mutable per-session operations to avoid race-induced state corruption.
- Broker enforces depth/token/timeout limits for deep recall and cleans delegated sessions/grants after completion or failure.
- Broker can reconcile pending local operations after restart without cross-workspace leakage.
- Privileged actions are paused at approval boundaries.
- Trace/proof events are persisted server-side.

## Dependencies
- `F-001`, `F-002`, `F-004`, `F-005`, `F-014`, `F-016`
