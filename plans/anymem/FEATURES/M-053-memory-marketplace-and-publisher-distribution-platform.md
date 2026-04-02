# M-053 - Memory Marketplace and Publisher Distribution Platform

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Provide a first-party marketplace and publisher distribution surface for discovering, licensing, installing, and managing reusable memory packages.

## Marketplace Scope
- Marketplace supports publisher profiles, package listings, categories/tags, compatibility metadata, trust state, version history, and protection mode visibility.
- Listing types include open/internal packages and protected commercial packages.
- Commerce processor details remain pluggable; canonical anymem ownership is listings, entitlement state, installability, trust, and activation behavior.
- Workspace admins can configure allowlists, denylists, and approval policy gates for marketplace acquisition and activation.

## Install and Acquisition Flow
- Canonical user flow:
  - browse listing
  - inspect trust/protection/licensing details
  - acquire or claim entitlement
  - install package
  - activate package
- Acquisition and activation may require approval according to workspace policy.
- Installed package surfaces expose publisher identity, entitlement state, trust state, activation state, and update policy.

## Acceptance Criteria
- Packages can be discovered and filtered by category, tag, compatibility, trust, and protection mode.
- Protected listings clearly declare external-only and no-raw-export restrictions before acquisition.
- Marketplace flows support entitlement states including `pending`, `active`, `revoked`, and `expired`.
- Admin controls can disable marketplace access entirely or restrict installs to approved publishers/listings.
- Listing creation, update, unpublish, and removal preserve package/version lineage and installed-package compatibility history.
- Marketplace and entitlement state changes emit auditable events and appear in first-party admin/ops surfaces.

## Dependencies
- `M-012`, `M-014`, `M-016`, `M-045`, `M-052`

## Required Coverage
- Integration tests for browse, acquire, install, activate, revoke, and expired-entitlement flows.
- Permission tests for publisher, admin, approver, member, and viewer actions.
- Contract tests for listing, entitlement, install, and activation API interoperability.
- Regression tests for revoked listings or entitlements affecting already-installed packages according to workspace policy.
