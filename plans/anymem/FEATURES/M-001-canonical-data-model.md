# M-001 - Canonical Data Model and Storage Baseline

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define canonical entities for auth tenancy context, memory, policy/procedure, approvals, trace/proof, retrieval metadata, and memory package lifecycle.

## Acceptance Criteria
- Day-1 workspace-safe tenancy keys exist for all core entities.
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

## Dependencies
- None
