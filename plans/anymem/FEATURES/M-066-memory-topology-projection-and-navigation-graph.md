# M-066 - Memory Topology Projection and Navigation Graph

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Generate derived navigation projections over memory so agents and humans can narrow retrieval quickly by project, person, topic, type, or other high-signal structure without making any single navigation metaphor canonical truth.

## Projection Rules
- Topology is a derived projection, not canonical storage.
- Multiple topology schemes may coexist, for example:
  - project/workstream clusters
  - person/entity hubs
  - topic/concept regions
  - memory-kind or workflow-type groupings
- Topology nodes and edges retain lineage to canonical records and compiled views.

## Acceptance Criteria
- The system can build and update navigation projections from canonical memory and workflow graphs.
- Retrieval may use topology hints to narrow candidate sets before deeper ranking.
- Topology projections remain explainable; callers can see why a project/person/topic corridor was selected.
- No topology projection may bypass scope, package activation, or sensitivity rules.
- Operators can measure topology hit rate, narrowing benefit, and drift/staleness.
- Derived topology remains replaceable and configurable rather than hard-coded into canonical schema.

## Dependencies
- `M-005`, `M-055`, `M-060`, `M-062`

## Required Coverage
- Projection tests for node/edge generation from canonical fixture data.
- Retrieval tests proving topology hints improve narrowing without changing policy boundaries.
- Explainability tests for corridor/node selection metadata.
- Regression tests for stale or drifted topology refresh behavior.
