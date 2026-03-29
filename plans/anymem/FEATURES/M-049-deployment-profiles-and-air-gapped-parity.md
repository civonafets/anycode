# M-049 - Deployment Profiles and Air-Gapped Parity

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Keep core governance behavior consistent across SaaS, self-hosted, and air-gapped deployments.

## Acceptance Criteria
- Deployment profiles are explicitly defined: `saas`, `self_hosted_connected`, `self_hosted_air_gapped`.
- A parity matrix defines required semantics for auth, policy, approval, trace, retrieval, and event delivery per profile.
- Parity matrix includes an identity capability map (`SAML`, `OIDC`, `SCIM`, `JIT`) with explicit `required`, `optional`, or `unsupported` status per profile and documented compensating controls.
- Air-gapped profile has no hard runtime dependency on public cloud control paths.
- Update, key-rotation, and package trust operations support offline/controlled channels.
- Conformance tests validate profile parity for all P0 governance APIs and flows.

## Dependencies
- `M-003`, `M-014`, `M-030`, `M-038`, `M-044`

## Required Coverage
- Profile conformance tests for `saas`, `self_hosted_connected`, and `self_hosted_air_gapped`.
- Integration tests proving parity for core auth/policy/approval/trace/retrieval semantics.
- Upgrade and key-rotation tests for offline and controlled-channel environments.
