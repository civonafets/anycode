# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-005 - Trace and Proof Pipeline

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`
- Owner: `TBD`

## Goal
Implement durable event history and proof artifact linkage for auditability.

## In Scope
- Append-only trace event store.
- Linkage of memory/policy/approval/proof references per action.
- Proof artifact metadata contract.
- Retrieval trace with query inputs, score components, and injected context references.
- Retrieval execution-mode trace (`full_text` vs fallback) and ranking-version trace for reproducibility.
- Deep-recall delegation trace (grant created, consumed, revoked/expired, timed out).
- Integrity scan/repair event model for enterprise operations.
- Memory package export/import pipeline events and sensitivity/redaction decision events.
- Memory activation toggle events (package/category/tag) with actor and scope metadata.

## Out of Scope
- Heavy analytics and long-term data warehouse pipelines in MVP.

## Acceptance Criteria
- Every privileged action emits trace with policy result and proof status.
- Approval edits and re-evaluations are represented as events.
- Memory retrieval events record what was searched, what ranked highest, and what was injected.
- Retrieval trace records execution mode and ranking version so outcomes are reproducible during audits.
- Delegated deep-recall lifecycle is fully auditable from request to cleanup.
- Integrity checks and repair actions are represented as explicit trace events.
- Export/import/sensitivity pipeline stages are fully traceable.
- Audit can reconstruct which memory packages/categories/tags were enabled for a given decision window.
- Auditors can reconstruct "what was known at decision time."

## Dependencies
- `F-001`, `F-002`, `F-016`
