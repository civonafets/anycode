# M-069 - Agentic Risk Tiering and Remediation Controls

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Provide a unified risk-tier and remediation framework for governed agent actions so high-impact operations have deterministic approval requirements, traceable risk evidence, and explicit incident/remediation policy linkage.

## Risk Tier Model
- Canonical action risk tiers:
  - `low`
  - `medium`
  - `high`
  - `critical`
- Tiering factors include:
  - blast radius
  - reversibility
  - sensitivity/classification
  - financial/commercial impact
  - external package protection mode
- Tier assignment is deterministic and explainable.

## Governance Controls by Tier
- `low`: policy may allow direct execution with trace.
- `medium`: approval may be required based on action family and workspace policy.
- `high`: approval + proof requirements are mandatory.
- `critical`: multi-party approval + escalation path are mandatory.
- Missing required controls fail closed.

## Remediation and Dispute Linkage
- Governed high-impact flows can carry explicit remediation policy references.
- Trace envelopes must link risk classification, approval/proof artifacts, and remediation/dispute records.
- Commercial hosted-memory actions support bounded incident-response behavior aligned to policy (for example rollback eligibility, temporary disable, or dispute routing).

## Acceptance Criteria
- Risk tier is emitted in policy and decision-context outputs for governed actions.
- Approval/escalation requirements are enforceable by tier and testable.
- Critical-tier multi-party approval behavior is deterministic and auditable.
- Risk evidence envelope is recorded in trace/proof artifacts.
- Remediation policy references are present for supported high-impact/commercial workflows.
- Admin controls can preview risk tier and required governance controls before applying sensitive operations.

## Dependencies
- `M-004`, `M-005`, `M-006`, `M-024`, `M-045`, `M-059`

## Required Coverage
- Unit tests for deterministic risk-tier mapping.
- Integration tests for tier-based approval/escalation enforcement.
- Trace tests for risk evidence envelope integrity.
- Failure-mode tests proving high/critical actions fail closed when required controls are missing.
- Commercial-flow tests for remediation/dispute linkage in hosted package operations.
