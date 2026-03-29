# M-047 - Legal Hold and eDiscovery Workflows

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Support legal/regulatory evidence preservation and discovery without breaking governance controls.

## Acceptance Criteria
- Legal holds can be applied by authorized admins at workspace/scope/category levels.
- Hold-protected records are excluded from deletion/expiry paths until hold release.
- eDiscovery exports produce evidence packages with chain-of-custody metadata.
- Discovery access is approval-gated and fully audited.
- Lifecycle governance and retention logic become legal-hold aware by design.
- `M-032` remains the canonical owner of legal-hold policy definitions; this feature owns operational workflows and evidence export execution.

## Dependencies
- `M-005`, `M-020`, `M-032`, `M-045`

## Required Coverage
- Unit tests for hold lifecycle transitions and retention override logic.
- Integration tests for eDiscovery export chain-of-custody integrity.
- Access-control tests proving discovery actions require explicit authorized roles/permissions.
