# M-037 - Multimodal Memory and Artifact Handling

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Support image/audio/video memory artifacts while preserving originals and producing derived representations for retrieval.

## Acceptance Criteria
- Original artifact is stored as immutable source with content hash and provenance metadata.
- Derived representations are stored with lineage to the original:
  - OCR/ASR transcript
  - structured extraction tags
  - embeddings/chunks
  - confidence metadata
- Retrieval and decision-context primarily use derived text/features for performance, with citations back to original artifacts.
- UI/API can render original artifacts when user permissions allow.
- Redaction, sensitivity, and access policy apply to both source artifacts and derived outputs.
- Reprocessing pipeline supports improved extraction models without losing prior lineage.

## Dependencies
- `M-001`, `M-005`, `M-011`, `M-021`, `M-023`, `M-029`
