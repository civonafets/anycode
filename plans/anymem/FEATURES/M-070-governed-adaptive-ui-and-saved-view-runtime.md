# M-070 - Governed Adaptive UI and Saved View Runtime

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Let agents produce dashboards, visualizations, and bounded mini-app views on demand using approved components and declarative view specs, with policy-safe save/reuse behavior and per-session presentation controls.

## What This Is
- A governed runtime for answering with bounded visual/UI outputs when text is not the best answer.
- A reuse layer for saved dashboards, views, and mini-app configurations so repeated requests do not always require fresh generation.
- A contract-driven composition flow where the agent works against approved schemas and server validation.

## What This Is Not
- Not arbitrary app generation.
- Not freeform HTML/CSS/JS authoring by the model.
- Not a second memory store separate from canonical anymem records and derived artifacts.
- Not a requirement that every agent compose views locally; weaker agents may rely on server-side compose and validation paths.

## Boundary Rules
- Adaptive UI is governed presentation, not arbitrary application code generation.
- View specs may reference only approved components, approved interaction primitives, approved renderer profiles, and approved theme/style profiles.
- Memory or preference records may influence presentation behavior, but hard enforcement comes from approved policy/profile outputs rather than unreviewed freeform notes.
- Saved views are governed derived artifacts with lineage, not a second canonical memory store.
- Caller-provided datasets are allowed only through explicit governed dataset contracts; agents may not treat arbitrary pasted blobs as trusted component-ready inputs without schema validation.
- anymem remains the authority for component semantics, validation, lineage, saved-view lifecycle, and presentation-mode enforcement even when external products render returned specs in their own shells.

## Presentation Modes
- `off`
  - always stay text-first; no adaptive UI generation or reuse
- `suggest`
  - agent may suggest matching saved views or a new bounded view
- `auto`
  - agent/runtime may choose text or view based on task fit and policy
- `required_if_supported`
  - use bounded adaptive UI whenever a supported view path exists; otherwise fail explicitly or explain why unsupported

## View Model
- Core governed objects include:
  - `view_spec`
  - `saved_view`
  - `render_revision`
  - `presentation_session_state`
  - `dataset_ref`
- `saved_view.share_mode` is explicit:
  - `owner_only`
  - `workspace_shared`
  - `explicit_principals`
  - `package_derived`
  - `published_template`
- `view_spec` includes:
  - `view_kind`
  - `component_tree`
  - `source_refs[]` and/or `source_query`
  - `dataset_ref` (optional)
  - `interaction_profile`
  - `renderer_profile_ref`
  - `theme_profile_ref`
  - `scope`
  - `lineage`

## Composition Pipeline
- Step 1: resolve effective presentation mode, profile, and policy constraints.
- Step 2: look for compatible saved views before any new spec generation unless caller explicitly disables reuse lookup.
- Step 3: resolve allowed component registry, theme/profile options, and interaction constraints.
- Step 4: bind canonical sources and/or governed caller-provided dataset inputs.
- Step 5: generate a declarative `view_spec` against machine-readable component schemas.
- Step 6: validate server-side and either:
  - accept
  - reject with correction hints
  - downgrade to text/saved-view path if policy/profile requires
- Step 7: render, optionally save, and emit trace/consumption metadata.

## Preferred Integration Paths
- External API consumer:
  - upload or reference dataset through canonical dataset contract
  - call compose
  - validate/save only when needed
- Stronger agent runtime:
  - may compose locally from approved manifests, then validate server-side
- Weaker local runtime:
  - should prefer compact manifests, saved-view reuse, and server-side compose/validate paths
- Repeated request for similar view:
  - should hit saved-view matching before any fresh composition attempt
- Low-capability fallback order:
  - saved-view reuse
  - server-side compose/validate
  - text fallback or explicit unsupported error

## Acceptance Criteria
- Agents can request adaptive UI only when the effective session presentation mode and policy/profile outputs allow it.
- Adaptive UI uses approved component families and bounded interaction primitives instead of freeform generated code.
- Supported interaction primitives are explicit and versioned, such as filter, sort, tab switch, range selection, compare view, and drill-down.
- Adaptive UI accepts governed caller-provided datasets through explicit dataset contracts with schema, provenance, sensitivity, and TTL metadata.
- Dataset lifecycle is explicit enough for implementation:
  - immutable after create
  - classed as request-scoped, session-scoped, saved-view-bound, or promotion-candidate
  - refresh/share rules depend on dataset class and expiry
