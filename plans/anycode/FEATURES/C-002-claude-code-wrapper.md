# C-002 - Claude Code Wrapper Integration

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Provide Claude Code wrapper behavior equivalent to C-001 using the same anymem contracts.

## Acceptance Criteria
- Governance behavior parity with Codex CLI wrapper path.
- Wrapper uses the same canonical local broker SDK and IPC contract as C-001 rather than a tool-specific local protocol.
- No direct persistence coupling to anymem internals.

## Dependencies
- `M-002`, `M-003`, `M-004`, `M-005`, `M-013`
