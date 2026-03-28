# M-020 - Memory Lifecycle Governance (Decay, Archival, Revalidation)

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Keep long-lived memory high-signal by governing freshness, decay, archival, and revalidation instead of allowing unbounded stale context.

## Acceptance Criteria
- Memory lifecycle states are canonical and explicit:
  - `active`
  - `stale`
  - `archived`
  - `superseded`
- Retrieval scoring includes lifecycle/freshness controls without breaking explainability.
- Revalidation workflows exist for stale high-impact memories.
- Archived records are excluded by default from normal retrieval but remain auditable.
- Superseded and archived records retain provenance and trace continuity.

## Dependencies
- `M-001`, `M-005`, `M-011`, `M-015`, `M-018`
