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
  - `applicable_policy[]`
  - `required_approval_refs[]`
  - `required_proof_refs[]`
  - `confidence`
  - `selection_rationale`
  - `degraded_mode`
  - `resolution_artifact_ref`
- Contract supports a two-step retrieval pattern for hybrid deployments:
  - step 1: ask anymem where to look (`retrieval/plan`)
  - step 2: fetch from planned targets through governed paths
- Contract is available through API and SDK in v1 and does not require wrapper-only paths.
- Context payload includes attribution and provenance references for included items.
- Contract is fully traceable so auditors can reconstruct pre-action context at decision time.
- Compatibility guarantees are documented for additive evolution.

## Dependencies
- `M-002`, `M-004`, `M-005`, `M-011`, `M-014`, `M-019`, `M-023`
