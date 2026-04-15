# M-068 - Compact Context Dialects for Offline Agents

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Offer optional compact derived context forms for offline or local agents where token budget and transport cost matter, while keeping canonical evidence and APIs as the authority.

## Dialect Rules
- Compact dialects are derived transport/rendering formats, not canonical truth.
- Dialects must preserve:
  - stable references to source records
  - provenance and freshness metadata
  - enough structure to request drill-down to raw evidence
- Dialects may optimize for:
  - local model context loading
  - low-latency bootstrap
  - offline package transport
  - low-token recurring recall
  - compact adaptive-UI component manifests and validation hints for weaker local models

## Acceptance Criteria
- Compact dialect generation is optional, profile-driven, and reproducible.
- Dialect outputs always link back to canonical source records and can trigger evidence expansion.
- Records marked `prefer_verbatim` or `never_compress` are handled according to policy and never silently reduced below allowed fidelity.
- Dialect use is observable so evaluations can compare compact-form versus ordinary context delivery.
- Offline/local agents can consume compact dialect outputs without needing a proprietary canonical backend format.
- Dialect family includes a compact adaptive-UI composition form that can describe approved components, allowed props, and correction hints in less context than the full registry format.
- Dialect changes are versioned and regression-tested like any other contract.

## Dependencies
- `M-021`, `M-024`, `M-049`, `M-055`, `M-065`

## Required Coverage
- Contract tests for dialect schema/version compatibility.
- Fidelity tests for source linkage and evidence-expansion correctness.
- Policy tests for verbatim-required and never-compress handling.
- Performance tests for token/size reduction and generation latency.
