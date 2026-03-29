# Legacy Transition Notice

This root `PROJECT.md` is legacy reference only.
Canonical planning now lives in:
- `plans/anymem/PROJECT.md`
- `plans/anycode/PROJECT.md`
- `plans/integrations/analyt/PROJECT.md`

# Legacy Reference Snapshot

If any content here conflicts with split planning docs, split planning docs win.

## Purpose
- Product name: `Memory Guardrail Proof System`
- One-line summary: Standalone governance, memory, approval, and proof layer around AI-assisted work, with coding as the first implementation focus and Analyt as one integration target.
- Problem this solves: Teams need enforceable policy, durable trace, reusable approvals, and shared memory without replacing existing tools or coupling governance to one host product.

## Users
- Primary users: Teams using AI-assisted workflows, with engineering/coding teams as the first target.
- Secondary users: Tech leads, security/compliance reviewers, and approvers on mobile.
- Integration users: Product/platform teams embedding the system into suites such as Analyt.

## Scope
### In scope
- Shared backend for memory, policy/procedure, approvals/conversation, and trace/proof.
- Workspace-aware domain model with private and shared record scoping from day 1.
- Local broker per developer machine for tool integration and enforcement hooks.
- Memory retrieval engine with broker-side pre-task recall and on-demand search.
- Exportable/installable memory packages with strict privacy/sensitivity pipeline and explicit trust/provenance metadata.
- Runtime memory activation controls (package/category/tag) via UI and agent APIs, with clear observability in dashboard.
- Reusable approval objects and chat-driven decision workflows for coding and non-coding tasks.
- Standalone dashboard for memory/policy/approval/trace visibility and control, including in-screen approval chat.
- Mobile inbox (PWA) for non-binary approvals, edits, and in-screen chat with the agent.
- Core skill and tool-specific integration addenda.
- First-class Analyt integration through adapters, token exchange, and suite navigation.
- Public integration boundaries so the same system can be embedded into other products.

### Out of scope
- Replacing model vendors or building a custom IDE.
- Mandatory token proxying/API-only billing in v1.
- Native mobile apps in v1.
- Full enterprise billing/procurement flows.

## Constraints
- Baseline storage: `Postgres` + `pgvector`.
- Standalone auth is required in v1.
- Day-1 canonical schemas and APIs must carry workspace tenancy context (`org_id`, `workspace_id`, and scope fields) even in personal/self-host mode.
- Personal/local mode must use the same tenancy model via a default org/workspace bootstrap, not a separate single-user schema.
- Borrowed patterns from external systems are allowed only if they map to our canonical multi-workspace backend and do not create a second local source of truth.
- Canonical enforcement comes from policy/procedure state, not memory retrieval alone.
- Retrieval ranking must be explainable, traceable, and deterministic enough for audit review in v1.
- Deep-recall or delegated expansion paths must be bounded by policy (`scope`, `depth`, `token cap`, `timeout`) and fully traced.
- Retrieval must degrade gracefully when optional text-index capabilities are unavailable.
- Trace is append-only and must survive memory/policy evolution.
- Existing user subscriptions must remain directly usable.
- Deployment must support self-hosted single-tenant first while keeping contracts tenancy-safe for later SaaS evolution.
- Core backend, broker, and UI contracts must not depend on Analyt-specific data models, auth sessions, or storage.
- Product integrations must consume stable adapter contracts rather than forking core behavior.
- Initial portability proof is direct standalone operation outside Analyt; additional product adapters come later.

## Phases
| Phase | Goal | Exit Criteria | Status | Target Date |
|---|---|---|---|---|
| 0 - Planning | Lock architecture, feature boundaries, and delivery slices | Approved feature files + MVP cut | In Progress | TBD |
| 1 - Governance Core | Implement backend domains, standalone auth, and reusable approval contract | Memory/policy/approval/trace/auth APIs working end-to-end with workspace/membership scoping and private/shared visibility | Not Started | TBD |
| 2 - Broker + Tooling | Implement local broker and strongest CLI wrappers | Codex CLI + Claude Code wrapper paths functional | Not Started | TBD |
| 3 - Standalone Surfaces | Implement direct dashboard + mobile inbox workflows | Standalone approval flows usable with same-screen agent chat, edits, escalation, and web push | Not Started | TBD |
| 4 - Suite Integrations | Make the system first-class inside Analyt and adapter-ready elsewhere | Analyt integration works without becoming canonical runtime | Not Started | TBD |
| 5 - Hardening | Reliability, security, and portability checks | Auditability, operator readiness, and portability proof accepted | Not Started | TBD |

