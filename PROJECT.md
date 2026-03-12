# Project (Source of Truth)

This is the canonical project document. If any other file conflicts with this file, this file wins.

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
- Local broker per developer machine for tool integration and enforcement hooks.
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
- Canonical enforcement comes from policy/procedure state, not memory retrieval alone.
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
| 1 - Governance Core | Implement backend domains, standalone auth, and reusable approval contract | Memory/policy/approval/trace/auth APIs working end-to-end | Not Started | TBD |
| 2 - Broker + Tooling | Implement local broker and strongest CLI wrappers | Codex CLI + Claude Code wrapper paths functional | Not Started | TBD |
| 3 - Standalone Surfaces | Implement direct dashboard + mobile inbox workflows | Standalone approval flows usable with same-screen agent chat, edits, escalation, and web push | Not Started | TBD |
| 4 - Suite Integrations | Make the system first-class inside Analyt and adapter-ready elsewhere | Analyt integration works without becoming canonical runtime | Not Started | TBD |
| 5 - Hardening | Reliability, security, and portability checks | Auditability, operator readiness, and portability proof accepted | Not Started | TBD |

## Success Metrics
- Privileged actions cannot bypass policy checks.
- Every completed risky action has linked proof artifacts.
- Approval latency is acceptable for mobile-driven workflows.
- Approval objects can represent coding and non-coding workflows without schema changes.
- Tool switch (Claude Code <-> Codex CLI) preserves governance continuity.
- System is usable directly outside Analyt with no dependency on Analyt runtime.
- Analyt users can access governance workflows as a first-class suite capability.

## Risks
- Integration limits in app-based tooling can weaken enforcement compared to CLI wrappers.
- Approval UX can become bottleneck if evidence payloads are noisy.
- Data model sprawl across memory/policy/trace domains can slow iteration if contracts are unclear.
- Core implementation could accidentally couple to Analyt auth/session/entitlement models if adapter boundaries are not enforced early.
- Single-user self-approval in MVP can limit governance strength if role expansion is not planned cleanly.

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

## Linked Working Files
- Feature index: [`FEATURES/README.md`](./FEATURES/README.md)
- In progress: [`FEATURES/IN_PROGRESS.md`](./FEATURES/IN_PROGRESS.md)
- TODO: [`FEATURES/TODO.md`](./FEATURES/TODO.md)

## Update Protocol
1. Update this file first when scope, constraints, or phase boundaries change.
2. Update `FEATURES/README.md` when adding, removing, or reprioritizing features.
3. Update individual `FEATURES/F-*.md` files for acceptance criteria or design shifts.
4. Update `FEATURES/IN_PROGRESS.md` when work starts/stops/gets blocked/completes.
5. Update `FEATURES/TODO.md` when queue order changes.
