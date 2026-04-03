# M-059 - Hosted External Memory Serving and Creator Monetization

## Status
- Priority: `P1`
- Phase: `3 - Standalone Surfaces`
- State: `Planned`

## Goal
Let publishers sell or license curated portions of their memory as anymem-hosted `protected_external` packages that remain under governed serving control and are consumable only through authenticated anymem API/SDK/MCP paths.

## Canonical v1 Model
- The canonical v1 commercial path is `anymem-hosted protected external serving`.
- Publisher-selected memory is packaged, safety-checked, signed, and hosted on anymem-managed infrastructure.
- Buyer workspaces do not receive raw package payloads or direct backend endpoints.
- Consumer agents must be connected through anymem-authenticated and policy-governed paths:
  - REST API
  - official SDKs
  - optional MCP adapter layered on top of canonical APIs

## Serving Rules
- Hosted external package retrieval always resolves through anymem entitlement, policy, activation, and scope checks.
- Decision-context results must label hosted package origin with package ID, publisher identity, version, protection mode, and external-source attribution.
- anymem must preserve the distinction between:
  - local/native memory
  - embedded package memory
  - hosted external package memory
- Hosted external packages may declare:
  - no raw export
  - no local embed
  - no offline activation
  - rate/seat/usage limits

## Creator Monetization Model
- Pricing models may include fixed purchase, subscription, seat-based, or usage-metered access.
- Payment processor details remain pluggable; canonical anymem ownership is:
  - purchase/entitlement state
  - billable usage events
  - seller analytics
  - payout-ledger inputs
  - revocation and disable behavior
- Metering units must be explicit per listing, for example:
  - retrieval calls
  - decision-context resolutions
  - active seats
  - time-bucket access

## Acceptance Criteria
- A publisher can publish a curated memory slice as an anymem-hosted `protected_external` package without exposing raw payloads to buyers.
- Buyer agents can consume hosted external memory only through anymem-governed REST/SDK/MCP paths using authenticated principals.
- Decision-context and trace outputs clearly identify when context came from hosted external package memory.
- Entitlement, metering, throttling, and revocation are enforced on the hosted serving path.
- Publishers can inspect usage, active entitlements, failure reasons, and payout-relevant analytics for their listings.
- Metering and payout-ledger events are auditable, replayable, and exportable.
- Hosted serving preserves tenant isolation and package-protection guarantees even when many buyer workspaces use the same publisher package.
- Disabled, expired, or revoked commercial packages stop new hosted retrieval within a bounded propagation window defined by policy.

## Dependencies
- `M-014`, `M-017`, `M-041`, `M-052`, `M-053`

## Required Coverage
- Integration tests for hosted protected retrieval through REST, SDK, and MCP paths.
- Security tests proving consumer agents never receive direct raw-payload access or bypass serving endpoints.
- Metering tests for billing-unit calculation, duplicate suppression, and reconciliation.
- Isolation tests for multi-tenant hosted serving across many buyer workspaces and publishers.
- Revocation and emergency-disable tests for hosted packages already in active use.
- Reporting tests for seller analytics and payout-ledger export consistency.
