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
  - approved presentation/profile rules
  - personal preferences
  - session/tool hints
- The ordered precedence chain is explicit for adaptive-presentation and behavior decisions:
  - hard legal/DLP/safety/policy deny
  - explicit current-request user directive that is still policy-allowed
  - session-level presentation mode and active tool/runtime constraints
  - approved model/agent behavior profile
  - workspace defaults and required shared rules
  - personal hard preferences
  - personal soft preferences
  - heuristic recommendation or learned suggestion
- Resolution supports both `hard` and `soft` preferences with deterministic tie-breaking.
- Resolution explicitly covers text-vs-visual presentation behavior so session-level UI toggles, approved presentation rules, and personal visual preferences do not conflict ambiguously.
- Suppression preferences (`mute`, `snooze_until`, `never_for_scope`) are treated as hard constraints for retrieval/context assembly unless an explicit higher-priority policy override exists.
- Conflicts produce machine-readable resolution artifacts that explain:
  - what conflicted
  - what won
  - why
- Resolved precedence outputs are consumable by policy evaluation and retrieval/context-packing flows.
- Every resolution decision is traceable.

## Dependencies
- `M-001`, `M-004`, `M-005`, `M-016`, `M-018`
