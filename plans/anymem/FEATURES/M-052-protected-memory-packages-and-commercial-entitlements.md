# M-052 - Protected Memory Packages and Commercial Entitlements

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Enable proprietary memory packages that can be licensed to authorized organizations and employees while keeping raw memory payloads protected and fail-closed when trust or entitlement is invalid.

## Protection Model
- Canonical package protection modes:
  - `open_embed`: raw memory may be embedded into the consumer workspace.
  - `protected_external`: memory remains publisher-controlled and is consumable only through governed retrieval and decision-context APIs.
- `protected_external` is the canonical v1 mode for commercially sensitive or employee-only proprietary memory.
- Protected packages may declare no raw export, no embed, no secondary publish, and no offline activation.

## Entitlement Model
- Entitlements bind package access to `workspace_id` and may optionally include user/group scope, seat caps, expiry, environment restrictions, and update channel.
- Entitlement resolution runs at install time, activation time, and retrieval time.
- Missing, expired, revoked, or out-of-scope entitlements fail closed.
- Entitlement decisions are auditable and traceable to actor, workspace, package version, and signer identity.

## Artifact Protection Rules
- Protected package artifacts may be encrypted at rest and during transfer.
- Unseal/decrypt is allowed only in trusted runtime paths after signature verification, entitlement verification, and policy checks pass.
- Consumer-visible metadata may remain discoverable while protected raw payloads remain inaccessible.
- Consumer tenant BYOK domains remain separate from publisher package-protection keys.

## Acceptance Criteria
- Protected packages can be installed and activated without exposing raw memory records to ordinary consumer workspace members.
- Retrieval from protected packages returns governed decision-context outputs without raw payload export.
- Entitlements support workspace binding, expiry, revoke, and optional seat/usage constraints.
- Revoked or expired entitlements block new activation and retrieval within a bounded propagation window defined by policy.
- APIs and first-party UI clearly distinguish `open_embed` and `protected_external` packages and explain blocked actions.
- Trace/proof records include package protection mode, signer identity, and entitlement resolution outcome.
- Self-hosted and SaaS deployments preserve the same verification semantics even when signer/key backends differ.

## Dependencies
- `M-012`, `M-014`, `M-016`, `M-039`, `M-042`, `M-045`, `M-046`

## Required Coverage
- Unit tests for entitlement resolution, expiry, revoke, and scope matching logic.
- Integration tests for protected install, activation, retrieval, and fail-closed denial paths.
- Security tests proving raw protected payloads do not leak through API responses, logs, exports, or event streams.
- Rotation and revocation tests covering signer change, entitlement revoke, and emergency disable behavior.
- Performance checks for entitlement verification overhead on protected retrieval hot paths.
