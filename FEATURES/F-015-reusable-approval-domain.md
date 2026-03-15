# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-015 - Reusable Approval Domain

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `In Progress`
- Owner: `TBD`

## Goal
Define a workflow-generic approval domain that supports chat, edits, proof requests, and dispositions across coding and non-coding work.

## In Scope
- Approval object schema and workflow type model.
- Generic proposal payload contract that does not assume code diffs.
- Conversation thread model for decision shaping with the agent.
- Assignee and approver model, starting with single-user/self-approval in MVP.
- Workspace-aware visibility and scope rules for approval records and related proposals.
- Disposition rules for approve, reject, edit, rewrite, defer, escalate, and request-proof.
- Approval templates for memory package export/publish and high-impact import/embed operations.

## Out of Scope
- Complex enterprise role hierarchy in MVP.
- Domain-specific approval payload schemas for every future workflow.

## Acceptance Criteria
- Approval objects can represent memory changes, rule changes, risky actions, and non-coding work items.
- Chat and disposition history are first-class parts of the approval record.
- The same approval API can be consumed by standalone UI, Analyt, and future products.
- MVP supports acting-user approval while keeping the model extensible for delegated approvers later.
- Approval records and conversations support shared and private scopes within a workspace-safe model.
- Memory package export/import approvals are represented with the same generic workflow model.

## Dependencies
- `F-001`, `F-002`, `F-014`

## Notes
This feature prevents approval logic from becoming accidentally hard-coded to software engineering workflows.
