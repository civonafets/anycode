# M-005 - Trace and Proof Pipeline

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Maintain append-only auditability for decisions, approvals, retrieval, proof, and package lifecycle.

## Acceptance Criteria
- Retrieval mode/ranking version and effective activation state are traceable.
- Requested vs applied retrieval fidelity is traceable per decision/retrieval call, including whether fidelity was selected by agent, user directive, or policy override.
- Export/install/sensitivity pipeline steps are traceable.
- Auditors can reconstruct decision-time known context.
- Trace is tamper-evident:
  - append-only event chain or signed checkpoint model is explicit
  - every event can be linked to its prior checkpoint/hash anchor
- Trace/proof records include request-level consumption telemetry for observability and spend analysis:
  - packed context token estimate
  - retrieval processing token estimate (when applicable)
  - fidelity class and layer-wise token breakdown
  - estimated cost attribution fields
- Trace/proof records include risk-tier envelope data for governed actions:
  - `risk_tier`
  - risk rationale
  - required governance controls
  - approval/proof references
- Trace records capture the exact policy and authorization envelope that governed the action:
  - policy bundle/version hash
  - permission snapshot hash
  - activation-state hash
  - component-manifest hash for adaptive UI requests (when applicable)
  - renderer/template/profile version references
- High-impact commercial flows include remediation/dispute references so incident forensics can map decisions to policy and compensation outcomes.
- Retention classes distinguish operational observability logs from evidentiary proof records so pruning lower-value telemetry never breaks forensic chain-of-custody requirements.

## Dependencies
- `M-001`, `M-002`, `M-011`, `M-012`
