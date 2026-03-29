# M-025 - Degraded-Mode and Continuity Policy

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Define consistent fail behavior for memory/policy/retrieval degradation so agents remain safe and predictable.

## Acceptance Criteria
- Action classes are explicitly mapped to degraded-mode behavior:
  - `block`
  - `warn`
  - `continue`
- Degraded-mode policy is enforced consistently across API, broker, and adapters.
- Decision-context responses include degraded-mode indicators and reason codes.
- Recovery behavior after outage is defined, including required resync checks.
- Continuity and degraded-mode events are traced and alertable.

## Dependencies
- `M-003`, `M-004`, `M-005`, `M-014`, `M-024`
