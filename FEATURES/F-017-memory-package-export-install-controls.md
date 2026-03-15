# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-017 - Memory Package Export, Install, and Activation Controls

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`
- Owner: `TBD`

## Goal
Enable safe, reusable memory sharing by packaging governed memory into installable artifacts, with strict sensitivity pruning and explicit runtime activation controls.

## In Scope
- Agent-initiated and user-initiated export requests for selected memory scope (records, categories, tags, or query-defined subsets).
- Strict export pipeline with required stages:
  1. Candidate selection and immutable snapshot creation.
  2. Sensitivity scan (personal notes, secrets, PII, policy-restricted content).
  3. Redaction/pruning pass with structured findings.
  4. Human approval before package publish.
  5. Artifact packaging with manifest, hash, version, provenance, and compatibility metadata.
  6. Publish to approved distribution scope (workspace/local registry in MVP).
- Install flow with explicit modes:
  - `external`: package remains external and toggleable.
  - `embed`: package contents are copied into local governed memory with lineage to source package version.
- Runtime activation controls for memory package/category/tag via agent APIs and dashboard.
- Clear dashboard visibility of installed memory packages and effective active memory set.

## Out of Scope
- Open public marketplace in MVP.
- Automatic cross-org publishing without explicit approval.
- Silent auto-merge updates of embedded memory.

## Acceptance Criteria
- Export cannot complete without successful sensitivity scan and explicit disposition of findings.
- Export pipeline is fail-closed on unresolved high-risk findings.
- Package manifest includes package ID, version, producer scope, created timestamp, schema version, hash, and summarized sensitivity report.
- Importers can choose external vs embed mode at install time.
- External packages can be turned on/off without deleting installation metadata.
- Embedded memory records preserve provenance to source package/version.
- Agents and dashboard can toggle package/category/tag activation with auditable scope.
- Retrieval honors effective activation state and can attribute results to package/source.
- Users can distinguish installed external memory from native memory at a glance.

## Dependencies
- `F-001`, `F-002`, `F-005`, `F-007`, `F-015`, `F-016`

## Notes
This feature is intentionally workflow-generic. It is not tied to coding memory only and should support reusable knowledge exchange across other work domains.
