# M-001 - Canonical Data Model and Storage Baseline

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define canonical entities for auth tenancy context, memory, policy/procedure, approvals, trace/proof, retrieval metadata, adaptive UI objects, and memory package lifecycle.

## Acceptance Criteria
- Day-1 workspace-safe tenancy keys exist for all core entities.
- Canonical entities are explicit enough that implementation does not invent storage ownership or lifecycle semantics for:
  - workspace
  - actor/principal
  - session
  - delegation grant
  - memory record
  - retrieval snapshot
  - approval
  - approval message
  - approval disposition
  - proof artifact
  - package export/install/listing/entitlement/activation
  - caller-provided dataset
  - view spec revision
  - saved view
  - render revision
  - presentation session state
- Generic workflow approvals are modeled without coding-only assumptions.
- Retrieval snapshots, search-mode metadata, and ranking components are persisted.
- Memory package lineage and activation controls are first-class in schema.
- Memory records support versioning and conflict metadata for deterministic merge/supersede handling across concurrent agent writes.
- Memory records include canonical relevance fields: `created_at`, `observed_at` (when distinct), `last_used_at`, `use_count`, and decay-profile reference.
- Memory records include suppression state fields that can represent `mute`, `snooze_until`, and scoped hard-exclude controls with traceable actor provenance.
- Memory records support discoverability dimensions required for intent-aware retrieval: `workstream_ref` and `intent_tags[]` (with explicit `general` fallback).
- Memory records include knowledge-compression control metadata:
  - `compression_policy` (`normal`, `prefer_verbatim`, `never_compress`)
  - `evidence_escalation_policy` (`default`, `always_expand`, `high_risk_only`)
  - optional `must_include_if_applicable` flag for mandatory context classes
- Lifecycle state transitions (`active`, `stale`, `archived`, `superseded`) are non-destructive metadata changes; canonical memory payload is retained unless explicitly deleted.
- Every core entity carries explicit ownership and access metadata:
  - `workspace_id`
  - `scope`
  - `created_by_principal_id`
  - `effective_subject_principal_id` (when delegated)
  - `sensitivity_label`
  - `retention_class`
  - lifecycle state
- Caller-provided adaptive UI datasets are immutable after creation and include:
  - `dataset_class` (`ephemeral_inline`, `ephemeral_staged`, `saved_view_bound`, `promoted_memory_candidate`)
  - `content_hash`
  - schema fingerprint
  - provenance
  - sensitivity
  - `expires_at`
  - `promotion_state`
- Saved-view entities are first-class governed artifacts and include:
  - `saved_view_id`
  - `current_spec_revision_id`
  - `share_mode`
  - access-control references
  - `freshness_policy`
  - `data_retention_mode`
  - `last_refresh_at`
  - `supersedes_view_id` (optional)
- Render revisions are non-canonical outputs linked to an originating saved view or ephemeral compose session and include renderer/profile/component-manifest version references.
- Presentation session state is stored separately from saved views so per-session mode/theme toggles do not mutate canonical saved-view definitions.
- Saved-view snapshots default to spec plus binding metadata only; persisting rendered data snapshots requires explicit policy allowance and separate retention metadata.
- Canonical model explicitly distinguishes:
  - durable memory/proof/policy records
  - governed reusable view definitions
  - ephemeral preview or request-scoped UI artifacts
  so TTL expiry of temporary objects never silently deletes canonical memory.

## Dependencies
- None
