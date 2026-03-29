# M-046 - Data Classification, DLP, and Redaction Gateway

## Status
- Priority: `P1`
- Phase: `1 - Governance Core`
- State: `Planned`

## Goal
Prevent sensitive data from being ingested, retrieved, exported, or streamed outside policy boundaries.

## Acceptance Criteria
- Memory and connector inputs are classified into policy-relevant sensitivity labels.
- DLP checks run on ingest, retrieval/context assembly, export/package generation, and event/webhook delivery.
- Redaction supports field-level and content-span masking with explicit reason codes.
- Violations can be quarantined and routed to approval/review flows.
- DLP/redaction decisions are traceable and auditable without exposing raw restricted content.

## Dependencies
- `M-004`, `M-012`, `M-023`, `M-032`, `M-042`

## Required Coverage
- Unit tests for classification, DLP rule evaluation, and redaction transforms.
- Integration tests for ingest/retrieve/export/event paths enforcing DLP outcomes.
- Security regression suite with seeded sensitive payloads and expected quarantine/redaction behavior.
