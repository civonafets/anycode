# M-018 - Manual Memory Authoring and Preference Capture

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Allow users to manually add, edit, and manage memories (including personal thoughts and preferences) as governed first-class records.

## Acceptance Criteria
- Manual memory record kinds are explicit and supported in canonical schema:
  - `thought`
  - `preference`
  - `principle`
  - `style_preference`
  - `temporary_note`
- Manual writes require explicit metadata:
  - scope
  - sensitivity level
  - confidence level
  - observed timestamp (or explicit confirmation to use write time)
  - workstream reference (or explicit `general`)
  - intent tags (`intent_tags[]`, may include `general`)
  - optional expiration window
- Manual records support full lifecycle operations with lineage:
  - create
  - edit
  - supersede
  - archive
- Optional expiration windows control default retrieval visibility (snooze/archive behavior), not automatic hard deletion.
- Workspace policy can require approval for selected manual memory categories before they affect retrieval.
- Manual authoring is available via API and standalone surfaces.

## Dependencies
- `M-001`, `M-002`, `M-006`, `M-007`, `M-016`
