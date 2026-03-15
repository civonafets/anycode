# anymem Project (Canonical for anymem Track)

## Purpose
- Product: `anymem`
- One-line summary: Workflow-agnostic memory and governance platform for auth-aware memory retrieval, policy, approvals, trace/proof, and memory package sharing.

## Scope
### In scope
- Multi-workspace auth tenancy context.
- Memory and retrieval domains.
- Generic policy/procedure evaluation.
- Generic approvals and approval conversation flows.
- Append-only trace/proof.
- Memory package export/install/activation controls.
- Standalone surfaces for governance operations.

### Out of scope
- Coding-tool wrappers and coding-specific orchestration behavior.
- Coding-specific policy packs tied to CLI wrappers.

## Boundary Contract
- `anymem` publishes stable API/SDK contracts for consumers.
- Consumers (including `anycode`) use public contracts only.
- No direct DB coupling from consumer products.

## Success Conditions
- Can run standalone.
- Can be embedded by suite adapters.
- Supports SaaS-safe tenancy model from day 1.
