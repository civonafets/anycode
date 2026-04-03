# M-015 - Retrieval Evaluation and Benchmarks

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Measure and regress retrieval quality, attribution, and toggle/package impact before retrieval behavior is treated as stable.

## Acceptance Criteria
- Gold-set tasks and queries exist for replayable retrieval evaluation.
- Gold-set coverage spans coding and non-coding workflows so quality does not overfit engineering use cases.
- Benchmarks cover native memory, external packages, embedded packages, and activation toggles.
- Benchmarks include explicit hybrid-routing workloads where anymem plans retrieval over external corpora before fetch.
- Benchmark suite includes long-horizon workloads where full-history context stuffing is intentionally non-viable:
  - million-plus-token corpora
  - 10M-class workloads or locally reproducible proxies of that regime
- Benchmark suite includes baseline comparisons for:
  - naive context stuffing where technically possible
  - raw retrieval without compiled views
  - compiled-view-assisted retrieval
- Benchmark matrix includes:
  - warm L1 hit
  - warm L2 hit
  - cold miss
  - backend timeout/degraded path
  - high-concurrency identical-query bursts
- Ranking regressions can be detected offline.
- Evaluation captures attribution for which sources changed quality or precision.
- Evaluation includes decision-context quality checks (selection precision and missing-critical-context rate).
- Evaluation covers memory tasks beyond simple fact lookup:
  - contradiction resolution
  - temporal ordering
  - instruction persistence
  - multi-hop synthesis
  - preference/behavior consistency
- Evaluation includes escalation-accuracy checks:
  - high-risk queries trigger raw-evidence expansion when required
  - `never_compress` and `prefer_verbatim` records are not silently replaced by summaries
- Evaluation tracks distraction metrics and promotion thresholds:
  - irrelevant-memory mention rate
  - stale-topic resurfacing rate
  - suppression-violation rate
- Time-sliced and workstream-sliced benchmark sets exist to catch long-tail over-personalization drift.
- Retrieval/policy rollout gates fail when distraction metrics regress beyond agreed thresholds.
- Benchmarks include long-horizon recall checks proving that old but still-relevant memories remain retrievable under strong intent/workstream match.
- Benchmark outputs include cache-performance counters (tier hit ratio, miss cost, invalidation lag, stale-serving rate).
- Benchmark outputs include practical systems metrics:
  - end-to-end latency
  - retrieval fanout
  - token spend for packed context
  - compact-view hit rate versus raw-evidence fallback rate

## Dependencies
- `M-005`, `M-011`, `M-012`, `M-020`, `M-021`, `M-022`, `M-024`
