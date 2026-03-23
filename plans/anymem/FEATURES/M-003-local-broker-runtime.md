# M-003 - Local Broker Runtime (Generic)

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Provide a generic local broker for retrieval bootstrap, policy checks, approval routing, and trace/proof emission.

## Runtime Shape
- Form factor: standalone local daemon process in v1.
- Responsibility: optional-but-canonical strong-enforcement runtime for integrations that need local interception and session binding.
- Non-goal: required runtime for every anymem consumer; direct API/SDK consumers remain supported.

## Acceptance Criteria
- Broker role is explicitly defined as canonical optional local runtime for strong-enforcement integrations, not mandatory for all consumers.
- Broker authenticates to `anymem` as a delegated local runtime with actor provenance preserved from the originating tool session.
- Broker maintains local subscription to relevant `anymem` event streams needed for live approval/retrieval/policy state changes during active sessions.
- Per-session mutable operations are serialized.
- Restart reconciliation preserves trace continuity.
- Deep-recall delegation is bounded and cleaned up safely.
- Broker reconnection and event replay semantics are defined so transient disconnects do not create silent policy gaps.

## Dependencies
- `M-001`, `M-002`, `M-004`, `M-005`, `M-011`
