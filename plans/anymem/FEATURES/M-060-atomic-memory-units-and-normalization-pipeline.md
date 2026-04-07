# M-060 - Atomic Memory Units and Normalization Pipeline

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Normalize incoming memory into self-contained atomic units so retrieval does not depend on ambiguous fragments, unresolved references, or inconsistent time/entity representation.

## Normalization Scope
- Resolve entity references where possible into explicit canonical IDs or stable aliases.
- Normalize relative time into absolute timestamps or bounded time ranges with confidence metadata.
- Convert ambiguous conversational fragments into self-contained fact/event/preference units while preserving the original source text.
- Preserve provenance, extraction confidence, and links back to original raw records and artifacts.

## Acceptance Criteria
- Canonical memory can represent normalized atomic units such as facts, events, preferences, instructions, and observations.
- Normalized units retain links to original source records and extracted evidence spans.
- Entity and time normalization are explicit and replayable rather than ad hoc prompt behavior.
- Low-confidence normalization outputs are marked as such and can require approval before affecting retrieval.
- Retrieval and evaluation can distinguish between original raw text and normalized memory units.
- Re-normalization can occur after model/pipeline improvements without losing lineage.

## Dependencies
- `M-001`, `M-005`, `M-018`, `M-031`, `M-037`

## Required Coverage
- Fixture tests for entity resolution, time normalization, and ambiguous-fragment rewriting.
- Provenance tests proving normalized units link back to exact source records/spans.
- Confidence-gating tests for low-confidence normalization outputs.
- Regression tests preventing silent semantic drift between raw source and normalized unit outputs.
