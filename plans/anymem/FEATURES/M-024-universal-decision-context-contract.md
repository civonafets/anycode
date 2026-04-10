# M-024 - Universal Decision-Context Contract

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Provide one canonical pre-action contract that any AI agent integration consumes before execution-sensitive decisions.

## Acceptance Criteria
- Decision-context response shape is fixed and reusable across tool vendors:
  - `relevant_context[]`
  - `retrieval_plan_ref` (optional)
  - `risk_tier`
  - `risk_reasons[]` (optional)
  - `applicable_policy[]`
  - `required_approval_refs[]`
  - `required_proof_refs[]`
  - `required_escalation_refs[]` (optional)
  - `remediation_policy_ref` (optional)
  - `confidence`
  - `selection_rationale`
  - `degraded_mode`
  - `resolution_artifact_ref`
- Contract supports a two-step retrieval pattern for hybrid deployments:
  - step 1: ask anymem where to look (`retrieval/plan`)
  - step 2: fetch from planned targets through governed paths
- `relevant_context[]` supports typed layered memory items such as:
  - compact curated knowledge views
  - synthesized observations/concept summaries
  - raw evidence/facts
  - policy/approval/proof references
- Contract is available through API and SDK in v1 and does not require wrapper-only paths.
- Context payload includes attribution and provenance references for included items.
- Synthesized context items include lineage to the underlying evidence set so agents and auditors can inspect grounding rather than trusting summaries blindly.
- Context items expose escalation/compression metadata so integrations can see when an item is verbatim-required, summary-derived, or expanded due to high-risk handling.
- Contract is fully traceable so auditors can reconstruct pre-action context at decision time.
- Compatibility guarantees are documented for additive evolution.

## Dependencies
- `M-002`, `M-004`, `M-005`, `M-011`, `M-014`, `M-019`, `M-023`
