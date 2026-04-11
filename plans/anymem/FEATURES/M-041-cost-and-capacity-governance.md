# M-041 - Cost and Capacity Governance

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Control tenant-level resource usage and cost with enforceable runtime policies.

## Acceptance Criteria
- Per-tenant quotas are configurable and enforceable.
- Rate limits are explicit for key API and event paths.
- Budget guardrails and consumption alerts are supported.
- Consumption accounting is captured per request/session/agent principal with token and estimated-cost breakdowns suitable for user-visible spend tracking.
- Budgets and alerts can be segmented by retrieval fidelity class (`compact`, `balanced`, `full_cited`, `full_original`) to prevent accidental runaway spend on high-fidelity defaults.
- Backpressure policy is explicit and exposed via machine-readable error hints.
- Usage and throttling events are traceable for operational review.

## Dependencies
- `M-002`, `M-014`, `M-028`
