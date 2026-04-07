# M-062 - Workflow Edge Graph and Handoff Memory

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Model linked work memory so agents and humans can retrieve not only isolated records, but also the relationships between tasks, reviews, revisions, assignments, fixes, and outcomes.

## Edge Types
- `assigned_to`
- `review_of`
- `revises`
- `fixes`
- `blocks`
- `depends_on`
- `resolved_by`
- `supersedes`

## Acceptance Criteria
- Canonical memory model supports typed directed workflow edges between records.
- Pending-work retrieval can surface assigned or unresolved linked items for the relevant principal.
- Review and revision chains remain traversable with provenance and status history intact.
- Workflow retrieval can answer questions like “what happened after this review?” or “what is still open for this assignee?”.
- Edge validation prevents malformed references and dangling links where policy requires strict integrity.
- Workflow graph retrieval integrates with approvals, trace/proof, and package activation constraints.

## Dependencies
- `M-001`, `M-005`, `M-010`, `M-026`, `M-060`

## Required Coverage
- Integrity tests for valid and invalid edge creation/update flows.
- Retrieval tests for pending work, review chains, fix chains, and resolution chains.
- Permission tests for who can create or follow workflow edges across scopes.
- Regression tests for edge traversal and status propagation behavior.
