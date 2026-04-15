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
  - `requested_fidelity` (optional)
  - `applied_fidelity`
  - `fidelity_decision_reason` (optional)
  - `recommended_presentation` (optional)
  - `saved_view_matches[]` (optional)
  - `risk_tier`
  - `risk_reasons[]` (optional)
  - `applicable_policy[]`
  - `required_approval_refs[]`
  - `required_proof_refs[]`
  - `required_escalation_refs[]` (optional)
  - `remediation_policy_ref` (optional)
  - `confidence`
  - `selection_rationale`
  - `consumption` (request token/cost telemetry)
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
- Contract can carry bounded adaptive-presentation guidance without mixing it into canonical evidence:
  - recommended answer mode (`text`, `saved_view`, `new_view`)
  - matching saved view references with freshness/reuse hints
  - supported view kinds when visual presentation is appropriate
- `relevant_context[]` items expose representation and grounding metadata:
  - representation class (`compact`, `summary`, `verbatim`, `original_artifact`)
  - citation/provenance references
  - source/original references when full evidence is used
- Contract is available through API and SDK in v1 and does not require wrapper-only paths.
- Context payload includes attribution and provenance references for included items.
- Synthesized context items include lineage to the underlying evidence set so agents and auditors can inspect grounding rather than trusting summaries blindly.
- Context items expose escalation/compression metadata so integrations can see when an item is verbatim-required, summary-derived, or expanded due to high-risk handling.
- Contract supports strict-fidelity calls where explicit `full_cited`/`full_original` requirements must be met or fail with deterministic machine-readable errors.
- Contract makes text-vs-visual recommendation inspectable so agents can explain why a saved or newly generated view was chosen instead of plain text.
- Consumption telemetry is structured enough for user-visible spend tracking, benchmark slicing, and regression gates.
- Contract is fully traceable so auditors can reconstruct pre-action context at decision time.
- Compatibility guarantees are documented for additive evolution.

## Dependencies
- `M-002`, `M-004`, `M-005`, `M-011`, `M-014`, `M-019`, `M-023`
