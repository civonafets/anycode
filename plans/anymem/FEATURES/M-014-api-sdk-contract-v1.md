# M-014 - API and SDK Contract v1

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define the stable public contract that external products and adapters use to consume anymem.

## Acceptance Criteria
- Contract covers authentication propagation, workspace context, actor/session/tool identifiers, and activation-state context.
- Mutating operations define idempotency requirements.
- Long-running flows define async job or resumable interaction behavior.
- Contract versioning and deprecation rules are explicit.
- Error model distinguishes retryable, terminal, auth, and scope failures.

## Dependencies
- `M-001`, `M-009`, `M-016`
