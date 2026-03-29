# M-022 - Outcome Feedback to Memory Proposal Loop

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Convert execution outcomes and human feedback into governed memory proposals without creating silent canonical writes.

## Acceptance Criteria
- Outcome signals can be captured from approvals, traces, and tool-session results.
- Feedback-to-memory conversion always creates proposals with:
  - confidence
  - evidence references
  - suggested scope/category
- Workspace policy controls whether proposals are:
  - queued for human approval
  - auto-accepted for low-risk categories
  - auto-rejected for protected categories
- Proposal acceptance/rejection outcomes feed retrieval evaluation datasets.
- Negative relevance feedback is first-class (`irrelevant`, `too_old`, `off_topic`, `over_personalized`) and can generate suppression/snooze/downweight proposals instead of only new memory proposals.
- Feedback outcomes are linked to retrieval distraction metrics so tuning closes the loop.
- The full loop is auditable from outcome signal to final memory decision.

## Dependencies
- `M-005`, `M-006`, `M-010`, `M-011`, `M-018`, `M-019`
