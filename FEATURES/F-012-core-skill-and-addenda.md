# F-012 - Shared Core Skill and Tool Addenda

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`
- Owner: `TBD`

## Goal
Define one shared behavioral contract that teaches agents how to use memory, policy, approvals, proof, and trace across tools.

## In Scope
- Core skill workflow and vocabulary.
- Tool-specific addenda for Codex CLI, Claude Code, and Codex app.
- Guardrails for memory-vs-policy responsibilities.

## Out of Scope
- Making skills canonical source of truth for policy.

## Acceptance Criteria
- Skill directs pre-action memory retrieval and policy checks.
- Skill enforces proof attachment before "done" claims on risky tasks.
- Skill reflects approval boundaries and editable workflow outcomes.

## Dependencies
- `F-004`, `F-005`
