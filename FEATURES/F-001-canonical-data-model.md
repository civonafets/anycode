# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-001 - Canonical Data Model and Storage Baseline

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`
- Owner: `TBD`

## Goal
Define concrete domain entities and boundaries for memory, policy/procedure, trace/proof, approvals/conversation, standalone auth, and day-1 workspace tenancy using `Postgres` + `pgvector`.

## In Scope
- Domain entities and ownership boundaries.
- Organization/workspace/member/role entities and tenancy boundaries.
- Cross-domain references and versioning.
- Minimal indexing and retention expectations.
- Generic workflow typing so approvals are not tied to coding-only objects.
- Shared vs private record scoping rules across workflows.
- Retrieval source types, retrieval snapshots, and score metadata.
- Lineage links for derived/compacted context so retrieved artifacts can be expanded back to governed source records.
- Search capability flags and fallback-mode metadata to support environments without optional advanced indexing.
- Memory package entities (`memory_package`, `memory_package_version`, `package_item_map`) with provenance and trust metadata.
- Activation control entities for package/category/tag toggles and effective-scope resolution.
- Export pipeline records for sensitivity scan findings, redaction actions, and approval linkage.

## Out of Scope
- Final production SQL migrations.
- Alternate storage engines in MVP.

## Acceptance Criteria
- Clear entity map for all four domains.
- Standalone auth/session entities are identified.
- Org/workspace/membership entities are identified with clear ownership and lifecycle.
- Approval entities support generic workflow types without assuming code diffs.
- Memory schema supports separate source kinds such as approved knowledge, feedback, and proposals.
- Domain records support shared and private scopes without per-workflow schema forks.
- Query-scoping invariants are explicitly defined so cross-workspace reads/writes are blocked by default.
- Personal/self-host mode maps to a default org/workspace model instead of a separate single-user schema.
- Retrieval snapshots can record query tokens, score components, and returned records.
- Derived context records can retain parent/source lineage required for explainability and expansion.
- Retrieval operations can persist search-mode metadata (`full_text`, `fallback_like`, or equivalent) for audit.
- Memory package versions can map to exported records and preserve source lineage for import/embed actions.
- Activation toggles can be resolved deterministically by workspace, user, and session scope.
- Sensitivity/redaction outcomes are modeled as first-class records linked to export jobs.
- Rules describing mutable vs immutable records.
- Retrieval metadata fields defined for memory records.
- Append-only trace invariant formally stated.

## Dependencies
- None

## Notes
This feature is the prerequisite for backend and broker contracts.
