# M-012 - Memory Package Export, Install, and Activation Controls

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Enable safe reusable memory packages with strict sensitivity pipeline and explicit runtime activation controls.

## Acceptance Criteria
- Export is fail-closed on unresolved high-risk sensitivity findings.
- Install mode supports `external` and `embed` with provenance.
- Activation controls are auditable and reflected in retrieval behavior.
- Package manifest includes publisher identity, trust state, compatibility metadata, and cryptographic integrity metadata.
- Revocation and emergency disable flows are defined for installed external packages.
- Update policy is explicit (`manual`/`notify`) and does not silently rewrite embedded memory.
- New external packages can be quarantined before activation.

## Dependencies
- `M-001`, `M-002`, `M-005`, `M-007`, `M-010`, `M-011`, `M-016`
