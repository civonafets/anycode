# M-064 - Autoresearch Memory Optimization Harness

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Continuously evaluate and improve memory-system architecture, retrieval routing, prompt/data-pipeline behavior, and compilation strategies through replayable experiment loops rather than manual tuning alone.

## Experiment Scope
- Retrieval architecture variants.
- Prompt and context-assembly variants.
- Normalization and compilation pipeline variants.
- Multimodal extraction pipeline variants.
- Health-check and repair-policy variants.
- Hybrid RAG planning and cache-policy variants.

## Acceptance Criteria
- Experiment harness can replay benchmark and real workload slices against candidate memory-system variants.
- Results separate architecture, prompt, data-pipeline, and bug-fix effects rather than collapsing everything into one score.
- Harness supports long-horizon, multimodal, and distraction-sensitive evaluation scenarios.
- Findings can recommend changes, but production promotion still requires explicit policy/test gates.
- Experiment runs are reproducible, traceable, and comparable over time.
- The system can surface high-value discovered improvements such as bug fixes, normalization issues, routing changes, or prompt changes.

## Dependencies
- `M-015`, `M-035`, `M-055`, `M-057`, `M-061`

## Required Coverage
- Replay tests for deterministic experiment re-execution.
- Reporting tests for before/after experiment attribution.
- Safety tests proving experiment recommendations cannot bypass rollout gates.
- Benchmark tests covering text, multimodal, and long-horizon workloads.
