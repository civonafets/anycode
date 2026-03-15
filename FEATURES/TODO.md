# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# TODO Queue

Queue order should reflect execution priority, not just feature priority.

## Next Up (P0)
1. `F-001` finalize canonical entities, workspace tenancy, and shared/private scoping boundaries.
2. `F-014` lock standalone core vs suite adapter contract.
3. `F-002` define backend API contracts, service seams, and workspace-safe auth scoping.
4. `F-015` define reusable approval domain and generic workflow types.
5. `F-016` define memory retrieval engine, ranking rules, tiered recall (`search -> describe -> expand`), and bounded deep expansion policy.
6. `F-004` define enforceable guardrail/procedure model and evaluation rules.
7. `F-005` define append-only trace events, proof artifact contract, and deep-recall/integrity audit events.
8. `F-003` design broker lifecycle, local interface contract, and per-session race/recovery controls.
9. `F-009` codex-cli wrapper MVP handshake with broker.
10. `F-010` claude-code wrapper MVP handshake with broker.
11. `F-012` publish core skill behavior contract and tool addenda.
12. `F-006` implement approval review UX and in-screen chat.

## After Core (P1)
1. `F-017` implement memory package export/install pipeline with strict sensitivity pruning and toggleable external vs embedded modes.
2. `F-007` standalone dashboard MVP for memory/policy/approval/trace plus memory source/category/tag activation controls.
3. `F-008` mobile inbox PWA approval/edit/chat flows.
4. `F-013` Analyt first-class suite adapter.
5. `F-011` codex app guided integration path with stated limits.

## Parking Lot (P2)
1. Optional dedicated vector store (`Qdrant`) migration plan.
2. Policy simulation against historical trace.
3. Offline broker queueing mode.
4. Non-Analyt reference integration beyond the initial portability proof.
