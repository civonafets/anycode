# M-021 - Context Packing and Budget Policy

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Define deterministic context-packing rules per integration/model budget so memory remains performant and behavior stays consistent across tools.

## Acceptance Criteria
- Budget profiles are defined per tool/model integration with explicit token and section budgets.
- Packing policy supports per-request retrieval fidelity directives:
  - `auto`
  - `compact`
  - `balanced`
  - `full_cited`
  - `full_original`
- Caller can delegate fidelity choice to agent/runtime (`auto`) or explicitly request high-fidelity context for precision-critical tasks.
- Context assembly order is deterministic and policy-aware.
- Context assembly enforces suppression and intent/workstream relevance gates before budget allocation.
- Context assembly is hierarchical by default:
  - compact curated knowledge views first when strongly relevant
  - compiled observations/concept summaries next
  - raw supporting evidence after that for grounding
- Packing policy supports evidence-escalation rules:
  - escalate to raw evidence for low-confidence or high-risk decisions
  - escalate when policy or record-level metadata requires verbatim treatment
  - skip summary-only packing for `never_compress` records when they are relevant
- Packing policy includes retrieval-plan-aware budget slicing:
  - budget reserved for high-confidence planned targets first
  - bounded fallback slice for exploratory retrieval only when allowed
- Packing policy supports strict-fidelity enforcement:
  - when strict fidelity is requested, no silent downgrade to lower-fidelity context is allowed
  - if strict fidelity cannot be satisfied, return deterministic policy/budget failure with machine-readable reason
- Truncation strategy is deterministic and traceable (no silent random drops).
- Packing outputs include attribution for included and dropped context segments.
- Overflow and budget-pressure metrics are emitted for tuning and regression checks.
- Packing emits request-level consumption telemetry:
  - estimated packed prompt tokens
  - retrieval processing tokens (when applicable)
  - token/cost split by memory layer and fidelity class
  - estimated savings versus full-original baseline when compact/balanced is used
- Packing outputs align with the canonical decision-context contract for cross-tool consistency.
- Packing policy can emit compact component-manifest slices and view-composition hints for adaptive UI flows so low-capability local models do not need full registry context.
- Under budget pressure, low-relevance aged context is dropped before recent high-intent matches unless policy marks context as mandatory.
- Packing metadata includes whether context came from warm cache, cold retrieval, or degraded fallback so downstream behavior can be audited.
- Policy explicitly disallows naive full-history stuffing as the default strategy, even on large-window models, except for explicit debug/research modes.
- Under budget pressure, records marked `never_compress` or `must_include_if_applicable` are protected from summary-only substitution when applicable to the decision.

## Dependencies
- `M-003`, `M-005`, `M-011`, `M-014`, `M-015`, `M-019`, `M-024`
