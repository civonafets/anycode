# C-006 - Policy Layering Contract

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define how coding-specific policy packs interact with canonical anymem policy evaluation without creating a second policy authority.

## Acceptance Criteria
- Canonical anymem policy remains authoritative for final enforcement.
- Coding packs may narrow or extend applicability but cannot weaken enforcement.
- Evaluation order and conflict resolution are explicit and deterministic.
- Trace records the base policy set and applied coding policy pack/profile.

## Dependencies
- `M-004`, `M-005`, `M-014`
