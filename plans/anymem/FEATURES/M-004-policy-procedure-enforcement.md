# M-004 - Policy and Procedure Enforcement Engine

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Define deterministic generic policy/procedure evaluation for allow/block/require-approval outcomes.

## Risk Classification (v1)
- Every governed action is classified into one risk tier:
  - `low`
  - `medium`
  - `high`
  - `critical`
- Classification inputs include:
  - action type
  - target scope/blast radius
  - sensitivity and package protection mode
  - financial/commercial impact
  - reversibility
- Tier mapping must be deterministic and explainable in policy output.

## Acceptance Criteria
- Evaluation order and outputs are deterministic.
- Procedure updates are proposal/approval-driven.
- Enforcement is separate from retrieval context.
- Policy can impose hard adaptive-presentation constraints such as text-only scope rules, forbidden component classes, read-only interaction requirements, or mandatory review before shared-view publication.
- Action classes carry explicit degraded-mode directives (`block`, `warn`, `continue`) for memory/retrieval/policy partial outage conditions.
- Policy evaluation outputs include `risk_tier`, `risk_reasons[]`, and required governance actions.
- Mandatory approval mapping is explicit by tier:
  - `low`: optional approval by policy
  - `medium`: approval required for selected action families
  - `high`: approval required plus proof requirements
  - `critical`: multi-party approval and escalation required
- Policy outputs for approval-required actions include explicit quorum and separation-of-duties fields:
  - `min_distinct_approvers`
  - `required_role_refs[]`
  - `separation_of_duties_rule`
  - `self_approval_forbidden`
  - `delegated_approval_allowed`
  - `approval_expiry`
  - `approval_invalidated_by_payload_change`
  - `approval_invalidated_by_scope_change`
- `high`/`critical` actions fail closed if required approval/proof/escalation artifacts are missing.

## Dependencies
- `M-001`, `M-002`
