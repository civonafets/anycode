# F-014 - Standalone Core Boundary and Portability Contract

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `In Progress`
- Owner: `TBD`

## Goal
Define the hard boundary between the standalone governance product and product-specific adapters such as Analyt.

## In Scope
- Core vs adapter ownership rules.
- Auth/session token exchange contract for embedded mode.
- Entitlement/feature-gating adapter contract.
- Shell/navigation/embed contract for suite integrations.
- Service-management hooks for host-managed broker mode.
- Definition of the initial portability proof: direct standalone deployment outside Analyt.

## Out of Scope
- Implementing every downstream integration.
- Making Analyt-specific types canonical in core APIs.

## Acceptance Criteria
- Core backend, broker, and UI can run without Analyt present.
- Analyt-specific concepts do not appear in canonical core domain models.
- Embedded mode uses a stable token-exchange or trust boundary contract instead of shared in-process state.
- Direct standalone deployment is documented and testable before suite embedding is considered complete.
- At least one additional non-Analyt adapter path is documented before architecture is declared mature.

## Dependencies
- `F-001`

## Notes
This feature exists to prevent accidental coupling while still allowing first-class suite integrations.
