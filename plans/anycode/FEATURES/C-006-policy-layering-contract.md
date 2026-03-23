# C-006 - Policy Layering Contract

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define how coding-specific policy packs interact with canonical anymem policy evaluation without creating a second policy authority.

## Evaluation Model
- Step 1: resolve applicable canonical `anymem` policy and procedure set for the current workspace/user/session context.
- Step 2: resolve applicable coding pack/profile based on repo, language, framework, and tool context.
- Step 3: merge by narrowing/extension only:
  - coding pack may add extra required checks, proofs, or approval boundaries
  - coding pack may narrow scope of already-allowed actions
  - coding pack may add domain-specific procedural requirements
  - coding pack may not turn `block` into `allow`
  - coding pack may not remove required approvals or proofs from canonical policy
- Step 4: final enforcement outcome is computed and traced in canonical `anymem` evaluation output.

## Acceptance Criteria
- Canonical anymem policy remains authoritative for final enforcement.
- Coding packs may narrow or extend applicability but cannot weaken enforcement.
- Evaluation order and conflict resolution are explicit and deterministic.
- Trace records the base policy set and applied coding policy pack/profile.
- If canonical policy and coding pack conflict, the stricter outcome wins.

## Dependencies
- `M-004`, `M-005`, `M-014`
