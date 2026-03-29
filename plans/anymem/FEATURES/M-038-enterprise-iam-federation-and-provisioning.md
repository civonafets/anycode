# M-038 - Enterprise IAM Federation and Provisioning

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Support enterprise identity federation and lifecycle provisioning for multi-company deployment.

## Acceptance Criteria
- SAML and OIDC SSO flows are supported for enterprise tenants.
- SCIM provisioning and deprovisioning flows are supported.
- JIT provisioning is supported with policy controls.
- Group-to-role mapping integrates with canonical permission bundles.
- Federation and provisioning events are traceable and auditable.

## Dependencies
- `M-002`, `M-014`, `M-016`, `M-026`, `M-032`
