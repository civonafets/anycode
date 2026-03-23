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

## Local Protocol
- Canonical local protocol: HTTP/JSON over OS-native local IPC.
- Transport binding:
  - macOS/Linux: Unix domain socket in a user-scoped runtime directory.
  - Windows: named pipe in a user-scoped runtime namespace.
- One official local client SDK hides transport differences from wrappers.
- Loopback TCP is debug-only and disabled by default in production-facing builds.

## Session Bootstrap
- Broker bootstrap tokens are minted by canonical `anymem` APIs from an already-authenticated actor session; wrappers and launchers do not self-sign them.
- Wrapper or launcher receives a short-lived broker bootstrap token scoped to one actor, workspace, tool, and session.
- Default bootstrap token TTL in v1: `120s`.
- Wrapper opens local IPC channel and calls `POST /local/v1/sessions/bootstrap`.
- Broker validates:
  - token signature and expiry
  - local actor/workspace/session binding
  - same-user OS boundary via runtime directory or pipe ACLs
- Broker returns a local session handle and short-lived local session token for subsequent calls on that channel.

## Initial Local Endpoint Families
- `POST /local/v1/sessions/bootstrap`
- `POST /local/v1/memory/context`
- `POST /local/v1/policies/evaluate`
- `POST /local/v1/approvals`
- `POST /local/v1/trace/events`
- `GET /local/v1/events/stream`

## Replay and Recovery
- Broker tracks last acknowledged upstream `stream_position` per active local session.
- On reconnect, broker resumes upstream event consumption from the last durable `stream_position`.
- If replay window has expired, broker must force a canonical resource resync before resuming enforcement-sensitive operations.
- Broker startup path assumes upstream replay retention default of `72h`; operators may increase that window, but v1 implementations should not assume infinite replay.

## Acceptance Criteria
- Broker role is explicitly defined as canonical optional local runtime for strong-enforcement integrations, not mandatory for all consumers.
- Broker authenticates to `anymem` as a delegated local runtime with actor provenance preserved from the originating tool session.
- Broker maintains local subscription to relevant `anymem` event streams needed for live approval/retrieval/policy state changes during active sessions.
- Wrapper-to-broker protocol, bootstrap, and local trust model are defined and shared across wrappers instead of reimplemented per tool.
- Per-session mutable operations are serialized.
- Restart reconciliation preserves trace continuity.
- Deep-recall delegation is bounded and cleaned up safely.
- Broker reconnection and event replay semantics are defined so transient disconnects do not create silent policy gaps.

## Dependencies
- `M-001`, `M-002`, `M-004`, `M-005`, `M-011`
