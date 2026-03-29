# M-004 - Policy and Procedure Enforcement Engine

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Define deterministic generic policy/procedure evaluation for allow/block/require-approval outcomes.

## Acceptance Criteria
- Evaluation order and outputs are deterministic.
- Procedure updates are proposal/approval-driven.
- Enforcement is separate from retrieval context.
- Action classes carry explicit degraded-mode directives (`block`, `warn`, `continue`) for memory/retrieval/policy partial outage conditions.

## Dependencies
- `M-001`, `M-002`
