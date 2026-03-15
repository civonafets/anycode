# Legacy Transition Notice

This file is legacy for one planning cycle.
Canonical planning now lives in:
- `plans/anymem/FEATURES/`
- `plans/anycode/FEATURES/`
- `plans/integrations/analyt/`

# F-013 - Analyt Suite Integration Adapter

## Status
- Priority: `P0`
- Phase: `4 - Suite Integrations`
- State: `Planned`
- Owner: `TBD`

## Goal
Make the governance system a first-class capability inside Analyt without making Analyt the canonical runtime, database, or identity authority for the product.

## In Scope
- Analyt navigation entry point and first-class suite surface.
- Token exchange from Analyt session to short-lived governance session.
- Entitlement and feature-gating contract for governance capability.
- Host-managed broker lifecycle through Analyt host tooling where useful.
- Embedded use of standalone auth-backed governance APIs rather than Analyt-owned identity.

## Out of Scope
- Moving canonical governance storage into Analyt host-local databases.
- Rewriting standalone UX to depend on Analyt-only components.

## Acceptance Criteria
- Analyt users can open governance workflows from a first-class suite entry point.
- Existing Analyt session can exchange for a short-lived governance token without separate login friction.
- Governance capability can be enabled/disabled through Analyt feature gating.
- The same backend and broker continue to operate unchanged outside Analyt.

## Dependencies
- `F-002`, `F-003`, `F-007`, `F-014`, `F-015`

## Notes
Analyt should consume stable governance APIs and adapter hooks, not own the product's canonical state.
