# M-019 - Preference Resolution and Behavioral Precedence

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Provide deterministic, auditable resolution of policy and preference conflicts so agent behavior remains predictable as memory grows.

## Acceptance Criteria
- A precedence matrix is explicit and implemented for behavior decisions, including:
  - hard policy constraints
  - explicit deny rules
  - workspace-level rules
  - personal preferences
  - session/tool hints
- Resolution supports both `hard` and `soft` preferences with deterministic tie-breaking.
- Conflicts produce machine-readable resolution artifacts that explain:
  - what conflicted
  - what won
  - why
- Resolved precedence outputs are consumable by policy evaluation and retrieval/context-packing flows.
- Every resolution decision is traceable.

## Dependencies
- `M-001`, `M-004`, `M-005`, `M-016`, `M-018`
