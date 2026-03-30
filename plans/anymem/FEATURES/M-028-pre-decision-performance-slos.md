# M-028 - Pre-Decision Performance SLOs and Latency Guardrails

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Define measurable SLOs and regression guardrails for pre-decision memory and policy paths used by agent integrations.

## Acceptance Criteria
- SLO targets are defined for critical pre-decision calls:
  - retrieval planning
  - decision-context assembly
  - memory search/describe
  - policy evaluation
- SLOs include percentile targets and error-budget semantics.
- SLOs separate warm-cache and cold-cache paths for hybrid retrieval deployments.
- Initial v1 target envelope is explicit:
  - retrieval planning p95 <= `120ms` (warm), <= `300ms` (cold)
  - decision-context assembly p95 <= `250ms` (warm), <= `700ms` (cold)
  - hybrid retrieval gateway p95 <= `450ms` (warm L2 hit path), <= `1800ms` (cold external path)
- Cache effectiveness guardrails are defined:
  - target L2+L1 combined hit rate >= `60%` for repeated workflow sets
  - invalidation-to-consistency lag p95 <= `3s`
- Performance test harnesses exist for standalone API and broker-mediated paths.
- Regressions against SLO thresholds fail phase proof bundles.
- Benchmarks include coding and non-coding workflow classes.

## Dependencies
- `M-003`, `M-011`, `M-014`, `M-015`, `M-021`, `M-024`
