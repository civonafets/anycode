# M-021 - Context Packing and Budget Policy

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Define deterministic context-packing rules per integration/model budget so memory remains performant and behavior stays consistent across tools.

## Acceptance Criteria
- Budget profiles are defined per tool/model integration with explicit token and section budgets.
- Context assembly order is deterministic and policy-aware.
- Context assembly enforces suppression and intent/workstream relevance gates before budget allocation.
- Packing policy includes retrieval-plan-aware budget slicing:
  - budget reserved for high-confidence planned targets first
  - bounded fallback slice for exploratory retrieval only when allowed
- Truncation strategy is deterministic and traceable (no silent random drops).
- Packing outputs include attribution for included and dropped context segments.
- Overflow and budget-pressure metrics are emitted for tuning and regression checks.
- Packing outputs align with the canonical decision-context contract for cross-tool consistency.
- Under budget pressure, low-relevance aged context is dropped before recent high-intent matches unless policy marks context as mandatory.
- Packing metadata includes whether context came from warm cache, cold retrieval, or degraded fallback so downstream behavior can be audited.

## Dependencies
- `M-003`, `M-005`, `M-011`, `M-014`, `M-015`, `M-019`, `M-024`
