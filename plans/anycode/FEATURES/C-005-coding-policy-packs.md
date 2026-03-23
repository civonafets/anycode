# C-005 - Coding Policy Packs and Profiles

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Deliver coding policy packs/profiles layered on top of anymem policy/procedure engine for language/framework/repo-specific governance.

## Acceptance Criteria
- Pack/profile model extends generic anymem policy objects without schema fork.
- Packs can be selected per workspace/repo/tool context.
- Packs may narrow or extend applicability but cannot weaken or bypass canonical anymem enforcement outcomes.
- Trace captures both canonical anymem policy inputs and the applied coding pack/profile.

## Dependencies
- `M-002`, `M-004`, `M-010`, `C-006`
