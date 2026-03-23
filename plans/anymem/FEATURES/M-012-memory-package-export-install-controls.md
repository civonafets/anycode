# M-012 - Memory Package Export, Install, and Activation Controls

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Enable safe reusable memory packages with strict sensitivity pipeline and explicit runtime activation controls.

## Signing and Trust Model
- Package manifest is the signed root object for every published package version.
- Manifest includes:
  - `package_id`
  - `package_version_id`
  - `publisher_id`
  - `workspace_id`
  - `signing_key_id`
  - `manifest_hash`
  - `artifact_hash`
  - `compatibility`
  - `export_trace_ref`
  - `created_at`
- Signing algorithm for v1: Ed25519 detached signature over canonical manifest bytes.
- Installed package trust binds to publisher identity plus signing key identity, not only to mutable display metadata.

## Key Management
- Every publishing workspace may hold multiple publisher signing keys.
- Key states:
  - `active` for signing and verification
  - `verify_only` for previously published packages during rotation
  - `revoked` for blocked trust
- Only one key is default signing key at a time.
- Private signing keys remain server-side in deployment-managed secret storage or KMS-backed signing facilities; normal product flows do not export raw private keys.
- Rotation creates a new `active` key while older trusted keys move to `verify_only` until explicitly retired.

## Install Verification
- Install verifies:
  - manifest signature
  - manifest hash
  - artifact hash
  - publisher trust state
  - signing key state
  - compatibility constraints
- Verification failure is fail-closed:
  - install is blocked before activation, or
  - install is placed in quarantine when operator review is configured
- Key revocation blocks new installs immediately and can trigger quarantine or disable workflows for already-installed external packages according to workspace policy.

## Acceptance Criteria
- Export is fail-closed on unresolved high-risk sensitivity findings.
- Install mode supports `external` and `embed` with provenance.
- Activation controls are auditable and reflected in retrieval behavior.
- Package manifest includes publisher identity, trust state, compatibility metadata, and cryptographic integrity metadata.
- Package signing uses explicit publisher keys with rotation states and install-time verification rules.
- Revocation and emergency disable flows are defined for installed external packages.
- Update policy is explicit (`manual`/`notify`) and does not silently rewrite embedded memory.
- New external packages can be quarantined before activation.

## Dependencies
- `M-001`, `M-002`, `M-005`, `M-007`, `M-010`, `M-011`, `M-016`
