# M-058 - Derived Artifact Templates and Deterministic Renderers

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Let agents generate graphs, reports, slide decks, maps, and other reusable artifacts from governed knowledge through predefined templates, rules, and renderer components instead of ad hoc one-off prompting.

## Boundary
- This feature owns approved templates, component packs, and bounded renderer behavior.
- This feature owns component registries, schema validators, deterministic renderers, and template packs.
- Higher-level saved-view discovery, session presentation toggles, adaptive runtime orchestration, and saved-view persistence belong to the adaptive UI runtime feature.
- Agents never define canonical components or prop semantics themselves; they consume the approved registry owned by this feature.
- External hosts may render validated declarative specs, but they do not become the authority on component semantics or validation rules.

## Renderer Model
- Templates declare input schema, allowed source scopes, renderer type, layout/style options, and output artifact type.
- Renderers are deterministic or tightly bounded so the same template and inputs yield stable, debuggable outputs.
- Agents select a template/profile, fill structured input slots, and request a render rather than inventing arbitrary output code by default.
- Agents are expected to select from known components and known props only; inventing missing prop names or unsupported component variants is invalid behavior.
- Approved component packs are published as machine-readable registries:
  - stable component IDs
  - prop schemas
  - required/optional props
  - enum/range constraints
  - supported interaction hooks
  - theme/style variant support
  - minimal examples and anti-pattern notes
- Renderer input contracts support compact manifest forms so smaller local models can compose valid specs without loading large natural-language component documentation.

## Acceptance Criteria
- Template registry supports reusable graph/report/slide/table/artifact definitions with versioning and permissions.
- Renderer registry supports approved component packs for dashboards and mini-app-like views such as KPI cards, tables, bounded chart families, filters, and drill-down sections.
- Theme/profile system supports bounded style options, including approved light/dark variants, without arbitrary CSS or unreviewed component injection.
- Component registry is queryable through canonical APIs/SDKs and is stable enough for agent/tool caching.
- Every approved component exposes machine-readable prop validation and data-shape requirements so agents do not guess prop names or allowed values.
- Server-side validation rejects invalid view specs deterministically and returns machine-readable correction hints rather than silently coercing hallucinated props.
- Renderer profiles can publish compact model-friendly manifests and recommended component subsets for lower-capability local agents.
- Render requests preserve lineage to source records, compile-view version, template version, and renderer version.
- Generated artifacts can be filed back into anymem as derived artifacts with searchability and provenance.
- Templates can consume compiled views, concept graphs, and filtered canonical data without bypassing policy or sensitivity controls.
- UI/API/tooling can expose available templates and their required inputs to agents and human operators.
- Unsafe freeform code execution is not required for common artifact-generation workflows.
- Interactive outputs remain declarative specs over approved components and supported interaction primitives rather than arbitrary application code.
- Output regeneration is reproducible enough for approval review, replay, and regression comparison.

## Dependencies
- `M-014`, `M-021`, `M-037`, `M-050`, `M-055`, `M-071`

## Required Coverage
- Contract tests for template schema validation, required inputs, and output type guarantees.
- Contract tests for component registry schemas, prop validation, and correction-hint output shapes.
- Permission tests for template visibility and allowed source-scope usage.
- Lineage tests proving generated artifacts retain traceable source/template/render provenance.
- Low-capability model fixture tests proving compact manifests are sufficient to compose valid specs for representative dashboard/view tasks.
- Regression tests comparing deterministic output structure for fixed fixture inputs.
