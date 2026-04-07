# M-067 - Lifecycle Capture Hooks and Session Safeguards

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Capture important memory at the right operational moments through explicit lifecycle hooks instead of relying only on manual writes or end-of-session reconstruction.

## Hook Types
- `session_start`
- `periodic_autosave`
- `topic_shift`
- `session_end`
- `pre_compaction_safety_capture`

## Acceptance Criteria
- Hook contracts are explicit and usable by broker/runtime integrations.
- Hooks can capture summaries, pending work, unresolved decisions, and important deltas without bypassing canonical policy or trace rules.
- Pre-compaction safety capture preserves recoverable state before any lossy or bounded context compaction path runs.
- Topic-shift hooks can trigger retrieval refresh and optional writeback suggestions.
- Hook behavior is bounded, idempotent where needed, and safe under reconnects or duplicate invocations.
- Hook events are traceable and visible in first-party operational surfaces.

## Dependencies
- `M-003`, `M-005`, `M-014`, `M-018`, `M-065`

## Required Coverage
- Integration tests for each hook type through broker/runtime paths.
- Idempotency tests for repeated hook delivery.
- Safety tests proving pre-compaction capture fires before configured compaction operations.
- Regression tests for reconnect and crash-recovery scenarios.
