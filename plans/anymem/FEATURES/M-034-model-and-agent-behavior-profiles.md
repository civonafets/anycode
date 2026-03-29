# M-034 - Model and Agent Behavior Profiles

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Render decision-context consistently across different model families and agent runtimes using explicit behavior profiles.

## Acceptance Criteria
- Profile schema defines context rendering and budget strategy per model/agent class.
- Decision-context output stays semantically consistent across profiles.
- Profile versioning and rollback are explicit.
- Cross-profile regression tests detect behavior drift.
- Profiles are traceable in execution metadata.

## Dependencies
- `M-015`, `M-021`, `M-024`, `M-028`
