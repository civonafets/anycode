# Project (Source of Truth)

This is the canonical project document. If any other file conflicts with this file, this file wins.

## Purpose
- Product name: `Memory Guardrail Proof System`
- One-line summary: Governance, memory, approval, and proof layer around existing AI coding tools.
- Problem this solves: Teams need enforceable policy, durable trace, and shared memory without replacing existing Codex/Claude subscriptions.

## Users
- Primary users: Engineering teams using Codex CLI/Codex app/Claude Code.
- Secondary users: Tech leads, security/compliance reviewers, and approvers on mobile.

## Scope
### In scope
- Shared backend for memory, policy/procedure, approvals/conversation, and trace/proof.
- Local broker per developer machine for tool integration and enforcement hooks.
- Dashboard for memory/policy/approval/trace visibility and control, including in-screen approval chat.
- Mobile inbox (PWA) for non-binary approvals, edits, and in-screen chat with the agent.
- Core skill and tool-specific integration addenda.

### Out of scope
- Replacing model vendors or building a custom IDE.
- Mandatory token proxying/API-only billing in v1.
- Native mobile apps in v1.
- Full enterprise billing/procurement flows.

## Constraints
- Baseline storage: `Postgres` + `pgvector`.
- Canonical enforcement comes from policy/procedure state, not memory retrieval alone.
- Trace is append-only and must survive memory/policy evolution.
- Existing user subscriptions must remain directly usable.

## Phases
| Phase | Goal | Exit Criteria | Status | Target Date |
|---|---|---|---|---|
| 0 - Planning | Lock architecture, feature boundaries, and delivery slices | Approved feature files + MVP cut | In Progress | TBD |
| 1 - Governance Core | Implement backend domains and policy/proof contract | Memory/policy/approval/trace APIs working end-to-end | Not Started | TBD |
| 2 - Broker + Tooling | Implement local broker and strongest CLI wrappers | Codex CLI + Claude Code wrapper paths functional | Not Started | TBD |
| 3 - Surfaces | Implement dashboard + mobile inbox workflows | Approval flows usable with same-screen agent chat, edits, and escalation | Not Started | TBD |
| 4 - Hardening | Reliability, security, and portability checks | Auditability and operator readiness accepted | Not Started | TBD |

## Success Metrics
- Privileged actions cannot bypass policy checks.
- Every completed risky action has linked proof artifacts.
- Approval latency is acceptable for mobile-driven workflows.
- Tool switch (Claude Code <-> Codex CLI) preserves governance continuity.

## Risks
- Integration limits in app-based tooling can weaken enforcement compared to CLI wrappers.
- Approval UX can become bottleneck if evidence payloads are noisy.
- Data model sprawl across memory/policy/trace domains can slow iteration if contracts are unclear.

## Decisions
| Date | Decision | Reason | Owner |
|---|---|---|---|
| 2026-03-11 | Use markdown-first planning files | Keep planning explicit and low overhead | Team |
| 2026-03-12 | Split features into per-file specs under `FEATURES/` | Improve traceability and execution control | Team |

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
