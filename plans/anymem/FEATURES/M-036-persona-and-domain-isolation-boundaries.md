# M-036 - Persona and Domain Isolation Boundaries

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Prevent cross-context leakage by enforcing explicit persona and domain boundaries with governed bridge flows.

## Acceptance Criteria
- Persona/domain scopes are first-class (for example: work, personal, client-specific).
- Cross-domain retrieval is deny-by-default unless explicitly bridged.
- Bridge actions require policy-compliant approval and trace.
- Boundary violations are detectable and alertable.
- Retrieval and decision-context outputs include active domain/persona scope metadata.

## Dependencies
- `M-001`, `M-016`, `M-023`, `M-024`
