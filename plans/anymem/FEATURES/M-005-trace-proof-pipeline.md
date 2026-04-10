# M-005 - Trace and Proof Pipeline

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Maintain append-only auditability for decisions, approvals, retrieval, proof, and package lifecycle.

## Acceptance Criteria
- Retrieval mode/ranking version and effective activation state are traceable.
- Export/install/sensitivity pipeline steps are traceable.
- Auditors can reconstruct decision-time known context.
- Trace/proof records include risk-tier envelope data for governed actions:
  - `risk_tier`
  - risk rationale
  - required governance controls
  - approval/proof references
- High-impact commercial flows include remediation/dispute references so incident forensics can map decisions to policy and compensation outcomes.

## Dependencies
- `M-001`, `M-002`, `M-011`, `M-012`
