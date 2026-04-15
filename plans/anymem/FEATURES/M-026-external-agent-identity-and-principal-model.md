# M-026 - External Agent Identity and Principal Model

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define first-class identity and authorization model for external agent integrations (service principals and delegated user sessions).

## Acceptance Criteria
- Principal types are explicit:
  - service principal
  - delegated user session
  - local runtime principal
- Credential classes are explicit:
  - long-lived service credential
  - delegated session token
  - local broker bootstrap token
  - refresh token where applicable
- Principal issuance, rotation, disable, and revocation flows are defined.
- Every action is attributable to both effective principal and delegated subject where applicable.
- API and SDK request-context requirements include principal identity fields for non-wrapper consumers.
- Principal lifecycle events are traced and auditable.
- Audience binding, capability narrowing, expiry ceilings, and revocation propagation behavior are explicit.
- Delegated-session rules define consent source, subject principal, effective acting principal, and when user presence is required.

## Dependencies
- `M-001`, `M-005`, `M-016`
