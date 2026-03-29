# M-033 - Connector Ingestion and Provenance Sync

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Ingest memory-relevant context from external systems while preserving provenance, sync state, and revocation behavior.

## Acceptance Criteria
- Connector contracts support incremental sync with stable source identifiers.
- Ingested records preserve source provenance and sync timestamps.
- Revoked connector access triggers deterministic sync-disable and data-handling policy.
- Connector ingestion respects scope, sensitivity, and trust controls.
- Connector ingestion quality and drift are measurable.

## Dependencies
- `M-001`, `M-002`, `M-005`, `M-031`
