# M-017 - Agent MCP Adapter (Optional)

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Expose an optional agent-facing MCP adapter that reduces tool-surface context cost while preserving canonical anymem contracts and enforcement paths.

## Contract Position
- MCP is an adapter on top of canonical `anymem` REST/SDK contracts.
- It is not the canonical contract between products.
- `anycode` and other product consumers still depend on public `anymem` APIs/SDKs for durable product integration.

## Adapter Shape
- Tool surface is intentionally narrow:
  - `search`
  - `execute`
- `search` helps an agent discover relevant operations, resources, and bounded workflows without loading a huge static tool manifest.
- `execute` resolves to canonical `anymem` API/SDK calls or bounded multi-step workflows implemented on top of those calls.

## Enforcement Rules
- Every MCP operation is authenticated and permission-scoped against canonical `anymem` auth and RBAC.
- MCP execution may not bypass policy evaluation, approval requirements, proof requirements, activation rules, or trace emission.
- Server-side execution environment is sandboxed and bounded by:
  - per-request timeout
  - token/output caps
  - allowed operation classes
  - workspace scope

## Acceptance Criteria
- MCP adapter improves agent ergonomics without becoming a second source of product semantics.
- All reads and writes remain attributable to canonical resources and trace events.
- Permission failures, approval requirements, and proof requirements surface consistently with REST/SDK behavior.
- MCP `execute` paths support canonical retrieval-fidelity controls (`auto`, `compact`, `balanced`, `full_cited`, `full_original`) without introducing adapter-only semantics.
- MCP responses can surface canonical consumption telemetry fields so agent hosts can expose token/spend impact to users.
- MCP operations can expose saved-view discovery, bounded adaptive UI generation, and per-session presentation-mode controls through canonical anymem resources instead of adapter-only view logic.
- Tool discovery and execution remain bounded enough for reliable use in agent hosts such as Codex app.

## Dependencies
- `M-005`, `M-013`, `M-014`, `M-016`
