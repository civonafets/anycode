# M-054 - Checkpointed Delta Timelines and Replay Compression

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Compress high-churn mutable histories by storing bounded replay checkpoints plus ordered deltas, while keeping canonical memory records and retrieval indexes as the primary query surface.

## Boundary Rules
- This feature is a storage, replay, and transport optimization layer, not the primary representation for canonical memory retrieval.
- Canonical memory objects, policies, entitlements, and ranking metadata remain directly queryable without replaying delta timelines.
- Delta timelines apply to domains where state changes incrementally over time:
  - trace/proof streams
  - approval conversation threads and mutable workflow state
  - agent session state and replay logs
  - package version evolution
  - multimodal artifact revisions and frame-like state histories
  - incremental gateway/cache refresh state for high-churn external corpora

## Timeline Model
- A timeline is composed of ordered deltas plus periodic checkpoints/keyframes.
- Checkpoints are inserted by policy to cap worst-case reconstruction cost.
- Each delta and checkpoint carries content hash, lineage metadata, logical clock/order metadata, and attribution/provenance.
- Branching and fork lineage are supported for replay, simulation, and rollback analysis.

## Acceptance Criteria
- Supported timeline types can reconstruct an exact historical state from the nearest valid checkpoint plus subsequent deltas.
- Replay cost is bounded by policy; the system never requires unbounded delta walks to reconstruct active history.
- Canonical retrieval, ranking, and permission evaluation do not require delta replay on the hot path for ordinary memory queries.
- Delta timelines emit auditable provenance and tamper-evident lineage compatible with the trace/proof pipeline.
- Timeline branches can be replayed independently for simulation, rollback analysis, and counterfactual evaluation.
- Multimodal and frame-like artifacts can use specialized delta encodings while preserving original immutable source artifacts and derived-text lineage.
- Operators can observe compression ratio, checkpoint frequency, replay latency, and reconstruction failures/regressions.
- Degraded-mode policy defines how timeline replay behaves when a delta segment is missing, corrupt, or policy-blocked.

## Dependencies
- `M-001`, `M-005`, `M-025`, `M-028`, `M-035`, `M-037`

## Required Coverage
- Reconstruction tests proving exact state rebuild from checkpoint-plus-delta chains.
- Integrity tests for hash lineage, ordering, missing-segment detection, and tamper evidence.
- Performance tests for bounded replay latency and storage/compression behavior under representative high-churn workloads.
- Regression tests proving canonical memory retrieval remains available without delta replay on standard decision-context queries.
- Simulation tests for branch/fork replay and rollback analysis behavior.
