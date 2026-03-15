# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

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
- Rules for when to rely on pre-task retrieval versus explicit `memory_search`.

## Out of Scope
- Making skills canonical source of truth for policy.

## Acceptance Criteria
- Skill directs pre-action memory retrieval and policy checks.
- Skill clearly separates `Relevant Context` from enforceable policy and required proof.
- Skill teaches agents to use on-demand search when the preloaded context is insufficient.
- Skill enforces proof attachment before "done" claims on risky tasks.
- Skill reflects approval boundaries and editable workflow outcomes.

## Dependencies
- `F-004`, `F-005`, `F-016`
