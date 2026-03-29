# M-032 - Compliance, Residency, and Data Governance Controls

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Provide enterprise-grade compliance policy primitives for retention, deletion, legal-hold constraints, and residency requirements.

## Acceptance Criteria
- Data classes support retention, archival, and legal-hold policy constraints.
- Deletion semantics are explicit (hard delete vs tombstone) and auditable.
- Lifecycle/decay automation never triggers hard delete; destructive deletion is an explicit authorized action path.
- Residency constraints are enforceable per workspace or deployment policy.
- Export controls and access controls align with sensitivity categories.
- Compliance events and policy decisions are traceable.
- Legal-hold workflow execution and eDiscovery evidence packaging are owned by `M-047`; this feature owns policy definitions and enforcement constraints consumed by those workflows.

## Dependencies
- `M-001`, `M-005`, `M-016`, `M-023`
