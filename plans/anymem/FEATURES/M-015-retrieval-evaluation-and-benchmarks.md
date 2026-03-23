# M-015 - Retrieval Evaluation and Benchmarks

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Measure and regress retrieval quality, attribution, and toggle/package impact before retrieval behavior is treated as stable.

## Acceptance Criteria
- Gold-set tasks and queries exist for replayable retrieval evaluation.
- Benchmarks cover native memory, external packages, embedded packages, and activation toggles.
- Ranking regressions can be detected offline.
- Evaluation captures attribution for which sources changed quality or precision.

## Dependencies
- `M-005`, `M-011`, `M-012`
