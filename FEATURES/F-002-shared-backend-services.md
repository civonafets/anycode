# F-002 - Shared Backend Service Skeleton

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`
- Owner: `TBD`

## Goal
Implement backend service boundaries for memory, policy/procedure, approvals/conversation, trace/proof, notifications, and dashboard API.

## In Scope
- Service interfaces and API surface for MVP.
- Shared auth and RBAC hooks.
- Canonical persistence wiring.

## Out of Scope
- Full multi-tenant SaaS model.
- Billing/procurement flows.

## Acceptance Criteria
- CRUD and proposal endpoints exist for core domains.
- Approval object supports non-binary dispositions.
- Dashboard API can query all core domains.

## Dependencies
- `F-001`
