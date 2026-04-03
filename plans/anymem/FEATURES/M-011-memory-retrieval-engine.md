# M-011 - Memory Retrieval Engine

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Provide explainable retrieval with tiered recall (`search -> describe -> expand_query`) and bounded deep expansion.

## Scoring Baseline (v1)
- Recall is multi-strategy, not vector-only:
  - semantic retrieval
  - lexical/BM25 retrieval
  - entity/graph retrieval
  - temporal retrieval
  - compiled-view retrieval over synthesized summaries/concept views when available
- Retrieval candidates from multiple strategies are fused and reranked under deterministic policy-aware scoring.
- Ranking score includes explicit temporal decay by age with configurable half-life per memory class.
- Usage reinforcement is bounded and time-decayed; old one-off usage cannot permanently dominate ranking.
- Hard suppression controls are applied before ranking (`mute`, `snooze_until`, scoped hard exclude).
- Intent/workstream mismatch incurs explicit penalty, except for policy-required or user-pinned context.
- Age alone does not delete or permanently disqualify a memory; old memories remain retrievable when intent/workstream match is strong or when explicitly pinned.
- Retrieval honors per-record compression controls:
  - `normal` records may be surfaced through compiled/synthesized layers
  - `prefer_verbatim` records bias toward original wording/evidence inclusion
  - `never_compress` records must not be represented only through summarized or synthesized substitutes when relevant

## Acceptance Criteria
- Ranking is deterministic and explainable.
- Retrieval supports parallel multi-strategy recall so long-horizon performance does not depend on any single index family.
- Ranking explanation includes recency, usage, intent/workstream match, and suppression components.
- Ranking explanation includes which retrieval pathways and memory layers contributed to the final result set.
- Activation filters (package/category/tag) are enforced.
- Suppressed memories are excluded by default and only surfaced when an explicit override policy applies.
- Rare but high-value historical memories remain available through explicit relevance matches, deep expansion, or operator-directed retrieval paths.
- Evidence-backed synthesized knowledge can satisfy broad queries quickly, while raw evidence remains available for grounding and verification.
- Retrieval automatically escalates from compiled/synthesized knowledge to raw supporting evidence when confidence is low, decision risk is high, policy marks the workflow as sensitive, or matching records carry `prefer_verbatim` / `never_compress` controls.
- Fallback search mode works when advanced indexing is unavailable.
- Retrieval emits enough attribution to evaluate which memory source/package changed decision quality.
- Offline and replayable evaluation inputs exist for ranking regression checks.
- Retrieval outputs are consumable by the canonical decision-context contract without tool-specific reshaping.

## Dependencies
- `M-001`, `M-002`, `M-003`, `M-005`, `M-015`, `M-019`, `M-020`, `M-055`
