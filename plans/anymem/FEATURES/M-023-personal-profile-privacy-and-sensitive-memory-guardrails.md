# M-023 - Personal Profile Privacy and Sensitive Memory Guardrails

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Protect personal-profile and other sensitive memory domains with strict default-deny access, consent-aware sharing, and auditable redaction.

## Acceptance Criteria
- Sensitive memory categories are explicit and extensible.
- Cross-app and cross-workflow access to sensitive categories is deny-by-default unless explicitly allowed by policy and permissions.
- Export/package flows for sensitive categories require explicit consent controls and stricter approval policy.
- Redacted views are supported for lower-privilege clients while preserving audit trace integrity.
- Sensitive-access events are always traceable and alertable.

## Dependencies
- `M-001`, `M-004`, `M-005`, `M-012`, `M-016`, `M-018`