- Canonical API supports a compose path so external consumers can ask anymem to produce or recommend bounded views from governed data without implementing a separate composition engine.
- Compose modes are explicit and deterministic:
  - `recommend_only`
  - `compose_preview`
  - `compose_and_persist_preview`
- Component selection and prop filling are driven by machine-readable registry data, not freeform prose-only guidance.
- New view generation goes through server-side schema validation before render/save and cannot bypass that path.
- Returned `view_spec` is always already validated against the effective component manifest/profile; clients never receive an unvalidated canonical preview.
- Validation failures return correction hints that agents, including weaker local models, can use deterministically on retry.
- Runtime can publish compact approved-component subsets and shorter manifest dialects for weaker local models so they operate from a smaller, safer search space.
- Lower-capability local agents can prefer server-side compose plus validation flows over local freeform spec authoring when profile policy marks that path as safer.
- Mutating actions inside generated views are not implicit; any write-capable interaction must route back through canonical policy/approval/proof paths.
- Saved-view discovery runs before new view generation when the caller allows reuse.
- Matching logic considers task intent, source scope, supported component/theme profiles, and saved-view freshness.
- Saved views support lifecycle operations:
  - save
  - reuse
  - refresh
  - fork
  - supersede
  - archive
- Saved-view ACL and share semantics are explicit enough for clean implementation:
  - share mode controls discoverability and reuse
  - refresh re-authorizes source access at use time
  - sensitivity and DLP constraints inherit from bound datasets, source records, and package protections
- Saved views backed by expired or revoked datasets become non-refreshable until rebound to a valid allowed dataset and must surface an explicit incompatibility reason instead of silently failing open.
- Reuse path refreshes governed data bindings and policy checks without paying full spec-generation cost when an existing compatible saved view exists.
- Agents can explain whether they answered with text, reused a saved view, or generated a new view, and can disclose matching saved views when asked.
- Views preserve provenance to source records, compile-view version, renderer/component versions, theme profile, and effective activation/policy context.
- Live-capable views can refresh through canonical event delivery and replay semantics where supported.
- Shared or cross-session view reuse fails closed when scope, sensitivity, activation, or permission requirements no longer match.
- Data snapshots are opt-in and policy-controlled; default saved-view persistence stores spec, bindings, lineage, and renderer metadata without persisting copied source data.
- Consumption telemetry distinguishes:
  - new view-spec generation cost
  - saved-view match cost
  - refresh-only cost
  - render cost
- First-party surfaces expose per-session adaptive UI toggles and saved-view inventory.
- Failure semantics are explicit and machine-readable for:
  - mode not allowed
  - unsupported view path
  - invalid/expired dataset
  - blocked component pack
  - saved-view incompatibility
  - validation failure

## Dependencies
- `M-014`, `M-021`, `M-024`, `M-034`, `M-041`, `M-050`, `M-055`, `M-058`, `M-067`, `M-071`

## Required Coverage
- Schema and contract tests for view specs, approved components, interaction profiles, and theme/profile validation.
- Security tests proving arbitrary HTML/JS/CSS injection or unapproved component imports are rejected.
- Dataset-contract tests covering caller-provided data schema validation, TTL expiry, sensitivity tagging, and scope-safe reuse boundaries.
- Permission and scope tests for saved-view discovery, reuse, refresh, and sharing.
- Determinism tests proving the same fixed inputs and renderer/profile versions yield stable view specs.
- Integration tests proving saved-view lookup runs before new generation when reuse is enabled.
- Session tests covering `off`, `suggest`, `auto`, and `required_if_supported` behavior.
- Low-capability local-model tests proving compact manifests plus validation hints are sufficient to converge on valid view specs without prop hallucination.
- Cost/performance tests proving saved-view reuse is materially cheaper than regenerating equivalent views.
- Live-refresh tests verifying bounded event-driven updates and replay-safe recovery.
