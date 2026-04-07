# M-065 - Wake-Up and Bootstrap Context Profiles

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Provide tiny always-loadable bootstrap context packets so agents can orient quickly on session start or reconnect without paying the cost of broad retrieval every time.

## Profile Scope
- Bootstrap profiles may include:
  - actor/workspace identity basics
  - active project/workstream
  - pinned critical facts and preferences
  - current priorities or pending work summary
  - active package and topology hints
- Profiles are bounded by strict size budgets and freshness windows.

## Acceptance Criteria
- Bootstrap packets are deterministic, small, and cheap enough for frequent local/offline use.
- Different tools and workflows can have different bootstrap profiles and budgets.
- Bootstrap profiles respect scope, activation, sensitivity, and `never_compress` requirements.
- Expired or stale bootstrap packets are detectable and refreshable through canonical retrieval.
- Agents can use bootstrap packets as orientation context without skipping ordinary governed retrieval for substantive decisions.
- Bootstrap generation and delivery are traceable and benchmarkable for latency and freshness.

## Dependencies
- `M-021`, `M-024`, `M-034`, `M-049`, `M-055`

## Required Coverage
- Contract tests for bootstrap packet shape and profile selection.
- Freshness tests for refresh/expiry behavior.
- Permission tests proving no cross-scope leakage through cached bootstrap packets.
- Performance tests for packet generation latency and size budgets.
