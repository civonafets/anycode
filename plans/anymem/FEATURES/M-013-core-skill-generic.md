# M-013 - Core Skill Contract (Generic)

## Status
- Priority: `P0`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Define one generic skill contract for memory/retrieval, policy checks, approvals, proof, and trace across tools.

## Acceptance Criteria
- Skill keeps memory vs policy responsibilities explicit.
- Skill enforces retrieval + policy + proof order of operations.
- Skill includes package activation awareness in retrieval behavior.
- Skill contract can be mapped to an optional MCP adapter without inventing non-canonical governance semantics.

## Dependencies
- `M-004`, `M-005`, `M-011`, `M-012`
