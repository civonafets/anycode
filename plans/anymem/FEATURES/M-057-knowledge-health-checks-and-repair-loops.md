# M-057 - Knowledge Health Checks and Repair Loops

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Continuously audit compiled knowledge and related projections for integrity, freshness, completeness, and useful next-step repairs.

## Health Check Scope
- Missing or weak metadata.
- Dead links and broken lineage references.
- Duplicate or fragmented concepts.
- Stale summaries and outdated derived views.
- Contradictions, low-confidence joins, and suspicious unsupported claims.
- Candidate new concept pages, backlinks, or missing source coverage.

## Acceptance Criteria
- Health checks emit structured findings with severity, evidence, and affected scope.
- Checks can run on schedule, on demand, or after ingest/compile/sync events.
- Repair flows support `suggest only`, `auto-fix low risk`, and `approval required` modes.
- Findings and repairs are traceable and feed normal approval/proof pipelines when policy requires.
- Workspace operators can track freshness, coverage, link integrity, duplication rate, and unresolved-finding counts.
- Health-check outputs can propose high-signal follow-up compilation or research actions for agents.

## Dependencies
- `M-005`, `M-031`, `M-043`, `M-055`, `M-056`

## Required Coverage
- Fixture-corpus tests for stale pages, broken links, duplicate concepts, and metadata gaps.
- Policy tests for suggest-only vs auto-fix vs approval-required repair modes.
- Regression tests proving health checks do not mutate canonical data outside approved pathways.
- Evaluation tests for finding precision/recall on known integrity issues.
