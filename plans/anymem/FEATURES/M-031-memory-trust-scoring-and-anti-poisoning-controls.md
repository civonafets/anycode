# M-031 - Memory Trust Scoring and Anti-Poisoning Controls

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Detect and contain low-trust or malicious memory inputs before they influence decisions.

## Acceptance Criteria
- Memory records have explicit trust signals and source reputation metadata.
- Suspicious records can be quarantined before retrieval influence.
- Policy can require additional approval for low-trust memory adoption.
- Retrieval and decision-context include trust indicators and exclusions.
- Poisoning-detection events and quarantine actions are fully traceable.

## Dependencies
- `M-005`, `M-011`, `M-016`, `M-023`
