# M-007 - Dashboard MVP (Generic Governance)

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Deliver standalone governance dashboard for memory, policy, approvals, trace/proof, and package activation state.

## Acceptance Criteria
- Installed package state (external vs embed) is visible.
- Package/category/tag activation can be toggled.
- Retrieval attribution is visible for precision/effect debugging.
- Memory-level relevance controls are operable from dashboard (`mute`, `snooze_until`, unsuppress) with audit-linked change history.
- Dashboard exposes per-memory recency/usage/intent-match hints so operators can debug stale-topic resurfacing.

## Dependencies
- `M-002`, `M-005`, `M-006`, `M-010`, `M-012`
