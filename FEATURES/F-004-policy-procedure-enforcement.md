# F-004 - Policy and Procedure Enforcement Engine

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`
- Owner: `TBD`

## Goal
Define and execute enforceable rules for required steps, forbidden actions, approval boundaries, proof requirements, and escalation behavior.

## In Scope
- Rule model and evaluation order.
- Procedure model and editable procedure updates.
- Decision outputs consumed by broker and approval flow.

## Out of Scope
- Policy simulation over full history in MVP.

## Acceptance Criteria
- Rule evaluation returns deterministic allow/block/require-approval outcomes.
- Mandatory rules are represented outside memory retrieval.
- Procedure updates can be proposed and approved as workflow objects.

## Dependencies
- `F-001`, `F-002`
