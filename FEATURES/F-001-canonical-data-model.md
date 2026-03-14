# F-001 - Canonical Data Model and Storage Baseline

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`
- Owner: `TBD`

## Goal
Define concrete domain entities and boundaries for memory, policy/procedure, trace/proof, approvals/conversation, and standalone auth using `Postgres` + `pgvector`.

## In Scope
- Domain entities and ownership boundaries.
- Cross-domain references and versioning.
- Minimal indexing and retention expectations.
- Generic workflow typing so approvals are not tied to coding-only objects.
- Retrieval source types, retrieval snapshots, and score metadata.

## Out of Scope
- Final production SQL migrations.
- Alternate storage engines in MVP.

## Acceptance Criteria
- Clear entity map for all four domains.
- Standalone auth/session entities are identified.
- Approval entities support generic workflow types without assuming code diffs.
- Memory schema supports separate source kinds such as approved knowledge, feedback, and proposals.
- Retrieval snapshots can record query tokens, score components, and returned records.
- Rules describing mutable vs immutable records.
- Retrieval metadata fields defined for memory records.
- Append-only trace invariant formally stated.

## Dependencies
- None

## Notes
This feature is the prerequisite for backend and broker contracts.
