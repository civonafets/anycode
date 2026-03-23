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

## Repo Extraction Readiness Gates
1. `anymem` API/SDK contract v1 is documented and stable.
2. `anycode` dependencies reference only `anymem` public contracts.
3. Cross-product integration scenarios are covered in planning tests.
4. No unresolved ownership conflicts in crosswalk.
5. Policy layering precedence is documented and testable.
6. Package trust, revocation, and update rules are documented and testable.

## Transition Rule
- Legacy root planning files remain for one cycle as reference only.
- Canonical planning source moves to `plans/anymem`, `plans/anycode`, and `plans/integrations/analyt`.
