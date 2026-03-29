# M-043 - Policy and Memory Rollout Controls

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Reduce rollout risk by supporting staged release, canary evaluation, and automatic rollback for policy/memory changes.

## Acceptance Criteria
- Rollout scopes are supported (tenant/workspace/profile segments).
- Canary strategy and success/failure thresholds are explicit.
- Automatic rollback triggers can be defined from quality/performance regressions.
- Rollout decisions are traceable with clear promotion/rollback artifacts.
- Counterfactual replay and live rollout controls can be combined in governance workflows.

## Dependencies
- `M-015`, `M-024`, `M-028`, `M-035`
