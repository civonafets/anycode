# M-002 - Shared Backend Service Skeleton

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `In Progress`

## Goal
Implement stable anymem APIs for auth tenancy context, memory/retrieval, policy, approvals, trace/proof, and package lifecycle.

## Acceptance Criteria
- APIs are standalone and do not require Analyt services.
- Contracts are tenancy-safe for self-host and future SaaS.
- Export/install/activation endpoints are present and auditable.
- API contracts are suitable for external product consumers (`anycode`, adapters).

## Dependencies
- `M-001`, `M-009`
