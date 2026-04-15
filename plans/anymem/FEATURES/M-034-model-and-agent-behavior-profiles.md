# M-034 - Model and Agent Behavior Profiles

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Render decision-context consistently across different model families and agent runtimes using explicit behavior profiles.

## Acceptance Criteria
- Profile schema defines context rendering and budget strategy per model/agent class.
- Profile schema defines adaptive-presentation defaults per model/agent class:
  - when to stay text-first
  - when to suggest a saved/generated view
  - allowed component families and interaction classes
  - allowed theme/style profiles
- Profile schema supports lower-capability local-model constraints:
  - preferred compact component manifest mode
  - reduced approved-component subsets
  - maximum component-tree depth
  - maximum simultaneous interactive regions
  - prefer server-side compose/validate flow over local spec authoring when risk of hallucinated props is high
  - retry behavior after validation-hint feedback
- Adaptive UI profile fields are explicit:
  - `ui_authoring_mode`
  - `allowed_component_pack_ids[]`
  - `use_compact_manifest`
  - `max_validation_retries`
  - `fallback_mode_on_failure`
  - `prefer_saved_view_threshold`
- Default lower-capability profile behavior should be explicit:
  - prefer reuse
  - then prefer server-side compose
  - then allow local spec authoring only inside profile-approved limits
- Decision-context output stays semantically consistent across profiles.
- Profile versioning and rollback are explicit.
- Cross-profile regression tests detect behavior drift.
- Profiles are traceable in execution metadata.

## Dependencies
- `M-015`, `M-021`, `M-024`, `M-028`
