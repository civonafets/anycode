# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# In Progress

WIP limit: `3` active items.

## Active
| Work Item | Feature ID | Owner | Started | Target | Status | Next Step | Blockers |
|---|---|---|---|---|---|---|---|
| Define API slice for memory/policy/approval/trace/auth | F-002 | Team | 2026-03-12 | TBD | In Progress | Replace file-backed dev store with Postgres-backed repository seams and workspace-aware auth scoping | Need schema finalization with org/workspace model |
| Lock standalone core vs suite adapter boundary | F-014 | Team | 2026-03-12 | TBD | In Progress | Write explicit token-exchange and embedded-mode contract with tenancy guardrails | Need Analyt adapter endpoint spec |
| Implement reusable approval domain skeleton | F-015 | Team | 2026-03-12 | TBD | In Progress | Expand generic approval payloads and disposition rules with shared/private scope behavior | Need canonical entity mapping from F-001 |

## Blocked
| Work Item | Feature ID | Blocked On | Since | Unblock Plan |
|---|---|---|---|---|
| None | - | - | - | - |

## Done (Latest First)
| Date | Work Item | Feature ID | Notes |
|---|---|---|---|
| 2026-03-12 | Scaffolded standalone API skeleton with auth and generic approvals | F-002 | Added no-dependency Node API, shared contracts, and end-to-end test |
| 2026-03-12 | Locked standalone-core architecture and added integration features | F-014 | Analyt becomes adapter, not canonical runtime |
| 2026-03-12 | Moved planning system to `FEATURES/` folder | F-001 | Switched to per-feature files and dedicated trackers |
