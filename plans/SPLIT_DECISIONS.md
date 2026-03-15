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

## Repo Extraction Readiness Gates
1. `anymem` API/SDK contract v1 is documented and stable.
2. `anycode` dependencies reference only `anymem` public contracts.
3. Cross-product integration scenarios are covered in planning tests.
4. No unresolved ownership conflicts in crosswalk.

## Transition Rule
- Legacy root planning files remain for one cycle as reference only.
- Canonical planning source moves to `plans/anymem`, `plans/anycode`, and `plans/integrations/analyt`.
