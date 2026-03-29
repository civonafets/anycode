# M-028 - Pre-Decision Performance SLOs and Latency Guardrails

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Define measurable SLOs and regression guardrails for pre-decision memory and policy paths used by agent integrations.

## Acceptance Criteria
- SLO targets are defined for critical pre-decision calls:
  - decision-context assembly
  - memory search/describe
  - policy evaluation
- SLOs include percentile targets and error-budget semantics.
- Performance test harnesses exist for standalone API and broker-mediated paths.
- Regressions against SLO thresholds fail phase proof bundles.
- Benchmarks include coding and non-coding workflow classes.

## Dependencies
- `M-003`, `M-011`, `M-014`, `M-015`, `M-021`, `M-024`
