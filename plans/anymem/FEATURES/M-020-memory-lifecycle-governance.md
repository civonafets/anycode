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
- Lifecycle transitions are non-destructive by default: they change ranking/visibility state, not canonical memory existence.
- Retrieval scoring includes lifecycle/freshness controls without breaking explainability.
- Lifecycle policy defines inactivity demotion rules using age plus recent-use signals (`last_used_at`, bounded `use_count` influence).
- Revalidation workflows exist for stale high-impact memories.
- Archived records are excluded by default from normal retrieval but remain auditable.
- Superseded and archived records retain provenance and trace continuity.
- Legal hold is modeled as an explicit overlay constraint (not a replacement lifecycle state) that suspends expiry/deletion transitions until hold release.
- Stale memories require stronger intent/workstream match (or explicit pin/override) before they can re-enter high-priority context bundles.
- Automated lifecycle jobs cannot hard-delete memory; explicit human delete is required for destructive removal.

## Dependencies
- `M-001`, `M-005`, `M-011`, `M-015`, `M-018`, `M-032`
