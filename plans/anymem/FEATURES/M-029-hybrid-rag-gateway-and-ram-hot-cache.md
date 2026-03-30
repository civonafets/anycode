# M-029 - Hybrid RAG Gateway and RAM Hot Cache

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Enable `anymem` to serve as a governed decision-context gateway over external vector/document retrieval systems while optionally using RAM hot caches for low-latency paths.

## Retrieval-Front Pattern (v1)
- Agents call `anymem` first for retrieval planning before querying external corpora.
- `anymem` returns a bounded retrieval plan:
  - where to look (backend/namespace/corpus segment targets)
  - how to look (query rewrites, filter hints, depth limits)
  - how much to fetch (result caps and deadlines)
- Gateway then executes planned retrieval and returns policy-safe, ranked context candidates.

## Cache Topology (v1)
- L1 cache: process-local RAM, ultra-low-latency, short TTL.
- L2 cache: workspace-shared hot cache tier (RAM or RAM-backed service), moderate TTL.
- Optional backend-near cache adapters may exist but must stay non-canonical and policy-aware.
- Single-flight per cache key prevents thundering-herd behavior on hot misses.
- `stale-while-revalidate` and refresh-ahead are allowed where policy permits.

## Cache Key Contract
- Cache key must include at minimum:
  - `workspace_id`
  - effective scope/auth context hash
  - activation-state hash
  - policy version hash
  - retrieval profile ID
  - normalized query hash
  - filters hash
  - selected backend target set hash
  - backend/index revision fingerprint
  - ranking version
- Missing any required dimension is treated as an implementation bug because it risks cross-scope leakage or stale unsafe results.

## Invalidation Contract
- Event-driven invalidation is mandatory for:
  - activation toggles
  - policy/procedure version changes
  - memory record create/update/archive/supersede
  - package install/revoke/update
  - connector sync watermark/index revision updates
  - permission/scope changes affecting retrieval eligibility
- Invalidation lag is measured and alertable.
- Manual purge controls are available for operators.

## Scope Position
- This is a first-class secondary use case for anymem.
- It is not the primary default usage path, but it must be implemented to the same quality and governance standard as core flows.

## Why
- Use external vector/doc systems for large full-document corpora.
- Keep `anymem` as the policy, scope, approval, and trace-aware decision layer.
- Improve pre-decision latency via hot in-memory caching without making RAM canonical.

## Acceptance Criteria
- `anymem` can query external retrieval backends through adapter contracts.
- `anymem` exposes an explicit retrieval-plan path so agents can ask where to look before expensive retrieval.
- Gateway enforces canonical auth/scope/activation/policy constraints before context reaches agents.
- RAM hot tier is optional and explicitly non-canonical:
  - cache entries are derivable from durable canonical data
  - cache loss does not lose canonical memory/policy/trace state
- Gateway response maps to canonical decision-context contract.
- Cache invalidation and freshness rules are explicit and testable.
- Cache key contract is explicit and includes tenancy, policy, activation, and backend-revision dimensions.
- Stampede controls (`single-flight`, bounded wait, fallback) are explicit and testable.
- Failover behavior on cache/backend degradation follows degraded-mode policy.
- Cache and gateway observability includes:
  - hit/miss by tier
  - cache age/freshness
  - invalidation lag
  - backend fanout count
  - warm vs cold latency
- Performance benchmarks compare:
  - direct external retrieval
  - external retrieval through gateway
  - gateway with RAM hot tier
- Benchmark matrix includes warm/hot/cold and multi-tenant noisy-neighbor scenarios.

## Dependencies
- `M-005`, `M-011`, `M-014`, `M-021`, `M-024`, `M-025`, `M-028`, `M-033`, `M-041`

## Required Coverage
- Unit tests for cache-key construction and invalidation trigger mapping.
- Integration tests for retrieval-plan-first flow and backend fanout execution.
- Concurrency tests for single-flight/stampede protection under bursty identical queries.
- Reliability tests for cache loss, stale-while-revalidate, and degraded fallback behavior.
- Performance tests covering warm L1, warm L2, cold miss, and backend timeout conditions.
- Isolation tests proving no cross-workspace/scope cache bleed.
