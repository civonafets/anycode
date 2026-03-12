# F-008 - Mobile Inbox PWA

## Status
- Priority: `P1`
- Phase: `3 - Surfaces`
- State: `Planned`
- Owner: `TBD`

## Goal
Provide a mobile-first approval inbox for fast, high-context, non-binary decisions with in-screen agent chat.

## In Scope
- Push notification entry point.
- Approval detail with proposal, reason, related memory/rules/trace.
- Embedded agent chat in the approval detail screen.
- Edit, chat, approve/reject/defer/escalate actions.

## Out of Scope
- Native iOS/Android clients in MVP.

## Acceptance Criteria
- Mobile user can complete approval loop without desktop.
- Mobile user can question the agent about a proposed memory or rule change from the same approval screen.
- Edited proposals and rule rewrites are first-class outcomes.
- Approval records include linked conversation and disposition.

## Dependencies
- `F-006`, `F-005`
