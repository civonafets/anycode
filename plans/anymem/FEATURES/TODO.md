# anymem TODO Queue

## Next Up (P0)
1. `M-001` finalize canonical entities, workspace tenancy, scope, and package lineage records.
2. `M-026` define external agent/service-principal identity model and lifecycle.
3. `M-016` define explicit role/scope/delegation rules for publish/install/embed/toggle/approve actions.
4. `M-019` define deterministic preference precedence and conflict resolution outputs.
5. `M-023` define sensitive personal-memory category controls with deny-by-default access policy.
6. `M-009` lock standalone boundary and adapter contract model.
7. `M-014` define API/SDK contract v1, including auth propagation, idempotency, async jobs, versioning, and failure semantics.
8. `M-024` define canonical decision-context contract consumed by agent integrations.
9. `M-002` define backend API contracts and service seams.
10. `M-018` define manual memory authoring and preference capture behavior.
11. `M-010` finalize reusable approval object model.
12. `M-011` define retrieval ranking, tiered recall, and bounded deep expansion policy.
13. `M-004` define enforceable policy/procedure model, evaluation order, and degraded-mode action policy.
14. `M-025` define degraded-mode continuity behavior across API, broker, and adapters.
15. `M-005` finalize append-only trace/proof and audit event shapes.
16. `M-028` define pre-decision latency SLOs and regression guardrails.
17. `M-003` finalize broker runtime role, lifecycle, and concurrency/recovery controls.
18. `M-021` define model/tool context packing budgets and truncation policy.
19. `M-013` publish generic skill behavior contract.
20. `M-006` implement approval review surfaces with same-screen agent chat.

## After Core (P1)
1. `M-015` implement retrieval evaluation harness and benchmark scenarios.
2. `M-020` implement lifecycle governance and revalidation flows for long-lived memory.
3. `M-022` implement outcome-feedback to memory-proposal loop.
4. `M-027` implement deterministic concurrent write conflict/merge handling.
5. `M-012` implement package export/install pipeline with trust, sensitivity pruning, revocation, update policy, and activation controls.
6. `M-029` implement hybrid gateway to external vector/doc retrieval and optional RAM hot tier.
7. `M-017` implement optional MCP adapter over canonical APIs for low-context agent access without weakening governance boundaries.
8. `M-007` implement dashboard memory/policy/approval/trace surfaces.
9. `M-008` implement mobile inbox flows.

## Rule
- anymem planning owns generic governance domains and does not depend on anycode implementation details.
- No feature may be closed without explicit test coverage requirements and passing automated tests.
- No phase may be closed without a phase proof bundle containing regression results and phase-relevant performance check results.
