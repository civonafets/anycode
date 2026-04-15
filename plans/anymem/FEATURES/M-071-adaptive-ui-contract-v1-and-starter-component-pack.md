# M-071 - Adaptive UI Contract v1 and Starter Component Pack

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Lock the first concrete machine-readable contract for adaptive UI so agents, APIs, validators, and renderers all operate on the same bounded schema and starter component set.

## Why This Exists
- `M-058` defines renderer/component registry behavior.
- `M-070` defines adaptive UI runtime behavior.
- This feature locks the first concrete schema they both rely on so implementation does not begin from vague prose.

## Contract Artifacts
- `component_manifest`
- `component_pack`
- `component_definition`
- `prop_definition`
- `dataset_contract`
- `view_spec`
- `view_node`
- `interaction_profile`
- `validation_error`
- `correction_hint`

## V1 Non-Goals
- No arbitrary custom components.
- No arbitrary CSS payloads or freeform style objects.
- No executable custom logic blocks inside `view_spec`.
- No unbounded nested trees or dynamic component loading from unknown sources.

## V1 Structural Limits
- Maximum component-tree depth: `4`
- Maximum rendered node count in one `view_spec`: `20`
- Maximum simultaneous interactive regions by default profile: `3`
- Default component pack for lower-capability local models: starter pack only
- Any component outside the starter pack requires explicit profile/policy allowance
- Maximum inline dataset payload for adaptive UI v1: `256 KB` serialized or `1000` rows, whichever comes first
- Maximum staged dataset payload accepted by the v1 compose-facing dataset path: `5 MB` serialized or `50000` rows; larger corpora must go through canonical memory or hybrid retrieval paths

## Canonical `component_manifest` Shape
- Required fields:
  - `manifest_version`
  - `component_pack_id`
  - `component_pack_version`
  - `components[]`
  - `theme_profiles[]`
  - `interaction_profiles[]`
  - `compact_manifest` (optional derived form)
- `component_definition` required fields:
  - `component_id`
  - `category`
  - `title`
  - `description`
  - `allowed_view_kinds[]`
  - `prop_definitions[]`
  - `supported_bindings[]`
  - `supported_interactions[]`
  - `theme_support`
  - `layout_constraints`
  - `examples[]`
- `supported_bindings[]` item shape:
  - `binding_kind`
  - `allowed_field_types[]`
  - `required_semantic_roles[]` (optional)
  - `cardinality`
  - `notes` (optional)
- `prop_definition` required fields:
  - `name`
  - `type`
  - `required`
  - `default` (optional)
  - `enum_values[]` (optional)
  - `range` (optional)
  - `binding_modes[]`
  - `description`
- `binding_modes[]` allowed values in v1:
  - `literal`
  - `dataset_field`
  - `binding_ref`
  - `enum_choice`
- `theme_support` required fields:
  - `theme_modes[]`
  - `allowed_tone_props[]`
  - `allowed_density_props[]`
  - `allowed_emphasis_props[]`
- `layout_constraints` required fields:
  - `allowed_parent_component_ids[]`
  - `allowed_child_component_ids[]`
  - `max_children`
  - `width_behavior`
  - `height_behavior`

## Canonical `dataset_contract` Shape
- Required fields:
  - `dataset_ref`
  - `dataset_class`
  - `schema`
  - `row_count`
  - `provenance`
  - `sensitivity`
  - `ttl`
  - `content_hash`
  - `immutability`
  - `promotion_state`
  - `created_at`
- `schema` required fields:
  - `fields[]`
  - `primary_grain` (optional)
  - `time_field` (optional)
  - `sampling_state` (optional)
- `fields[]` item shape:
  - `name`
  - `type`
  - `nullable`
  - `semantic_role` (optional)
- `dataset_class` allowed values in v1:
  - `ephemeral_inline`
  - `ephemeral_staged`
  - `saved_view_bound`
  - `promoted_memory_candidate`
- Dataset lifecycle rules:
  - `ephemeral_inline` is request/session scoped only and may not outlive its declared TTL
  - `ephemeral_staged` is immutable staged input addressable for compose/match/validate during TTL
  - `saved_view_bound` may back refreshable saved views while TTL remains valid
  - `promoted_memory_candidate` is still immutable as dataset input but eligible for separate governed promotion into canonical memory

## Canonical `view_spec` Shape
- Required fields:
  - `spec_version`
  - `view_kind`
  - `title`
  - `renderer_profile_ref`
  - `theme_profile_ref`
  - `data_bindings[]`
  - `root_node`
  - `lineage`
- `view_node` required fields:
  - `node_id`
  - `component_id`
  - `props`
  - `bindings[]` (optional)
  - `children[]` (optional)
  - `visibility_rule` (optional)
  - `interaction_refs[]` (optional)
- `data_bindings[]` item shape:
  - `binding_id`
  - `dataset_ref`
  - `field_map`
  - `filters` (optional)
  - `sort` (optional)
  - `aggregation` (optional)
- `visibility_rule` shape:
  - `rule_kind`
  - `binding_ref`
  - `operator`
  - `value`
  - `default_visible`
