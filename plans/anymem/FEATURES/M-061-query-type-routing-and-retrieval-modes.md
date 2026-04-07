# M-061 - Query-Type Routing and Retrieval Modes

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Route retrieval through different strategies based on what kind of memory task the caller is actually performing, instead of treating every query the same.

## Retrieval Modes
- `fact_lookup`
- `temporal_recall`
- `preference_recall`
- `policy_or_procedure_lookup`
- `workflow_state_lookup`
- `multi_hop_synthesis`
- `artifact_or_multimodal_lookup`

## Acceptance Criteria
- Retrieval mode selection is explicit, inspectable, and overrideable through policy where needed.
- Different modes can change candidate sources, ranking weights, expansion depth, and evidence-escalation behavior.
- Fact lookup favors precision and verbatim grounding.
- Multi-hop synthesis favors compiled views and linked evidence sets while preserving drill-down paths.
- Temporal recall favors time-normalized events and sequence-aware ranking.
- Preference recall favors durable behavioral memory with suppression/recency controls suited to persona memory.
- Benchmark and replay outputs include retrieval mode attribution so regressions can be diagnosed by mode rather than only by aggregate score.

## Dependencies
- `M-011`, `M-015`, `M-021`, `M-024`, `M-060`

## Required Coverage
- Mode-classification tests for representative query/task fixtures.
- Retrieval-regression tests split by mode rather than only aggregate quality.
- Evidence-escalation tests proving sensitive modes trigger raw support when required.
- Performance tests showing routing overhead remains bounded on hot paths.
