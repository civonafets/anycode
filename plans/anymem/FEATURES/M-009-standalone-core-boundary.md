# M-009 - Standalone Core Boundary and Portability Contract

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `In Progress`

## Goal
Define hard boundaries so adapters and consumers cannot become canonical runtime or persistence owners.

## Acceptance Criteria
- Core can run without Analyt or anycode.
- Contracts support personal/self-host and hosted multi-workspace without schema fork.
- Adapter/consumer integrations use token exchange and API contracts only.

## Dependencies
- `M-001`
