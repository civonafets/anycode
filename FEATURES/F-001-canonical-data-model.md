# F-001 - Canonical Data Model and Storage Baseline

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `In Progress`
- Owner: `TBD`

## Goal
Define concrete domain entities and boundaries for memory, policy/procedure, trace/proof, and approvals/conversation using `Postgres` + `pgvector`.

## In Scope
- Domain entities and ownership boundaries.
- Cross-domain references and versioning.
- Minimal indexing and retention expectations.

## Out of Scope
- Final production SQL migrations.
- Alternate storage engines in MVP.

## Acceptance Criteria
- Clear entity map for all four domains.
- Rules describing mutable vs immutable records.
- Retrieval metadata fields defined for memory records.
- Append-only trace invariant formally stated.

## Dependencies
- None

## Notes
This feature is the prerequisite for backend and broker contracts.
