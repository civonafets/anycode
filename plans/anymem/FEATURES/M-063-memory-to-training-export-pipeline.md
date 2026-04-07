# M-063 - Memory-to-Training Export Pipeline

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Export curated, provenance-clean, approval-safe memory and workflow traces into training-ready datasets that can be used for fine-tuning or other downstream adaptation workflows.

## Export Rules
- Training export is optional and never required for core memory quality.
- Only eligible records and traces may enter export sets:
  - approved or policy-allowed records
  - provenance-known source material
  - redaction/DLP-safe content
  - package and licensing constraints satisfied
- Export formats may include conversation pairs, instruction-completion pairs, review-correction pairs, preference exemplars, and structured memory examples.

## Acceptance Criteria
- Export pipeline can produce versioned training datasets from selected memory scopes, workflow traces, and review chains.
- Every exported item retains lineage to source records and export policy decisions.
- Sensitive or licensed content is excluded or transformed according to DLP, consent, and package restrictions.
- Export profiles support at least:
  - behavior imitation
  - review-correction learning
  - preference/persona adaptation
  - workflow handoff learning
- Dataset manifests record source coverage, exclusions, redactions, schema version, and export profile.
- Export events are auditable and reversible at the entitlement/policy level even though already-exported external copies remain a governance concern.

## Dependencies
- `M-005`, `M-030`, `M-046`, `M-052`, `M-062`

## Required Coverage
- Contract tests for dataset schema and manifest integrity.
- Policy/DLP tests preventing excluded records from entering export sets.
- Lineage tests proving every training example maps back to source records/traces.
- Regression tests for stable export behavior across schema/profile versions.