- `interaction_refs[]` item shape:
  - `interaction_id`
  - `interaction_kind`
  - `target_node_id` (optional)
- `validation_error` required fields:
  - `code`
  - `message`
  - `path`
  - `retryable`
  - `component_id` (optional)
  - `prop_name` (optional)
  - `expected` (optional)
  - `actual` (optional)
- `correction_hint` required fields:
  - `hint_id`
  - `error_code`
  - `action`
  - `replacement`
  - `message`
- Stable validation codes in v1 include:
  - `unknown_component`
  - `unknown_prop`
  - `invalid_enum`
  - `binding_schema_mismatch`
  - `tree_limit_exceeded`
  - `layout_constraint_violation`
  - `dataset_missing`
  - `dataset_expired`

## Starter Component Pack (`starter-v1`)
- Structural:
  - `page_shell`
  - `section`
  - `stack`
  - `split`
- Informational:
  - `text_block`
  - `alert_banner`
  - `empty_state`
- Data display:
  - `metric_card`
  - `metric_grid`
  - `data_table`
  - `line_chart`
  - `bar_chart`
  - `donut_chart`
  - `timeline_list`
- Controls:
  - `filter_bar`
  - `tab_switcher`
  - `detail_panel`

## Starter Component Rules
- `metric_card`
  - required props: `label`, `value_binding`
  - optional props: `delta_binding`, `format`, `tone`
- `metric_grid`
  - required props: `items[]`
  - max child metrics in v1: `8`
- `data_table`
  - required props: `columns[]`, `dataset_ref`
  - optional props: `default_sort`, `page_size`, `row_detail_ref`
- `line_chart`
  - required props: `x_field`, `y_field`, `dataset_ref`
  - optional props: `series_field`, `legend`, `y_format`
- `bar_chart`
  - required props: `category_field`, `value_field`, `dataset_ref`
  - optional props: `stack_field`, `legend`, `orientation`
- `donut_chart`
  - required props: `category_field`, `value_field`, `dataset_ref`
  - optional props: `legend`, `value_format`
- `timeline_list`
  - required props: `time_field`, `title_field`, `dataset_ref`
  - optional props: `detail_field`, `group_field`
- `filter_bar`
  - required props: `filters[]`
  - optional props: `submit_mode`
- `tab_switcher`
  - required props: `tabs[]`
- `detail_panel`
  - required props: `title`
  - optional props: `content_nodes[]`

## Theme and Style Rules
- Supported theme modes in v1:
  - `light`
  - `dark`
  - `system`
- Components consume theme tokens, not arbitrary inline style payloads.
- Style variation is bounded to approved enum-style props such as:
  - `tone`
  - `density`
  - `emphasis`
  - `legend`
  - `orientation`

## Compact Manifest Requirements For Local Models
- Compact form must preserve:
  - `component_id`
  - prop names
  - required/optional markers
  - accepted enum/range constraints
  - allowed bindings
  - short examples
- Compact form should omit verbose prose before dropping schema-critical constraints.
- Lower-capability local-model retry policy in v1:
  - maximum `2` validation-guided retries by default profile
  - fallback order is saved-view reuse, then server-side compose, then text fallback

## Normative Fixtures
- V1 planning must ship canonical example fixtures for:
  - `component_manifest/starter-v1.json`
  - `dataset_contract/ephemeral-inline.json`
  - `dataset_contract/saved-view-bound.json`
  - `view_spec/kpi-dashboard.json`
  - `view_spec/table-explorer.json`
  - `view_spec/trend-comparison.json`
  - `view_spec/timeline-view.json`
  - `validation_error/unknown-prop.json`
  - `correction_hint/replace-invalid-prop.json`
  - `api/views-compose-request.json`
  - `api/views-compose-response-reuse.json`
  - `api/views-compose-response-preview.json`
  - `api/views-validate-response-invalid.json`

## Acceptance Criteria
- V1 machine-readable shapes are explicit enough that implementation can build validators and renderers without inventing missing schema pieces.
- Starter component pack is intentionally limited and suitable for common dashboards, tables, trends, comparisons, and timelines.
- Every starter component has explicit prop definitions and data-binding expectations.
- `view_spec` contract is bounded enough that lower-capability local models can produce valid output with compact manifests and validation hints.
- Validation error codes and correction-hint structure are explicit enough for deterministic retries.
- Fixture and example payloads are mandatory so implementation can begin from canonical JSON rather than prose interpretation.
- Theme support is limited to approved modes and token-driven variants.
- Contract changes after v1 are additive by default unless a new schema version is introduced.

## Dependencies
- `M-014`, `M-034`, `M-058`, `M-070`

## Required Coverage
- Schema validation tests for all top-level contract artifacts.
- Fixture tests for starter components with valid and invalid prop combinations.
- Compose/validate round-trip tests for representative views:
  - KPI dashboard
  - table explorer
  - trend comparison
  - timeline view
- Low-capability local-model fixture tests using compact manifests only.
- Version-compatibility tests for additive schema evolution.
