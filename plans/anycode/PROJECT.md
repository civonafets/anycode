# anycode Project (Canonical for anycode Track)

## Purpose
- Product: `anycode`
- One-line summary: Coding orchestration layer that consumes `anymem` contracts to apply governance to coding workflows and tooling.

## Scope
### In scope
- Codex CLI and Claude Code wrapper integrations.
- Codex app guided integration path with explicit enforcement limits.
- Coding skill addenda and coding policy packs/profiles.
- Coding workflow routing to `anymem` APIs (memory, policy checks, approvals, trace/proof).

### Out of scope
- Owning generic memory/governance source of truth.
- Direct access to `anymem` persistence layer.

## Boundary Contract
- `anycode` depends on `anymem` via API/SDK only.
- Every call carries `workspace_id` and effective activation state context.
- Coding policy packs extend or narrow `anymem` policy applicability but cannot bypass canonical `anymem` enforcement outcomes.

## Success Conditions
- Coding workflows remain portable across tool vendors.
- Governance continuity is preserved through `anymem` contracts.
- Policy layering remains deterministic and auditable across coding integrations.
