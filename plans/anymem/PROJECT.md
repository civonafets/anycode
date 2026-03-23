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
- Package trust lifecycle, publisher identity, revocation, and update policy.
- Stable external API/SDK contract for product consumers.
- Retrieval evaluation and benchmark framework.
- Role/scope/delegation model for publish/install/embed/toggle/approve actions.
- Canonical local broker runtime for strong-enforcement integrations.
- Events-first delivery for long-running state changes and live UI updates.
- Standalone surfaces for governance operations.

### Out of scope
- Coding-tool wrappers and coding-specific orchestration behavior.
- Coding-specific policy packs tied to CLI wrappers.

## Boundary Contract
- `anymem` publishes stable API/SDK contracts for consumers.
- Consumers (including `anycode`) use public contracts only.
- No direct DB coupling from consumer products.
- API contract includes auth propagation, idempotency, async job behavior, versioning, and failure semantics.
- First-party surfaces consume live event subscriptions from `anymem`; third-party integrations use webhook delivery or explicit event consumption contracts.

## Success Conditions
- Can run standalone.
- Can be embedded by suite adapters.
- Supports SaaS-safe tenancy model from day 1.
- Has a stable product boundary that can be extracted to its own repo without redefining runtime contracts.
- Every delivered feature includes automated tests and/or evaluation coverage appropriate to its risk profile.
- Supports granular permission-based RBAC without hard-coding a fixed small role set.

## Delivery Rule
- A feature is not considered complete until its required tests are added and passing.
- Tests serve two purposes: proof that the feature works now, and regression protection for future changes.
- Ranking/retrieval features must also include replayable evaluation or benchmark coverage where correctness is not binary.
