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
- Rules describing mutable vs immutable records.
- Retrieval metadata fields defined for memory records.
- Append-only trace invariant formally stated.

## Dependencies
- None

## Notes
This feature is the prerequisite for backend and broker contracts.
