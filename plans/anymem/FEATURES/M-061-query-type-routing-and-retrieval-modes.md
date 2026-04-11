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

## Retrieval Fidelity Profiles (Orthogonal to Mode)
- `auto`
  - system/agent chooses fidelity under policy and budget rules
- `compact`
  - short context-first retrieval with citations and drill-down links
- `balanced`
  - mixed compact + evidence behavior for general workflows
- `full_cited`
  - full supporting memory passages with explicit citations/provenance
- `full_original`
  - original source memory/artifact payloads with no summary-only substitution when applicable

## Acceptance Criteria
- Retrieval mode selection is explicit, inspectable, and overrideable through policy where needed.
- Retrieval fidelity selection is explicit, inspectable, and overrideable through policy where needed.
- Different modes can change candidate sources, ranking weights, expansion depth, and evidence-escalation behavior.
- Agent callers can run in `auto` fidelity mode where the agent/runtime chooses compact vs full evidence under policy limits.
- Human or workflow directives can force `full_cited` or `full_original` for precision-critical tasks.
- If strict requested fidelity cannot be satisfied because of policy, permission, or budget constraints, the system fails deterministically instead of silently downgrading.
- Fact lookup favors precision and verbatim grounding.
- Multi-hop synthesis favors compiled views and linked evidence sets while preserving drill-down paths.
- Temporal recall favors time-normalized events and sequence-aware ranking.
- Preference recall favors durable behavioral memory with suppression/recency controls suited to persona memory.
- Benchmark and replay outputs include retrieval mode attribution so regressions can be diagnosed by mode rather than only by aggregate score.
- Benchmark and replay outputs include fidelity attribution and token/cost usage slices so regressions can be diagnosed by retrieval depth, not only aggregate quality.

## Dependencies
- `M-011`, `M-015`, `M-021`, `M-024`, `M-041`, `M-060`

## Required Coverage
- Mode-classification tests for representative query/task fixtures.
- Retrieval-regression tests split by mode rather than only aggregate quality.
- Evidence-escalation tests proving sensitive modes trigger raw support when required.
- Fidelity policy tests covering `auto`, `compact`, `full_cited`, and `full_original`, including strict failure paths.
- Performance tests showing routing overhead remains bounded on hot paths.
