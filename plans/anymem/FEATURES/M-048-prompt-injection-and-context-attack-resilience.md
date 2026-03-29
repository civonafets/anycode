# M-048 - Prompt Injection and Context Attack Resilience

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Reduce risk from untrusted instructions and adversarial context before agent decisions are made.

## Acceptance Criteria
- Ingested and retrieved content can be marked with trust and taint metadata.
- Context assembly enforces policy checks on tainted/untrusted content before inclusion.
- Decision-context payloads include trust/taint markers for downstream policy-aware agents.
- High-risk context can trigger automatic block, degrade, or approval flows by policy.
- Attack-resilience test suite covers prompt-injection and indirect-instruction scenarios.

## Dependencies
- `M-011`, `M-021`, `M-024`, `M-031`, `M-035`

## Required Coverage
- Unit tests for taint propagation and policy decisions on tainted inputs.
- Integration tests for context assembly blocking/degrading/approval behavior on adversarial payloads.
- Benchmark suite with representative prompt-injection patterns and pass/fail thresholds.
