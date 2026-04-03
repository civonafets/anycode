# M-058 - Derived Artifact Templates and Deterministic Renderers

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Let agents generate graphs, reports, slide decks, maps, and other reusable artifacts from governed knowledge through predefined templates, rules, and renderer components instead of ad hoc one-off prompting.

## Renderer Model
- Templates declare input schema, allowed source scopes, renderer type, layout/style options, and output artifact type.
- Renderers are deterministic or tightly bounded so the same template and inputs yield stable, debuggable outputs.
- Agents select a template/profile, fill structured input slots, and request a render rather than inventing arbitrary output code by default.

## Acceptance Criteria
- Template registry supports reusable graph/report/slide/table/artifact definitions with versioning and permissions.
- Render requests preserve lineage to source records, compile-view version, template version, and renderer version.
- Generated artifacts can be filed back into anymem as derived artifacts with searchability and provenance.
- Templates can consume compiled views, concept graphs, and filtered canonical data without bypassing policy or sensitivity controls.
- UI/API/tooling can expose available templates and their required inputs to agents and human operators.
- Unsafe freeform code execution is not required for common artifact-generation workflows.
- Output regeneration is reproducible enough for approval review, replay, and regression comparison.

## Dependencies
- `M-014`, `M-021`, `M-037`, `M-050`, `M-055`

## Required Coverage
- Contract tests for template schema validation, required inputs, and output type guarantees.
- Permission tests for template visibility and allowed source-scope usage.
- Lineage tests proving generated artifacts retain traceable source/template/render provenance.
- Regression tests comparing deterministic output structure for fixed fixture inputs.
