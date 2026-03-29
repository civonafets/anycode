# M-029 - Hybrid RAG Gateway and RAM Hot Cache

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Enable `anymem` to serve as a governed decision-context gateway over external vector/document retrieval systems while optionally using RAM hot caches for low-latency paths.

## Scope Position
- This is a first-class secondary use case for anymem.
- It is not the primary default usage path, but it must be implemented to the same quality and governance standard as core flows.

## Why
- Use external vector/doc systems for large full-document corpora.
- Keep `anymem` as the policy, scope, approval, and trace-aware decision layer.
- Improve pre-decision latency via hot in-memory caching without making RAM canonical.

## Acceptance Criteria
- `anymem` can query external retrieval backends through adapter contracts.
- Gateway enforces canonical auth/scope/activation/policy constraints before context reaches agents.
- RAM hot tier is optional and explicitly non-canonical:
  - cache entries are derivable from durable canonical data
  - cache loss does not lose canonical memory/policy/trace state
- Gateway response maps to canonical decision-context contract.
- Cache invalidation and freshness rules are explicit and testable.
- Failover behavior on cache/backend degradation follows degraded-mode policy.
- Performance benchmarks compare:
  - direct external retrieval
  - external retrieval through gateway
  - gateway with RAM hot tier

## Dependencies
- `M-005`, `M-011`, `M-014`, `M-021`, `M-024`, `M-025`, `M-028`
