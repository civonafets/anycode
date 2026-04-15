# M-050 - Memory Influence Explainability and Decision Attribution

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Make memory and policy influence on decisions inspectable, debuggable, and auditable.

## Acceptance Criteria
- Trace outputs show which memory/policy artifacts influenced each decision and at what stage.
- Retrieval results include `why included` and `why excluded` metadata with policy-safe detail levels.
- Attribution includes recency/age factor, usage factor, and intent/workstream match contribution for each included candidate.
- Attribution explicitly reports suppression outcomes (`muted`, `snoozed`, `hard_excluded`) for excluded candidates where permission allows.
- Attribution can explain why the runtime stayed in text mode, reused a saved view, or generated a new bounded view.
- Operators can compare alternative context bundles and influence outcomes for debugging.
- Operators can issue reversible tuning actions (`mute`, `snooze`, `unsuppress`) from attribution/debug surfaces with full audit trace.
- Attribution views respect permissions and redact restricted details while preserving audit value.
- Regression checks detect drift in attribution quality/stability for benchmark scenarios.

## Dependencies
- `M-005`, `M-007`, `M-011`, `M-015`, `M-024`

## Required Coverage
- Unit tests for attribution graph generation and policy-safe redaction behavior.
- Integration tests verifying `why included` / `why excluded` outputs across workflows.
- Regression tests for attribution stability on fixed replay datasets.
