# F-002 - Shared Backend Service Skeleton

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `In Progress`
- Owner: `TBD`

## Goal
Implement vendor-neutral backend service boundaries for memory, policy/procedure, approvals/conversation, trace/proof, notifications, and UI/API access.

## In Scope
- Service interfaces and API surface for MVP.
- Standalone auth and organization/account model for direct usage.
- Shared auth and RBAC hooks for standalone and embedded modes.
- Canonical persistence wiring.
- Adapter-safe token exchange and integration hooks.
- Tenancy-safe contracts that support self-hosted now and SaaS later.

## Out of Scope
- Full hosted multi-organization SaaS operations in MVP.
- Billing/procurement flows.

## Acceptance Criteria
- CRUD and proposal endpoints exist for core domains.
- Approval object supports non-binary dispositions.
- Standalone login/session flow works without Analyt services present.
- Standalone APIs work without Analyt services present.
- Core APIs do not require Analyt-specific session or entitlement types.
- Core contracts are safe to evolve into hosted multi-tenant deployment later.
- Dashboard API can query all core domains.

## Dependencies
- `F-001`, `F-014`
