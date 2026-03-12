# F-008 - Mobile Inbox PWA

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`
- Owner: `TBD`

## Goal
Provide a mobile-first approval inbox for fast, high-context, non-binary decisions with in-screen agent chat.

## In Scope
- Web push notification entry point.
- Approval detail with proposal, reason, related context, and trace/proof links.
- Embedded agent chat in the approval detail screen.
- Edit, chat, approve/reject/defer/escalate actions.

## Out of Scope
- Native iOS/Android clients in MVP.
- Dedicated mobile wrapper/app shell in MVP.

## Acceptance Criteria
- Mobile user can complete approval loop without desktop.
- Mobile user can question the agent about coding and non-coding workflow approvals from the same screen.
- Web push is reliable enough for day-to-day approval handling in MVP.
- Edited proposals and rule rewrites are first-class outcomes.
- Approval records include linked conversation and disposition.

## Dependencies
- `F-005`, `F-006`, `F-015`
