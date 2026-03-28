# Split Decisions (anymem + anycode)

## Status
- Split mode: `monorepo-first`
- Boundary mode: `api-only`
- Domain ownership: `anymem owns generic governance domains`

## Non-Negotiables
1. `anycode` must not read or write `anymem` database tables directly.
2. `anycode` can consume only public `anymem` APIs/SDK contracts.
3. `anymem` owns generic auth tenancy context, memory, retrieval, policy, approvals, trace/proof, and memory package lifecycle.
4. `anycode` owns coding wrappers, coding workflow orchestration, coding policy packs/profiles, and coding-specific UX.
5. Analyt integrates both products via separate adapters.
6. `anymem` policy is canonical; `anycode` policy packs may narrow or extend applicable policy but may not bypass or weaken canonical enforcement.
7. `anymem` package installation is treated as a trust and supply-chain problem, not only an import/export problem.
8. `anymem` owns the canonical local broker runtime for strong-enforcement paths; lighter consumers may use API/SDK-only paths.
9. Every implemented feature must ship with automated tests that act both as proof of work and as regression protection.
10. Long-running `anymem` flows are events-first: canonical write/read APIs remain REST/SDK resources, while live state changes are delivered through event subscriptions for first-party clients and webhook delivery for external consumers.
11. `anymem` authorization is permission-based RBAC: roles are named bundles of granular permissions and new roles are composed by permission assignment, not schema forks.
12. Analyt presents `anymem` and `anycode` as two separate first-class entries within the same suite group.
13. First-party live transport in v1 is workspace-scoped ordered `SSE` with resumable replay; webhooks remain the external delivery path.
14. Wrapper-to-broker communication uses one canonical local protocol: HTTP/JSON over OS-native local IPC, hidden behind an official local client SDK.
15. Memory packages are signed with workspace publisher keys; install-time verification is fail-closed and quarantine-capable.
16. Agent-facing MCP or Code Mode adapters are optional layers above canonical APIs/SDKs and may not bypass canonical auth, policy, approval, proof, or trace paths.
17. Phase progression is gated: the next phase cannot start until the current phase exit criteria and proof bundle are complete.
18. Proof bundle for phase exit must include passing automated regression tests, required integration tests, and performance checks for phase-relevant hot paths.
19. Personal and other sensitive memory categories are deny-by-default across apps and workflows unless explicit allow policy and permissions exist.
20. Preference and behavior resolution must be deterministic, precedence-driven, and traceable; no hidden or non-auditable preference overrides are allowed.

## Repo Extraction Readiness Gates
1. `anymem` API/SDK contract v1 is documented and stable.
2. `anycode` dependencies reference only `anymem` public contracts.
3. Cross-product integration scenarios are covered in planning tests.
4. No unresolved ownership conflicts in crosswalk.
5. Policy layering precedence is documented and testable.
6. Package trust, revocation, and update rules are documented and testable.
7. Each feature has defined required test coverage before it can be marked complete.
8. Each phase has explicit exit criteria and a recorded proof bundle before the phase can be marked complete.

## Transition Rule
- Legacy root planning files remain for one cycle as reference only.
- Canonical planning source moves to `plans/anymem`, `plans/anycode`, and `plans/integrations/analyt`.
