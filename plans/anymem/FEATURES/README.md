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
1. A feature file must define a `Required Coverage` section before it can move to `In Progress`.
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
| M-030 | Memory Interchange and Portability Standard | P1 | 2 - Broker + Tooling | Planned | [`M-030-memory-interchange-and-portability-standard.md`](./M-030-memory-interchange-and-portability-standard.md) |
| M-031 | Memory Trust Scoring and Anti-Poisoning Controls | P1 | 1 - Governance Core | Planned | [`M-031-memory-trust-scoring-and-anti-poisoning-controls.md`](./M-031-memory-trust-scoring-and-anti-poisoning-controls.md) |
| M-032 | Compliance, Residency, and Data Governance Controls | P1 | 1 - Governance Core | Planned | [`M-032-compliance-residency-and-data-governance-controls.md`](./M-032-compliance-residency-and-data-governance-controls.md) |
| M-033 | Connector Ingestion and Provenance Sync | P1 | 2 - Broker + Tooling | Planned | [`M-033-connector-ingestion-and-provenance-sync.md`](./M-033-connector-ingestion-and-provenance-sync.md) |
| M-034 | Model and Agent Behavior Profiles | P1 | 2 - Broker + Tooling | Planned | [`M-034-model-and-agent-behavior-profiles.md`](./M-034-model-and-agent-behavior-profiles.md) |
| M-035 | Counterfactual Replay and Simulation Harness | P1 | 2 - Broker + Tooling | Planned | [`M-035-counterfactual-replay-and-simulation-harness.md`](./M-035-counterfactual-replay-and-simulation-harness.md) |
| M-036 | Persona and Domain Isolation Boundaries | P1 | 1 - Governance Core | Planned | [`M-036-persona-and-domain-isolation-boundaries.md`](./M-036-persona-and-domain-isolation-boundaries.md) |
| M-037 | Multimodal Memory and Artifact Handling | P1 | 2 - Broker + Tooling | Planned | [`M-037-multimodal-memory-and-artifact-handling.md`](./M-037-multimodal-memory-and-artifact-handling.md) |
| M-038 | Enterprise IAM Federation and Provisioning | P1 | 1 - Governance Core | Planned | [`M-038-enterprise-iam-federation-and-provisioning.md`](./M-038-enterprise-iam-federation-and-provisioning.md) |
| M-039 | Hard Tenant Isolation and BYOK | P1 | 1 - Governance Core | Planned | [`M-039-hard-tenant-isolation-and-byok.md`](./M-039-hard-tenant-isolation-and-byok.md) |
| M-040 | HA/DR and Restore Guarantees | P1 | 2 - Broker + Tooling | Planned | [`M-040-ha-dr-and-restore-guarantees.md`](./M-040-ha-dr-and-restore-guarantees.md) |
| M-041 | Cost and Capacity Governance | P1 | 2 - Broker + Tooling | Planned | [`M-041-cost-and-capacity-governance.md`](./M-041-cost-and-capacity-governance.md) |
| M-042 | Ops and SIEM Integration | P1 | 2 - Broker + Tooling | Planned | [`M-042-ops-and-siem-integration.md`](./M-042-ops-and-siem-integration.md) |
| M-043 | Policy and Memory Rollout Controls | P1 | 2 - Broker + Tooling | Planned | [`M-043-policy-and-memory-rollout-controls.md`](./M-043-policy-and-memory-rollout-controls.md) |
| M-044 | Contract Stability and Migration Program | P1 | 0 - Planning | Planned | [`M-044-contract-stability-and-migration-program.md`](./M-044-contract-stability-and-migration-program.md) |
| M-045 | Admin Control Plane | P1 | 3 - Standalone Surfaces | Planned | [`M-045-admin-control-plane.md`](./M-045-admin-control-plane.md) |
| M-046 | Data Classification, DLP, and Redaction Gateway | P1 | 1 - Governance Core | Planned | [`M-046-data-classification-dlp-and-redaction-gateway.md`](./M-046-data-classification-dlp-and-redaction-gateway.md) |
| M-047 | Legal Hold and eDiscovery Workflows | P1 | 2 - Broker + Tooling | Planned | [`M-047-legal-hold-and-ediscovery-workflows.md`](./M-047-legal-hold-and-ediscovery-workflows.md) |
| M-048 | Prompt Injection and Context Attack Resilience | P1 | 1 - Governance Core | Planned | [`M-048-prompt-injection-and-context-attack-resilience.md`](./M-048-prompt-injection-and-context-attack-resilience.md) |
| M-049 | Deployment Profiles and Air-Gapped Parity | P1 | 2 - Broker + Tooling | Planned | [`M-049-deployment-profiles-and-air-gapped-parity.md`](./M-049-deployment-profiles-and-air-gapped-parity.md) |
| M-050 | Memory Influence Explainability and Decision Attribution | P1 | 3 - Standalone Surfaces | Planned | [`M-050-memory-influence-explainability-and-decision-attribution.md`](./M-050-memory-influence-explainability-and-decision-attribution.md) |
| M-051 | Policy-as-Code Verification and Promotion Gates | P1 | 2 - Broker + Tooling | Planned | [`M-051-policy-as-code-verification-and-promotion-gates.md`](./M-051-policy-as-code-verification-and-promotion-gates.md) |
