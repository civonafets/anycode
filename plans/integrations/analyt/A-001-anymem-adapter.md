# A-001 - Analyt Adapter for anymem

## Goal
Integrate anymem as a first-class Analyt capability without changing anymem canonical ownership.

## Adapter Shape
- Navigation: dedicated first-class `anymem` suite entry.
- Auth: Analyt session exchanges for short-lived anymem token; Analyt does not become canonical identity source.
- Freshness: Analyt UI consumes `anymem` ordered replayable `SSE` (`/api/v1/events/stream`) as the primary first-party live state path.
- Positioning: `anymem` and `anycode` appear side by side in the same suite grouping, not nested.

## Acceptance Criteria
- Analyt can issue short-lived anymem token exchange flow.
- Governance/memory surfaces are accessible via suite entry point.
- anymem remains independently operable outside Analyt.
- Analyt entitlement mapping for anymem is explicit and independently switchable.
- Navigation ownership and failure behavior are defined when anymem is unavailable.
- Analyt can degrade `anymem` surfaces independently without hiding or breaking `anycode`.
- Adapter behavior for `409 replay_window_expired` is explicit: resync canonical resources, then resume stream from head.

## Dependencies
- `M-002`, `M-007`, `M-009`, `M-010`
