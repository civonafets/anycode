# M-035 - Counterfactual Replay and Simulation Harness

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Replay historical traces with proposed memory/policy changes to estimate impact before rollout.

## Acceptance Criteria
- Replay harness can execute historical decision scenarios against candidate memory/policy versions.
- Output includes before/after metrics for decision quality and safety gates.
- Counterfactual failures can block promotion of risky memory/policy changes.
- Replay artifacts are reproducible and audit-linked.
- Simulation coverage includes coding and non-coding workflow sets.

## Dependencies
- `M-005`, `M-015`, `M-024`, `M-028`
