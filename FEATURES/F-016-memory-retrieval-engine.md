# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-016 - Memory Retrieval Engine

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`
- Owner: `TBD`

## Goal
Implement a retrieval engine that surfaces relevant approved context before and during work using an explainable ranking model that fits the shared backend and broker architecture.

## In Scope
- Retrieval source model for approved knowledge, feedback, and other allowed memory types.
- Query normalization and token extraction for work requests and on-demand search.
- Explainable ranking with lexical score, recency decay, scope match, and optional usage-weight features.
- Pre-task retrieval contract for broker bootstrap.
- On-demand `memory_search` contract for agent-driven lookup.
- Tiered recall contract: `memory_search` -> `memory_describe` -> `memory_expand_query` for progressive detail retrieval.
- Bounded deep-recall policy with scoped authorization, depth limits, token caps, and timeouts.
- Optional high-performance full-text path with deterministic fallback search mode in constrained environments.
- Retrieval filtering by active package/category/tag toggles with deterministic effective-state resolution.
- Source attribution so results clearly indicate native memory, external package memory, or embedded package memory.

## Out of Scope
- Opaque retrieval that cannot explain score composition.
- Memory becoming a hidden enforcement layer.
- Heavy semantic-only ranking in MVP.
- Unbounded recursive expansion behavior.

## Acceptance Criteria
- Retrieval can score and return top results using explicit score components stored in metadata.
- Ranking fits the canonical backend schema and does not require a separate ad hoc storage model.
- Broker can request `top N relevant context` before work starts and mid-task via search.
- Returned results distinguish source type, scope, freshness, and why they matched.
- Retrieval outputs can be traced and later reconstructed for audit.
- Tiered recall flow is implemented and documented so agents can escalate from quick search to deep expansion only when needed.
- Deep expansion requests are policy-bounded and fail closed when scope/depth/token/time constraints are exceeded.
- Retrieval returns explicit `search_mode` metadata and remains functional when advanced indexing is unavailable.
- Ranking behavior is deterministic by versioned scoring rules and stable tie-breakers.
- Retrieval ignores disabled packages/categories/tags and records the effective toggle state used for ranking.
- Result attribution is explicit enough for humans to debug how active memory sets affect precision.

## Ranking Model (Initial)
- Base lexical match score over normalized tokens.
- Recency decay with configurable half-life.
- Scope boost for project/workflow/tool relevance.
- Optional usage/feedback boosts only when provenance is explicit.
- Deterministic tie-breaking by freshness and stable ID ordering.

## Dependencies
- `F-001`, `F-002`, `F-003`, `F-005`

## Notes
This feature borrows the useful retrieval ergonomics of pre-task recall and active search, but keeps canonical memory, policy, and trace in our governed backend.
