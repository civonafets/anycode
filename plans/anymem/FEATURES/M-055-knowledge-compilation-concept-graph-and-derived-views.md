# M-055 - Knowledge Compilation, Concept Graph, and Derived Views

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Continuously compile raw sources and canonical memory into fast-access derived knowledge views such as concept pages, backlinks, indexes, digests, and graph-ready projections that agents and humans can consume without scanning the full corpus each time.

## Boundary Rules
- Compiled views are supplemental projections, not the canonical source of truth.
- Canonical provenance, permissions, approvals, ranking metadata, and retention state remain attached to source memory records.
- Compiled outputs must preserve lineage back to the exact source records, compile run, and compiler/profile version.
- Records marked `never_compress` must never exist only as compiled summaries; their original evidence must remain the authoritative retrieval surface when relevant.

## Compilation Outputs
- Source summaries and rolling digests.
- User-curated compact knowledge views for common or strategically important queries.
- Automatically synthesized observations that consolidate higher-order patterns from accumulated evidence.
- Concept/entity/topic pages with backlinks and related-source lists.
- Query-oriented index files and compact overview briefs for broad agent context loading.
- Graph-ready projections for concepts, links, timelines, and evidence paths.
- Domain/workspace-specific compile profiles with bounded output budgets.

## Acceptance Criteria
- Incremental compilation updates only affected derived views after source or policy changes.
- Derived views preserve source citations, confidence, freshness, and provenance lineage.
- Agents can request compact overview surfaces for fast broad knowledge access before deep retrieval.
- Retrieval can prioritize curated knowledge views and synthesized observations for broad queries, while preserving raw-evidence drill-down paths.
- Concept/backlink graph is exposed through canonical APIs without bypassing scope or policy controls.
- Compiled outputs can be materialized in at least `markdown` and `json` forms.
- Suppression, sensitivity, package activation, and workspace scope rules are enforced on compiled views.
- Compilation respects per-record compression policy and excludes `never_compress` records from summary-only replacement.
- Operators can observe compile freshness, lag, failure rate, and stale-view drift.
- Recompilation is deterministic enough for replayable evaluation and regression testing.

## Dependencies
- `M-001`, `M-005`, `M-011`, `M-018`, `M-029`, `M-033`

## Required Coverage
- Incremental compilation tests proving only affected views are rebuilt after targeted source changes.
- Lineage and citation tests proving every derived node resolves back to governed source records.
- Performance tests for overview-query latency and compile lag on representative corpora.
- Regression tests proving compiled-view retrieval never bypasses scope, suppression, or sensitivity rules.
