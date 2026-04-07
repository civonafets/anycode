window.ANYMEM_DATA = {
  "generatedAt": "2026-04-02T12:49:43.356Z",
  "oneLineSummary": "Workflow-agnostic memory and governance platform for auth-aware memory retrieval, policy, approvals, trace/proof, and memory package sharing.",
  "totalFeatures": 53,
  "features": [
    {
      "id": "M-001",
      "file": "M-001-canonical-data-model.md",
      "title": "M-001 - Canonical Data Model and Storage Baseline",
      "priority": "P0",
      "phase": "0 - Planning",
      "state": "Planned",
      "goal": "Define canonical entities for auth tenancy context, memory, policy/procedure, approvals, trace/proof, retrieval metadata, and memory package lifecycle.",
      "acceptanceCount": 9,
      "firstAcceptance": "Day-1 workspace-safe tenancy keys exist for all core entities.",
      "dependencies": []
    },
    {
      "id": "M-002",
      "file": "M-002-shared-backend-services.md",
      "title": "M-002 - Shared Backend Service Skeleton",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "In Progress",
      "goal": "Implement stable anymem APIs for auth tenancy context, memory/retrieval, policy, approvals, trace/proof, and package lifecycle.",
      "acceptanceCount": 14,
      "firstAcceptance": "APIs are standalone and do not require Analyt services.",
      "dependencies": [
        "M-001",
        "M-009",
        "M-014",
        "M-016"
      ]
    },
    {
      "id": "M-003",
      "file": "M-003-local-broker-runtime.md",
      "title": "M-003 - Local Broker Runtime (Generic)",
      "priority": "P0",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Provide a generic local broker for retrieval bootstrap, policy checks, approval routing, and trace/proof emission.",
      "acceptanceCount": 8,
      "firstAcceptance": "Broker role is explicitly defined as canonical optional local runtime for strong-enforcement integrations, not mandatory for all consumers.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-004",
        "M-005",
        "M-011"
      ]
    },
    {
      "id": "M-004",
      "file": "M-004-policy-procedure-enforcement.md",
      "title": "M-004 - Policy and Procedure Enforcement Engine",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Define deterministic generic policy/procedure evaluation for allow/block/require-approval outcomes.",
      "acceptanceCount": 4,
      "firstAcceptance": "Evaluation order and outputs are deterministic.",
      "dependencies": [
        "M-001",
        "M-002"
      ]
    },
    {
      "id": "M-005",
      "file": "M-005-trace-proof-pipeline.md",
      "title": "M-005 - Trace and Proof Pipeline",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Maintain append-only auditability for decisions, approvals, retrieval, proof, and package lifecycle.",
      "acceptanceCount": 3,
      "firstAcceptance": "Retrieval mode/ranking version and effective activation state are traceable.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-011",
        "M-012"
      ]
    },
    {
      "id": "M-006",
      "file": "M-006-approval-workflow-conversation.md",
      "title": "M-006 - Approval Workflow and Conversation Surfaces",
      "priority": "P0",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Provide generic approval review surfaces with non-binary outcomes and same-screen agent chat.",
      "acceptanceCount": 3,
      "firstAcceptance": "Approvers can approve/reject/edit/rewrite/request-proof/defer/escalate.",
      "dependencies": [
        "M-004",
        "M-005",
        "M-010"
      ]
    },
    {
      "id": "M-007",
      "file": "M-007-dashboard-mvp.md",
      "title": "M-007 - Dashboard MVP (Generic Governance)",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Deliver standalone governance dashboard for memory, policy, approvals, trace/proof, and package activation state.",
      "acceptanceCount": 5,
      "firstAcceptance": "Installed package state (external vs embed) is visible.",
      "dependencies": [
        "M-002",
        "M-005",
        "M-006",
        "M-010",
        "M-012"
      ]
    },
    {
      "id": "M-008",
      "file": "M-008-mobile-inbox-pwa.md",
      "title": "M-008 - Mobile Inbox PWA",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Provide mobile approval inbox with same-screen agent chat and non-binary dispositions.",
      "acceptanceCount": 2,
      "firstAcceptance": "End-to-end approval loop is usable without desktop.",
      "dependencies": [
        "M-005",
        "M-006",
        "M-010"
      ]
    },
    {
      "id": "M-009",
      "file": "M-009-standalone-core-boundary.md",
      "title": "M-009 - Standalone Core Boundary and Portability Contract",
      "priority": "P0",
      "phase": "0 - Planning",
      "state": "In Progress",
      "goal": "Define hard boundaries so adapters and consumers cannot become canonical runtime or persistence owners.",
      "acceptanceCount": 3,
      "firstAcceptance": "Core can run without Analyt or anycode.",
      "dependencies": [
        "M-001"
      ]
    },
    {
      "id": "M-010",
      "file": "M-010-reusable-approval-domain.md",
      "title": "M-010 - Reusable Approval Domain",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "In Progress",
      "goal": "Define workflow-generic approval object model with conversations, non-binary outcomes, and scope-safe visibility.",
      "acceptanceCount": 7,
      "firstAcceptance": "Domain supports memory/policy/risky-action/non-coding workflows.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-009"
      ]
    },
    {
      "id": "M-011",
      "file": "M-011-memory-retrieval-engine.md",
      "title": "M-011 - Memory Retrieval Engine",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Provide explainable retrieval with tiered recall (`search -> describe -> expand_query`) and bounded deep expansion.",
      "acceptanceCount": 9,
      "firstAcceptance": "Ranking is deterministic and explainable.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-003",
        "M-005",
        "M-015",
        "M-019",
        "M-020"
      ]
    },
    {
      "id": "M-012",
      "file": "M-012-memory-package-export-install-controls.md",
      "title": "M-012 - Memory Package Export, Install, and Activation Controls",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Enable safe reusable memory packages with strict sensitivity pipeline and explicit runtime activation controls.",
      "acceptanceCount": 8,
      "firstAcceptance": "Export is fail-closed on unresolved high-risk sensitivity findings.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-005",
        "M-007",
        "M-010",
        "M-011",
        "M-016"
      ]
    },
    {
      "id": "M-013",
      "file": "M-013-core-skill-generic.md",
      "title": "M-013 - Core Skill Contract (Generic)",
      "priority": "P0",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Define one generic skill contract for memory/retrieval, policy checks, approvals, proof, and trace across tools.",
      "acceptanceCount": 4,
      "firstAcceptance": "Skill keeps memory vs policy responsibilities explicit.",
      "dependencies": [
        "M-004",
        "M-005",
        "M-011",
        "M-012"
      ]
    },
    {
      "id": "M-014",
      "file": "M-014-api-sdk-contract-v1.md",
      "title": "M-014 - API and SDK Contract v1",
      "priority": "P0",
      "phase": "0 - Planning",
      "state": "Planned",
      "goal": "Define the stable public contract that external products and adapters use to consume anymem.",
      "acceptanceCount": 10,
      "firstAcceptance": "Contract covers authentication propagation, workspace context, actor/session/tool identifiers, and activation-state context.",
      "dependencies": [
        "M-001",
        "M-009",
        "M-016",
        "M-026"
      ]
    },
    {
      "id": "M-015",
      "file": "M-015-retrieval-evaluation-and-benchmarks.md",
      "title": "M-015 - Retrieval Evaluation and Benchmarks",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Measure and regress retrieval quality, attribution, and toggle/package impact before retrieval behavior is treated as stable.",
      "acceptanceCount": 21,
      "firstAcceptance": "Gold-set tasks and queries exist for replayable retrieval evaluation.",
      "dependencies": [
        "M-005",
        "M-011",
        "M-012",
        "M-020",
        "M-021",
        "M-022",
        "M-024"
      ]
    },
    {
      "id": "M-016",
      "file": "M-016-role-scope-and-delegation-model.md",
      "title": "M-016 - Role, Scope, and Delegation Model",
      "priority": "P0",
      "phase": "0 - Planning",
      "state": "Planned",
      "goal": "Define who can publish, install, embed, activate, license, acquire, approve, and delegate across workspace, user, and session scopes.",
      "acceptanceCount": 10,
      "firstAcceptance": "Publish/install/embed/toggle/approve permissions are explicit.",
      "dependencies": [
        "M-001",
        "M-009"
      ]
    },
    {
      "id": "M-017",
      "file": "M-017-agent-mcp-adapter.md",
      "title": "M-017 - Agent MCP Adapter (Optional)",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Expose an optional agent-facing MCP adapter that reduces tool-surface context cost while preserving canonical anymem contracts and enforcement paths.",
      "acceptanceCount": 4,
      "firstAcceptance": "MCP adapter improves agent ergonomics without becoming a second source of product semantics.",
      "dependencies": [
        "M-005",
        "M-013",
        "M-014",
        "M-016"
      ]
    },
    {
      "id": "M-018",
      "file": "M-018-manual-memory-authoring-and-preference-capture.md",
      "title": "M-018 - Manual Memory Authoring and Preference Capture",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Allow users to manually add, edit, and manage memories (including personal thoughts and preferences) as governed first-class records.",
      "acceptanceCount": 22,
      "firstAcceptance": "Manual memory record kinds are explicit and supported in canonical schema:",
      "dependencies": [
        "M-001",
        "M-002",
        "M-006",
        "M-007",
        "M-016"
      ]
    },
    {
      "id": "M-019",
      "file": "M-019-preference-resolution-and-behavioral-precedence.md",
      "title": "M-019 - Preference Resolution and Behavioral Precedence",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Provide deterministic, auditable resolution of policy and preference conflicts so agent behavior remains predictable as memory grows.",
      "acceptanceCount": 14,
      "firstAcceptance": "A precedence matrix is explicit and implemented for behavior decisions, including:",
      "dependencies": [
        "M-001",
        "M-004",
        "M-005",
        "M-016",
        "M-018"
      ]
    },
    {
      "id": "M-020",
      "file": "M-020-memory-lifecycle-governance.md",
      "title": "M-020 - Memory Lifecycle Governance (Decay, Archival, Revalidation)",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Keep long-lived memory high-signal by governing freshness, decay, archival, and revalidation instead of allowing unbounded stale context.",
      "acceptanceCount": 14,
      "firstAcceptance": "Memory lifecycle states are canonical and explicit:",
      "dependencies": [
        "M-001",
        "M-005",
        "M-011",
        "M-015",
        "M-018",
        "M-032"
      ]
    },
    {
      "id": "M-021",
      "file": "M-021-context-packing-and-budget-policy.md",
      "title": "M-021 - Context Packing and Budget Policy",
      "priority": "P0",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Define deterministic context-packing rules per integration/model budget so memory remains performant and behavior stays consistent across tools.",
      "acceptanceCount": 12,
      "firstAcceptance": "Budget profiles are defined per tool/model integration with explicit token and section budgets.",
      "dependencies": [
        "M-003",
        "M-005",
        "M-011",
        "M-014",
        "M-015",
        "M-019",
        "M-024"
      ]
    },
    {
      "id": "M-022",
      "file": "M-022-outcome-feedback-to-memory-proposal-loop.md",
      "title": "M-022 - Outcome Feedback to Memory Proposal Loop",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Convert execution outcomes and human feedback into governed memory proposals without creating silent canonical writes.",
      "acceptanceCount": 13,
      "firstAcceptance": "Outcome signals can be captured from approvals, traces, and tool-session results.",
      "dependencies": [
        "M-005",
        "M-006",
        "M-010",
        "M-011",
        "M-018",
        "M-019"
      ]
    },
    {
      "id": "M-023",
      "file": "M-023-personal-profile-privacy-and-sensitive-memory-guardrails.md",
      "title": "M-023 - Personal Profile Privacy and Sensitive Memory Guardrails",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Protect personal-profile and other sensitive memory domains with strict default-deny access, consent-aware sharing, and auditable redaction.",
      "acceptanceCount": 5,
      "firstAcceptance": "Sensitive memory categories are explicit and extensible.",
      "dependencies": [
        "M-001",
        "M-004",
        "M-005",
        "M-012",
        "M-016",
        "M-018"
      ]
    },
    {
      "id": "M-024",
      "file": "M-024-universal-decision-context-contract.md",
      "title": "M-024 - Universal Decision-Context Contract",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Provide one canonical pre-action contract that any AI agent integration consumes before execution-sensitive decisions.",
      "acceptanceCount": 17,
      "firstAcceptance": "Decision-context response shape is fixed and reusable across tool vendors:",
      "dependencies": [
        "M-002",
        "M-004",
        "M-005",
        "M-011",
        "M-014",
        "M-019",
        "M-023"
      ]
    },
    {
      "id": "M-025",
      "file": "M-025-degraded-mode-and-continuity-policy.md",
      "title": "M-025 - Degraded-Mode and Continuity Policy",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Define consistent fail behavior for memory/policy/retrieval degradation so agents remain safe and predictable.",
      "acceptanceCount": 12,
      "firstAcceptance": "Action classes are explicitly mapped to degraded-mode behavior:",
      "dependencies": [
        "M-003",
        "M-004",
        "M-005",
        "M-014",
        "M-024"
      ]
    },
    {
      "id": "M-026",
      "file": "M-026-external-agent-identity-and-principal-model.md",
      "title": "M-026 - External Agent Identity and Principal Model",
      "priority": "P0",
      "phase": "0 - Planning",
      "state": "Planned",
      "goal": "Define first-class identity and authorization model for external agent integrations (service principals and delegated user sessions).",
      "acceptanceCount": 8,
      "firstAcceptance": "Principal types are explicit:",
      "dependencies": [
        "M-001",
        "M-005",
        "M-016"
      ]
    },
    {
      "id": "M-027",
      "file": "M-027-concurrent-memory-write-conflict-resolution.md",
      "title": "M-027 - Concurrent Memory Write Conflict Resolution",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Provide deterministic conflict detection and merge/supersede rules when multiple agents or users propose competing memory updates.",
      "acceptanceCount": 9,
      "firstAcceptance": "Concurrency controls define how write conflicts are detected (version mismatch or semantic conflict classes).",
      "dependencies": [
        "M-001",
        "M-005",
        "M-010",
        "M-018",
        "M-019"
      ]
    },
    {
      "id": "M-028",
      "file": "M-028-pre-decision-performance-slos.md",
      "title": "M-028 - Pre-Decision Performance SLOs and Latency Guardrails",
      "priority": "P0",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Define measurable SLOs and regression guardrails for pre-decision memory and policy paths used by agent integrations.",
      "acceptanceCount": 17,
      "firstAcceptance": "SLO targets are defined for critical pre-decision calls:",
      "dependencies": [
        "M-003",
        "M-011",
        "M-014",
        "M-015",
        "M-021",
        "M-024"
      ]
    },
    {
      "id": "M-029",
      "file": "M-029-hybrid-rag-gateway-and-ram-hot-cache.md",
      "title": "M-029 - Hybrid RAG Gateway and RAM Hot Cache",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Enable `anymem` to serve as a governed decision-context gateway over external vector/document retrieval systems while optionally using RAM hot caches for low-latency paths.",
      "acceptanceCount": 22,
      "firstAcceptance": "`anymem` can query external retrieval backends through adapter contracts.",
      "dependencies": [
        "M-005",
        "M-011",
        "M-014",
        "M-021",
        "M-024",
        "M-025",
        "M-028",
        "M-033",
        "M-041"
      ]
    },
    {
      "id": "M-030",
      "file": "M-030-memory-interchange-and-portability-standard.md",
      "title": "M-030 - Memory Interchange and Portability Standard",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Define a versioned interchange format so memory can move across tools and vendors without lock-in.",
      "acceptanceCount": 5,
      "firstAcceptance": "Package format is schema-versioned and forward/backward compatibility rules are explicit.",
      "dependencies": [
        "M-012",
        "M-014",
        "M-029"
      ]
    },
    {
      "id": "M-031",
      "file": "M-031-memory-trust-scoring-and-anti-poisoning-controls.md",
      "title": "M-031 - Memory Trust Scoring and Anti-Poisoning Controls",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Detect and contain low-trust or malicious memory inputs before they influence decisions.",
      "acceptanceCount": 5,
      "firstAcceptance": "Memory records have explicit trust signals and source reputation metadata.",
      "dependencies": [
        "M-005",
        "M-011",
        "M-016",
        "M-023"
      ]
    },
    {
      "id": "M-032",
      "file": "M-032-compliance-residency-and-data-governance-controls.md",
      "title": "M-032 - Compliance, Residency, and Data Governance Controls",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Provide enterprise-grade compliance policy primitives for retention, deletion, legal-hold constraints, and residency requirements.",
      "acceptanceCount": 7,
      "firstAcceptance": "Data classes support retention, archival, and legal-hold policy constraints.",
      "dependencies": [
        "M-001",
        "M-005",
        "M-016",
        "M-023"
      ]
    },
    {
      "id": "M-033",
      "file": "M-033-connector-ingestion-and-provenance-sync.md",
      "title": "M-033 - Connector Ingestion and Provenance Sync",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Ingest memory-relevant context from external systems while preserving provenance, sync state, and revocation behavior.",
      "acceptanceCount": 5,
      "firstAcceptance": "Connector contracts support incremental sync with stable source identifiers.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-005",
        "M-031"
      ]
    },
    {
      "id": "M-034",
      "file": "M-034-model-and-agent-behavior-profiles.md",
      "title": "M-034 - Model and Agent Behavior Profiles",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Render decision-context consistently across different model families and agent runtimes using explicit behavior profiles.",
      "acceptanceCount": 5,
      "firstAcceptance": "Profile schema defines context rendering and budget strategy per model/agent class.",
      "dependencies": [
        "M-015",
        "M-021",
        "M-024",
        "M-028"
      ]
    },
    {
      "id": "M-035",
      "file": "M-035-counterfactual-replay-and-simulation-harness.md",
      "title": "M-035 - Counterfactual Replay and Simulation Harness",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Replay historical traces with proposed memory/policy changes to estimate impact before rollout.",
      "acceptanceCount": 5,
      "firstAcceptance": "Replay harness can execute historical decision scenarios against candidate memory/policy versions.",
      "dependencies": [
        "M-005",
        "M-015",
        "M-024",
        "M-028"
      ]
    },
    {
      "id": "M-036",
      "file": "M-036-persona-and-domain-isolation-boundaries.md",
      "title": "M-036 - Persona and Domain Isolation Boundaries",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Prevent cross-context leakage by enforcing explicit persona and domain boundaries with governed bridge flows.",
      "acceptanceCount": 5,
      "firstAcceptance": "Persona/domain scopes are first-class (for example: work, personal, client-specific).",
      "dependencies": [
        "M-001",
        "M-016",
        "M-023",
        "M-024"
      ]
    },
    {
      "id": "M-037",
      "file": "M-037-multimodal-memory-and-artifact-handling.md",
      "title": "M-037 - Multimodal Memory and Artifact Handling",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Support image/audio/video memory artifacts while preserving originals and producing derived representations for retrieval.",
      "acceptanceCount": 10,
      "firstAcceptance": "Original artifact is stored as immutable source with content hash and provenance metadata.",
      "dependencies": [
        "M-001",
        "M-005",
        "M-011",
        "M-021",
        "M-023",
        "M-029"
      ]
    },
    {
      "id": "M-038",
      "file": "M-038-enterprise-iam-federation-and-provisioning.md",
      "title": "M-038 - Enterprise IAM Federation and Provisioning",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Support enterprise identity federation and lifecycle provisioning for multi-company deployment.",
      "acceptanceCount": 6,
      "firstAcceptance": "SAML and OIDC SSO flows are supported for enterprise tenants.",
      "dependencies": [
        "M-002",
        "M-014",
        "M-016",
        "M-026",
        "M-032"
      ]
    },
    {
      "id": "M-039",
      "file": "M-039-hard-tenant-isolation-and-byok.md",
      "title": "M-039 - Hard Tenant Isolation and BYOK",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Provide strict tenant isolation and customer-managed encryption domains for enterprise trust boundaries.",
      "acceptanceCount": 8,
      "firstAcceptance": "Isolation guarantees are explicit across storage, cache, and runtime access paths.",
      "dependencies": [
        "M-001",
        "M-002",
        "M-005",
        "M-032"
      ]
    },
    {
      "id": "M-040",
      "file": "M-040-ha-dr-and-restore-guarantees.md",
      "title": "M-040 - HA/DR and Restore Guarantees",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Define and validate high-availability and disaster-recovery guarantees suitable for enterprise deployment.",
      "acceptanceCount": 5,
      "firstAcceptance": "RPO/RTO targets are explicit per deployment class.",
      "dependencies": [
        "M-002",
        "M-005",
        "M-028",
        "M-032"
      ]
    },
    {
      "id": "M-041",
      "file": "M-041-cost-and-capacity-governance.md",
      "title": "M-041 - Cost and Capacity Governance",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Control tenant-level resource usage and cost with enforceable runtime policies.",
      "acceptanceCount": 5,
      "firstAcceptance": "Per-tenant quotas are configurable and enforceable.",
      "dependencies": [
        "M-002",
        "M-014",
        "M-028"
      ]
    },
    {
      "id": "M-042",
      "file": "M-042-ops-and-siem-integration.md",
      "title": "M-042 - Ops and SIEM Integration",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Expose operational and security telemetry to enterprise monitoring and SIEM systems.",
      "acceptanceCount": 5,
      "firstAcceptance": "Audit and security event export pipelines are available.",
      "dependencies": [
        "M-005",
        "M-032",
        "M-041"
      ]
    },
    {
      "id": "M-043",
      "file": "M-043-policy-and-memory-rollout-controls.md",
      "title": "M-043 - Policy and Memory Rollout Controls",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Reduce rollout risk by supporting staged release, canary evaluation, and automatic rollback for policy/memory changes.",
      "acceptanceCount": 5,
      "firstAcceptance": "Rollout scopes are supported (tenant/workspace/profile segments).",
      "dependencies": [
        "M-015",
        "M-024",
        "M-028",
        "M-035"
      ]
    },
    {
      "id": "M-044",
      "file": "M-044-contract-stability-and-migration-program.md",
      "title": "M-044 - Contract Stability and Migration Program",
      "priority": "P1",
      "phase": "0 - Planning",
      "state": "Planned",
      "goal": "Guarantee stable API/SDK adoption paths for enterprise integrators through explicit compatibility and migration policy.",
      "acceptanceCount": 5,
      "firstAcceptance": "Compatibility matrix is maintained for API versions and SDK versions.",
      "dependencies": [
        "M-014",
        "M-030"
      ]
    },
    {
      "id": "M-045",
      "file": "M-045-admin-control-plane.md",
      "title": "M-045 - Admin Control Plane",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Provide tenant admin controls for identity, governance, operations, and emergency response.",
      "acceptanceCount": 10,
      "firstAcceptance": "Admin surface supports:",
      "dependencies": [
        "M-007",
        "M-016",
        "M-032",
        "M-038",
        "M-039",
        "M-041",
        "M-042"
      ]
    },
    {
      "id": "M-046",
      "file": "M-046-data-classification-dlp-and-redaction-gateway.md",
      "title": "M-046 - Data Classification, DLP, and Redaction Gateway",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Prevent sensitive data from being ingested, retrieved, exported, or streamed outside policy boundaries.",
      "acceptanceCount": 5,
      "firstAcceptance": "Memory and connector inputs are classified into policy-relevant sensitivity labels.",
      "dependencies": [
        "M-004",
        "M-012",
        "M-023",
        "M-032",
        "M-042"
      ]
    },
    {
      "id": "M-047",
      "file": "M-047-legal-hold-and-ediscovery-workflows.md",
      "title": "M-047 - Legal Hold and eDiscovery Workflows",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Support legal/regulatory evidence preservation and discovery without breaking governance controls.",
      "acceptanceCount": 6,
      "firstAcceptance": "Legal holds can be applied by authorized admins at workspace/scope/category levels.",
      "dependencies": [
        "M-005",
        "M-020",
        "M-032",
        "M-045"
      ]
    },
    {
      "id": "M-048",
      "file": "M-048-prompt-injection-and-context-attack-resilience.md",
      "title": "M-048 - Prompt Injection and Context Attack Resilience",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Reduce risk from untrusted instructions and adversarial context before agent decisions are made.",
      "acceptanceCount": 5,
      "firstAcceptance": "Ingested and retrieved content can be marked with trust and taint metadata.",
      "dependencies": [
        "M-011",
        "M-021",
        "M-024",
        "M-031",
        "M-035"
      ]
    },
    {
      "id": "M-049",
      "file": "M-049-deployment-profiles-and-air-gapped-parity.md",
      "title": "M-049 - Deployment Profiles and Air-Gapped Parity",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Keep core governance behavior consistent across SaaS, self-hosted, and air-gapped deployments.",
      "acceptanceCount": 6,
      "firstAcceptance": "Deployment profiles are explicitly defined: `saas`, `self_hosted_connected`, `self_hosted_air_gapped`.",
      "dependencies": [
        "M-003",
        "M-014",
        "M-030",
        "M-038",
        "M-044"
      ]
    },
    {
      "id": "M-050",
      "file": "M-050-memory-influence-explainability-and-decision-attribution.md",
      "title": "M-050 - Memory Influence Explainability and Decision Attribution",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Make memory and policy influence on decisions inspectable, debuggable, and auditable.",
      "acceptanceCount": 8,
      "firstAcceptance": "Trace outputs show which memory/policy artifacts influenced each decision and at what stage.",
      "dependencies": [
        "M-005",
        "M-007",
        "M-011",
        "M-015",
        "M-024"
      ]
    },
    {
      "id": "M-051",
      "file": "M-051-policy-as-code-verification-and-promotion-gates.md",
      "title": "M-051 - Policy-as-Code Verification and Promotion Gates",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Treat policy evolution as a governed software lifecycle with testable safety gates before runtime promotion.",
      "acceptanceCount": 5,
      "firstAcceptance": "Policy definitions are versioned, machine-readable artifacts with explicit schema/contracts.",
      "dependencies": [
        "M-004",
        "M-035",
        "M-043",
        "M-044"
      ]
    },
    {
      "id": "M-052",
      "file": "M-052-protected-memory-packages-and-commercial-entitlements.md",
      "title": "M-052 - Protected Memory Packages and Commercial Entitlements",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Enable proprietary memory packages that can be licensed to authorized organizations and employees while keeping raw memory payloads protected and fail-closed when trust or entitlement is invalid.",
      "acceptanceCount": 7,
      "firstAcceptance": "Protected packages can be installed and activated without exposing raw memory records to ordinary consumer workspace members.",
      "dependencies": [
        "M-012",
        "M-014",
        "M-016",
        "M-039",
        "M-042",
        "M-045",
        "M-046"
      ]
    },
    {
      "id": "M-053",
      "file": "M-053-memory-marketplace-and-publisher-distribution-platform.md",
      "title": "M-053 - Memory Marketplace and Publisher Distribution Platform",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Provide a first-party marketplace and publisher distribution surface for discovering, licensing, installing, and managing reusable memory packages.",
      "acceptanceCount": 6,
      "firstAcceptance": "Packages can be discovered and filtered by category, tag, compatibility, trust, and protection mode.",
      "dependencies": [
        "M-012",
        "M-014",
        "M-016",
        "M-045",
        "M-052"
      ]
    },
    {
      "id": "M-054",
      "file": "M-054-checkpointed-delta-timelines-and-replay-compression.md",
      "title": "M-054 - Checkpointed Delta Timelines and Replay Compression",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Compress high-churn mutable histories by storing bounded replay checkpoints plus ordered deltas, while keeping canonical memory records and retrieval indexes as the primary query surface.",
      "acceptanceCount": 8,
      "firstAcceptance": "Supported timeline types can reconstruct an exact historical state from the nearest valid checkpoint plus subsequent deltas.",
      "dependencies": [
        "M-001",
        "M-005",
        "M-025",
        "M-028",
        "M-035",
        "M-037"
      ]
    },
    {
      "id": "M-055",
      "file": "M-055-knowledge-compilation-concept-graph-and-derived-views.md",
      "title": "M-055 - Knowledge Compilation, Concept Graph, and Derived Views",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Continuously compile raw sources and canonical memory into fast-access derived knowledge views such as concept pages, backlinks, indexes, digests, and graph-ready projections that agents and humans can consume without scanning the full corpus each time.",
      "acceptanceCount": 8,
      "firstAcceptance": "Incremental compilation updates only affected derived views after source or policy changes.",
      "dependencies": [
        "M-001",
        "M-005",
        "M-011",
        "M-018",
        "M-029",
        "M-033"
      ]
    },
    {
      "id": "M-056",
      "file": "M-056-markdown-vault-projection-and-filesystem-sync.md",
      "title": "M-056 - Markdown Vault Projection and Filesystem Sync",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Expose authorized knowledge as a markdown/filesystem-native vault projection for human and agent workflows while keeping canonical memory in governed storage.",
      "acceptanceCount": 7,
      "firstAcceptance": "Authorized compiled views and selected raw/derived artifacts can be projected to a local markdown vault.",
      "dependencies": [
        "M-014",
        "M-030",
        "M-033",
        "M-049",
        "M-055"
      ]
    },
    {
      "id": "M-057",
      "file": "M-057-knowledge-health-checks-and-repair-loops.md",
      "title": "M-057 - Knowledge Health Checks and Repair Loops",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Continuously audit compiled knowledge and related projections for integrity, freshness, completeness, and useful next-step repairs.",
      "acceptanceCount": 6,
      "firstAcceptance": "Health checks emit structured findings with severity, evidence, and affected scope.",
      "dependencies": [
        "M-005",
        "M-031",
        "M-043",
        "M-055",
        "M-056"
      ]
    },
    {
      "id": "M-058",
      "file": "M-058-derived-artifact-templates-and-deterministic-renderers.md",
      "title": "M-058 - Derived Artifact Templates and Deterministic Renderers",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Let agents generate graphs, reports, slide decks, maps, and other reusable artifacts from governed knowledge through predefined templates, rules, and renderer components instead of ad hoc one-off prompting.",
      "acceptanceCount": 7,
      "firstAcceptance": "Template registry supports reusable graph/report/slide/table/artifact definitions with versioning and permissions.",
      "dependencies": [
        "M-014",
        "M-021",
        "M-037",
        "M-050",
        "M-055"
      ]
    },
    {
      "id": "M-059",
      "file": "M-059-hosted-external-memory-serving-and-creator-monetization.md",
      "title": "M-059 - Hosted External Memory Serving and Creator Monetization",
      "priority": "P1",
      "phase": "3 - Standalone Surfaces",
      "state": "Planned",
      "goal": "Let publishers sell or license curated portions of their memory as anymem-hosted protected external packages that remain under governed serving control and are consumable only through authenticated anymem API/SDK/MCP paths.",
      "acceptanceCount": 8,
      "firstAcceptance": "A publisher can publish a curated memory slice as an anymem-hosted `protected_external` package without exposing raw payloads to buyers.",
      "dependencies": [
        "M-014",
        "M-017",
        "M-041",
        "M-052",
        "M-053"
      ]
    },
    {
      "id": "M-060",
      "file": "M-060-atomic-memory-units-and-normalization-pipeline.md",
      "title": "M-060 - Atomic Memory Units and Normalization Pipeline",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Normalize incoming memory into self-contained atomic units so retrieval does not depend on ambiguous fragments, unresolved references, or inconsistent time/entity representation.",
      "acceptanceCount": 6,
      "firstAcceptance": "Canonical memory can represent normalized atomic units such as facts, events, preferences, instructions, and observations.",
      "dependencies": [
        "M-001",
        "M-005",
        "M-018",
        "M-031",
        "M-037"
      ]
    },
    {
      "id": "M-061",
      "file": "M-061-query-type-routing-and-retrieval-modes.md",
      "title": "M-061 - Query-Type Routing and Retrieval Modes",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Route retrieval through different strategies based on what kind of memory task the caller is actually performing, instead of treating every query the same.",
      "acceptanceCount": 7,
      "firstAcceptance": "Retrieval mode selection is explicit, inspectable, and overrideable through policy where needed.",
      "dependencies": [
        "M-011",
        "M-015",
        "M-021",
        "M-024",
        "M-060"
      ]
    },
    {
      "id": "M-062",
      "file": "M-062-workflow-edge-graph-and-handoff-memory.md",
      "title": "M-062 - Workflow Edge Graph and Handoff Memory",
      "priority": "P1",
      "phase": "1 - Governance Core",
      "state": "Planned",
      "goal": "Model linked work memory so agents and humans can retrieve not only isolated records, but also the relationships between tasks, reviews, revisions, assignments, fixes, and outcomes.",
      "acceptanceCount": 6,
      "firstAcceptance": "Canonical memory model supports typed directed workflow edges between records.",
      "dependencies": [
        "M-001",
        "M-005",
        "M-010",
        "M-026",
        "M-060"
      ]
    },
    {
      "id": "M-063",
      "file": "M-063-memory-to-training-export-pipeline.md",
      "title": "M-063 - Memory-to-Training Export Pipeline",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Export curated, provenance-clean, approval-safe memory and workflow traces into training-ready datasets that can be used for fine-tuning or other downstream adaptation workflows.",
      "acceptanceCount": 6,
      "firstAcceptance": "Export pipeline can produce versioned training datasets from selected memory scopes, workflow traces, and review chains.",
      "dependencies": [
        "M-005",
        "M-030",
        "M-046",
        "M-052",
        "M-062"
      ]
    },
    {
      "id": "M-064",
      "file": "M-064-autoresearch-memory-optimization-harness.md",
      "title": "M-064 - Autoresearch Memory Optimization Harness",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Continuously evaluate and improve memory-system architecture, retrieval routing, prompt/data-pipeline behavior, and compilation strategies through replayable experiment loops rather than manual tuning alone.",
      "acceptanceCount": 6,
      "firstAcceptance": "Experiment harness can replay benchmark and real workload slices against candidate memory-system variants.",
      "dependencies": [
        "M-015",
        "M-035",
        "M-055",
        "M-057",
        "M-061"
      ]
    },
    {
      "id": "M-065",
      "file": "M-065-wake-up-and-bootstrap-context-profiles.md",
      "title": "M-065 - Wake-Up and Bootstrap Context Profiles",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Provide tiny always-loadable bootstrap context packets so agents can orient quickly on session start or reconnect without paying the cost of broad retrieval every time.",
      "acceptanceCount": 6,
      "firstAcceptance": "Bootstrap packets are deterministic, small, and cheap enough for frequent local/offline use.",
      "dependencies": [
        "M-021",
        "M-024",
        "M-034",
        "M-049",
        "M-055"
      ]
    },
    {
      "id": "M-066",
      "file": "M-066-memory-topology-projection-and-navigation-graph.md",
      "title": "M-066 - Memory Topology Projection and Navigation Graph",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Generate derived navigation projections over memory so agents and humans can narrow retrieval quickly by project, person, topic, type, or other high-signal structure without making any single navigation metaphor canonical truth.",
      "acceptanceCount": 6,
      "firstAcceptance": "The system can build and update navigation projections from canonical memory and workflow graphs.",
      "dependencies": [
        "M-005",
        "M-055",
        "M-060",
        "M-062"
      ]
    },
    {
      "id": "M-067",
      "file": "M-067-lifecycle-capture-hooks-and-session-safeguards.md",
      "title": "M-067 - Lifecycle Capture Hooks and Session Safeguards",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Capture important memory at the right operational moments through explicit lifecycle hooks instead of relying only on manual writes or end-of-session reconstruction.",
      "acceptanceCount": 6,
      "firstAcceptance": "Hook contracts are explicit and usable by broker/runtime integrations.",
      "dependencies": [
        "M-003",
        "M-005",
        "M-014",
        "M-018",
        "M-065"
      ]
    },
    {
      "id": "M-068",
      "file": "M-068-compact-context-dialects-for-offline-agents.md",
      "title": "M-068 - Compact Context Dialects for Offline Agents",
      "priority": "P1",
      "phase": "2 - Broker + Tooling",
      "state": "Planned",
      "goal": "Offer optional compact derived context forms for offline or local agents where token budget and transport cost matter, while keeping canonical evidence and APIs as the authority.",
      "acceptanceCount": 6,
      "firstAcceptance": "Compact dialect generation is optional, profile-driven, and reproducible.",
      "dependencies": [
        "M-021",
        "M-024",
        "M-049",
        "M-055",
        "M-065"
      ]
    }
  ],
  "phaseDescriptions": {
    "0 - Planning": {
      "intent": "Lock contracts and data foundations before implementation.",
      "testable": "Schema and contract validation artifacts are reviewable, and feature ownership boundaries are fixed."
    },
    "1 - Governance Core": {
      "intent": "Build memory, approvals, policy, retrieval, and safety primitives.",
      "testable": "You can execute governed memory flows end-to-end: ingest, rank, approve, trace, and explain inclusion decisions."
    },
    "2 - Broker + Tooling": {
      "intent": "Add live transport, local broker, hybrid RAG acceleration, and enterprise hardening.",
      "testable": "You can test low-latency pre-decision retrieval, replayable event streams, and enterprise controls under load."
    },
    "3 - Standalone Surfaces": {
      "intent": "Ship operational surfaces for day-to-day product use.",
      "testable": "You can manually operate the system through dashboard and admin workflows with production-like governance behavior."
    }
  }
};
