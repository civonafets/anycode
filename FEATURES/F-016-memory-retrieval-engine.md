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

## Out of Scope
- Opaque retrieval that cannot explain score composition.
- Memory becoming a hidden enforcement layer.
- Heavy semantic-only ranking in MVP.

## Acceptance Criteria
- Retrieval can score and return top results using explicit score components stored in metadata.
- Ranking fits the canonical backend schema and does not require a separate ad hoc storage model.
- Broker can request `top N relevant context` before work starts and mid-task via search.
- Returned results distinguish source type, scope, freshness, and why they matched.
- Retrieval outputs can be traced and later reconstructed for audit.

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
