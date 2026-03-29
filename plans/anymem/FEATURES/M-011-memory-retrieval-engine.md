# M-011 - Memory Retrieval Engine

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Provide explainable retrieval with tiered recall (`search -> describe -> expand_query`) and bounded deep expansion.

## Acceptance Criteria
- Ranking is deterministic and explainable.
- Activation filters (package/category/tag) are enforced.
- Fallback search mode works when advanced indexing is unavailable.
- Retrieval emits enough attribution to evaluate which memory source/package changed decision quality.
- Offline and replayable evaluation inputs exist for ranking regression checks.
- Retrieval outputs are consumable by the canonical decision-context contract without tool-specific reshaping.

## Dependencies
- `M-001`, `M-002`, `M-003`, `M-005`, `M-015`