## Success Metrics
- Privileged actions cannot bypass policy checks.
- Every completed risky action has linked proof artifacts.
- Approval latency is acceptable for mobile-driven workflows.
- Approval objects can represent coding and non-coding workflows without schema changes.
- Retrieved context is relevant enough to improve work quality without hiding applicable policy.
- Memory export packages can be shared safely without leaking personal/sensitive data.
- Operators can toggle memory sources/categories/tags and observe measurable precision/effect changes.
- Deep recall remains bounded and auditable under load without leaking cross-workspace context.
- Retrieval remains functional in degraded mode when advanced indexing is unavailable.
- Tool switch (Claude Code <-> Codex CLI) preserves governance continuity.
- System is usable directly outside Analyt with no dependency on Analyt runtime.
- Analyt users can access governance workflows as a first-class suite capability.
- Multi-user workspaces can share governed records while preserving scoped/private records without schema forks.

## Risks
- Integration limits in app-based tooling can weaken enforcement compared to CLI wrappers.
- Approval UX can become bottleneck if evidence payloads are noisy.
- Data model sprawl across memory/policy/trace domains can slow iteration if contracts are unclear.
- Core implementation could accidentally couple to Analyt auth/session/entitlement models if adapter boundaries are not enforced early.
- Single-user self-approval in MVP can limit governance strength if role expansion is not planned cleanly.
- Weak retrieval ranking can surface stale or noisy memory unless score features and decay rules are explicit.
- Deferring workspace tenancy fields until later would force expensive data migrations and API breaks when packaging for SaaS.
- Over-adopting plugin-local memory patterns could hurt enterprise scaling if we blur the shared backend boundary.

## Decisions
| Date | Decision | Reason | Owner |
|---|---|---|---|
| 2026-03-11 | Use markdown-first planning files | Keep planning explicit and low overhead | Team |
| 2026-03-12 | Split features into per-file specs under `FEATURES/` | Improve traceability and execution control | Team |
| 2026-03-12 | Build standalone core first, then integrate Analyt as a first-class adapter | Keep the product portable and reusable outside one suite | Team |
| 2026-03-12 | Use standalone auth in v1 | Standalone mode must not depend on host-product identity |
| 2026-03-12 | Target self-hosted first with SaaS-ready contracts | Ship usable deployment first without blocking future hosted mode |
| 2026-03-12 | Start with web push on mobile PWA and defer native shell | Fastest route to reliable approval loop in v1 |
| 2026-03-12 | MVP approver is the acting user/owner | Keep initial role model simple while preserving reusable workflow objects |
| 2026-03-12 | Approval system must stay workflow-generic, not coding-specific | Reuse the same approval/chat/memory model across other work types |
| 2026-03-14 | Start memory retrieval with explainable lexical + recency ranking before heavier semantic ranking | Faster to ship, easier to audit, and fits self-hosted v1 |
| 2026-03-14 | Make workspace tenancy and record scoping a day-1 core requirement | Keep local mode and future SaaS/product packaging on one canonical model |
| 2026-03-15 | Adopt only selective retrieval/reliability patterns from lossless-claw (tiered recall, bounded expansion, fallback search, integrity checks) | Improve enterprise robustness without changing core architecture direction |
| 2026-03-15 | Add memory package export/install model with strict sensitivity pipeline and runtime toggles | Enable safe memory sharing and controlled experimentation without breaking governance boundaries |

## Linked Working Files
- anymem project: [`plans/anymem/PROJECT.md`](./plans/anymem/PROJECT.md)
- anycode project: [`plans/anycode/PROJECT.md`](./plans/anycode/PROJECT.md)
- analyt integration project: [`plans/integrations/analyt/PROJECT.md`](./plans/integrations/analyt/PROJECT.md)

## Update Protocol
1. Update split docs first (`plans/anymem`, `plans/anycode`, `plans/integrations/analyt`).
2. Keep this file as optional historical context only.
