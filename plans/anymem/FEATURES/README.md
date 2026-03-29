# anymem Features Index

## Status Legend
- `Idea`
- `Planned`
- `In Progress`
- `Blocked`
- `Done`
- `Cut`

## Priority Legend
- `P0` required for MVP
- `P1` required for v1 hardening
- `P2` later

## Test Rule
1. Every feature file must define required test coverage before implementation starts.
2. No feature is `Done` until its required tests are implemented and passing.
3. Tests are part of the feature deliverable, not a follow-up cleanup task.
4. Performance-sensitive features must define measurable performance checks and regression thresholds as part of required coverage.

## Feature Map
| ID | Feature | Priority | Phase | Status | File |
|---|---|---|---|---|---|
| M-001 | Canonical Data Model and Storage Baseline | P0 | 0 - Planning | Planned | [`M-001-canonical-data-model.md`](./M-001-canonical-data-model.md) |
| M-002 | Shared Backend Service Skeleton | P0 | 1 - Governance Core | In Progress | [`M-002-shared-backend-services.md`](./M-002-shared-backend-services.md) |
| M-003 | Local Broker Runtime (Generic) | P0 | 2 - Broker + Tooling | Planned | [`M-003-local-broker-runtime.md`](./M-003-local-broker-runtime.md) |
| M-004 | Policy and Procedure Enforcement Engine | P0 | 1 - Governance Core | Planned | [`M-004-policy-procedure-enforcement.md`](./M-004-policy-procedure-enforcement.md) |
| M-005 | Trace and Proof Pipeline | P0 | 1 - Governance Core | Planned | [`M-005-trace-proof-pipeline.md`](./M-005-trace-proof-pipeline.md) |
| M-006 | Approval Workflow and Conversation Surfaces | P0 | 3 - Standalone Surfaces | Planned | [`M-006-approval-workflow-conversation.md`](./M-006-approval-workflow-conversation.md) |
| M-007 | Dashboard MVP (Generic Governance) | P1 | 3 - Standalone Surfaces | Planned | [`M-007-dashboard-mvp.md`](./M-007-dashboard-mvp.md) |
| M-008 | Mobile Inbox PWA | P1 | 3 - Standalone Surfaces | Planned | [`M-008-mobile-inbox-pwa.md`](./M-008-mobile-inbox-pwa.md) |
| M-009 | Standalone Core Boundary and Portability Contract | P0 | 0 - Planning | In Progress | [`M-009-standalone-core-boundary.md`](./M-009-standalone-core-boundary.md) |
| M-010 | Reusable Approval Domain | P0 | 1 - Governance Core | In Progress | [`M-010-reusable-approval-domain.md`](./M-010-reusable-approval-domain.md) |
| M-011 | Memory Retrieval Engine | P0 | 1 - Governance Core | Planned | [`M-011-memory-retrieval-engine.md`](./M-011-memory-retrieval-engine.md) |
| M-012 | Memory Package Export, Install, and Activation Controls | P1 | 3 - Standalone Surfaces | Planned | [`M-012-memory-package-export-install-controls.md`](./M-012-memory-package-export-install-controls.md) |
| M-013 | Core Skill Contract (Generic) | P0 | 2 - Broker + Tooling | Planned | [`M-013-core-skill-generic.md`](./M-013-core-skill-generic.md) |
| M-014 | API and SDK Contract v1 | P0 | 0 - Planning | Planned | [`M-014-api-sdk-contract-v1.md`](./M-014-api-sdk-contract-v1.md) |
| M-015 | Retrieval Evaluation and Benchmarks | P1 | 1 - Governance Core | Planned | [`M-015-retrieval-evaluation-and-benchmarks.md`](./M-015-retrieval-evaluation-and-benchmarks.md) |
| M-016 | Role, Scope, and Delegation Model | P0 | 0 - Planning | Planned | [`M-016-role-scope-and-delegation-model.md`](./M-016-role-scope-and-delegation-model.md) |
| M-017 | Agent MCP Adapter (Optional) | P1 | 2 - Broker + Tooling | Planned | [`M-017-agent-mcp-adapter.md`](./M-017-agent-mcp-adapter.md) |
| M-018 | Manual Memory Authoring and Preference Capture | P0 | 1 - Governance Core | Planned | [`M-018-manual-memory-authoring-and-preference-capture.md`](./M-018-manual-memory-authoring-and-preference-capture.md) |
| M-019 | Preference Resolution and Behavioral Precedence | P0 | 1 - Governance Core | Planned | [`M-019-preference-resolution-and-behavioral-precedence.md`](./M-019-preference-resolution-and-behavioral-precedence.md) |
| M-020 | Memory Lifecycle Governance (Decay, Archival, Revalidation) | P1 | 1 - Governance Core | Planned | [`M-020-memory-lifecycle-governance.md`](./M-020-memory-lifecycle-governance.md) |
| M-021 | Context Packing and Budget Policy | P0 | 2 - Broker + Tooling | Planned | [`M-021-context-packing-and-budget-policy.md`](./M-021-context-packing-and-budget-policy.md) |
| M-022 | Outcome Feedback to Memory Proposal Loop | P1 | 2 - Broker + Tooling | Planned | [`M-022-outcome-feedback-to-memory-proposal-loop.md`](./M-022-outcome-feedback-to-memory-proposal-loop.md) |
| M-023 | Personal Profile Privacy and Sensitive Memory Guardrails | P0 | 1 - Governance Core | Planned | [`M-023-personal-profile-privacy-and-sensitive-memory-guardrails.md`](./M-023-personal-profile-privacy-and-sensitive-memory-guardrails.md) |
| M-024 | Universal Decision-Context Contract | P0 | 1 - Governance Core | Planned | [`M-024-universal-decision-context-contract.md`](./M-024-universal-decision-context-contract.md) |
| M-025 | Degraded-Mode and Continuity Policy | P0 | 1 - Governance Core | Planned | [`M-025-degraded-mode-and-continuity-policy.md`](./M-025-degraded-mode-and-continuity-policy.md) |
| M-026 | External Agent Identity and Principal Model | P0 | 0 - Planning | Planned | [`M-026-external-agent-identity-and-principal-model.md`](./M-026-external-agent-identity-and-principal-model.md) |
| M-027 | Concurrent Memory Write Conflict Resolution | P1 | 1 - Governance Core | Planned | [`M-027-concurrent-memory-write-conflict-resolution.md`](./M-027-concurrent-memory-write-conflict-resolution.md) |
| M-028 | Pre-Decision Performance SLOs and Latency Guardrails | P0 | 1 - Governance Core | Planned | [`M-028-pre-decision-performance-slos.md`](./M-028-pre-decision-performance-slos.md) |
| M-029 | Hybrid RAG Gateway and RAM Hot Cache | P1 | 2 - Broker + Tooling | Planned | [`M-029-hybrid-rag-gateway-and-ram-hot-cache.md`](./M-029-hybrid-rag-gateway-and-ram-hot-cache.md) |
