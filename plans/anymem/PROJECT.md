# anymem Project (Canonical for anymem Track)

## Purpose
- Product: `anymem`
- One-line summary: Workflow-agnostic memory and governance platform for auth-aware memory retrieval, policy, approvals, trace/proof, and memory package sharing.

## Scope
### In scope
- Multi-workspace auth tenancy context.
- Memory and retrieval domains.
- Retrieval relevance controls (recency decay, bounded usage reinforcement, suppression, and intent-aware selection).
- Manual memory authoring and preference profile capture.
- Generic policy/procedure evaluation.
- Deterministic preference precedence and conflict resolution.
- Canonical decision-context contract for agent/tool execution.
- Degraded-mode action policy for memory/policy outages.
- Generic approvals and approval conversation flows.
- Append-only trace/proof.
- External agent identity model (service principal + delegated session).
- Memory lifecycle governance (decay, archival, revalidation).
- Non-destructive retention by default (lifecycle affects ranking/visibility, not automatic deletion).
- Concurrent memory write conflict resolution.
- Outcome feedback to governed memory proposal loop.
- Context packing and budget policies for model and tool integrations.
- Pre-decision latency SLOs and regression guardrails.
- First-class secondary use case: hybrid retrieval integration for external full-document/vector corpora through governed gateways.
- Retrieval-plan-first hybrid gateway for RAG acceleration (agents ask anymem where to look before external fetch).
- Memory interchange and portability contracts for cross-tool and cross-vendor movement.
- Ingestion trust scoring and anti-poisoning controls.
- Connector ingestion and provenance-preserving sync model.
- Model/agent behavior profiles for consistent cross-model context rendering.
- Counterfactual replay and simulation for memory/policy rollout safety.
- Persona/domain isolation boundaries with controlled bridging.
- Multimodal memory support (image/audio/video artifacts plus derived representations).
- Enterprise IAM federation and provisioning.
- Hard tenant isolation and BYOK encryption domains.
- HA/DR backup/restore guarantees with tested recovery objectives.
- Tenant cost/capacity governance controls.
- Ops/SIEM export and incident-forensics support.
- Policy/memory staged rollout and automatic rollback controls.
- API/SDK contract stability program with migration tooling.
- Admin control plane for tenant operations and emergency controls.
- End-to-end data classification, DLP, and redaction controls across ingest/retrieval/export/event flows.
- Legal hold and eDiscovery workflows with chain-of-custody evidence export.
- Prompt-injection and context-attack resilience with taint-aware context assembly.
- Deployment profile parity for SaaS, self-hosted, and air-gapped environments.
- Memory influence explainability with `why included` / `why excluded` attribution.
- Checkpointed delta timelines and replay compression for traces, sessions, mutable artifacts, and other high-churn histories.
- Precompiled knowledge views (concept pages, indexes, backlinks, digests, and graph-ready projections) for fast broad agent access.
- Hierarchical knowledge layers for fast recall:
  - user-curated compact knowledge views for common/high-value queries
  - automatically synthesized observations from accumulated evidence
  - raw evidence/facts for grounding and verification
- Markdown/filesystem vault projections as a supplemental human and agent working surface.
- Automated knowledge health checks, repair suggestions, and compilation-quality audits.
- Deterministic derived artifact generation from governed knowledge through reusable templates/components/renderers.
- Benchmark-native long-horizon memory evaluation for million-plus-token regimes where context stuffing is non-viable.
- Policy-as-code validation and promotion gates with replay/canary requirements.
- Sensitive personal-memory guardrails and redaction/consent controls.
- Memory package export/install/activation controls.
- Package trust lifecycle, publisher identity, revocation, and update policy.
- Protected proprietary memory packages with entitlement-gated access and raw-payload protection modes.
- First-party marketplace/catalog support for memory package discovery, distribution, and commercial install flows.
- anymem-hosted protected external memory serving for commercial publisher packages.
- Usage metering, seller analytics, and payout-ledger inputs for marketplace memory commerce.
- Stable external API/SDK contract for product consumers.
- Retrieval evaluation and benchmark framework.
- Role/scope/delegation model for publish/install/embed/toggle/approve actions.
- Canonical local broker runtime for strong-enforcement integrations.
- Events-first delivery for long-running state changes and live UI updates.
- Ordered first-party `SSE` stream with resumable replay semantics.
- Canonical local IPC protocol for wrappers and other strong-enforcement local clients.
- Workspace publisher key management for package signing and verification.
- Optional agent-facing MCP adapter layered on top of canonical APIs/SDKs.
- Standalone surfaces for governance operations.

### Out of scope
- Coding-tool wrappers and coding-specific orchestration behavior.
- Coding-specific policy packs tied to CLI wrappers.

## Boundary Contract
- `anymem` publishes stable API/SDK contracts for consumers.
- Consumers (including `anycode`) use public contracts only.
- No direct DB coupling from consumer products.
- API contract includes auth propagation, idempotency, async job behavior, versioning, and failure semantics.
- First-party surfaces consume ordered `SSE` subscriptions from `anymem`; third-party integrations use webhook delivery or explicit event consumption contracts.
- Strong-enforcement local clients use the official local client SDK over the canonical broker IPC protocol.
- Optional MCP adapters stay above the canonical REST/SDK contract and never replace it.

## Success Conditions
- Can run standalone.
- Can be embedded by suite adapters.
- Supports SaaS-safe tenancy model from day 1.
- Has a stable product boundary that can be extracted to its own repo without redefining runtime contracts.
- Every delivered feature includes automated tests and/or evaluation coverage appropriate to its risk profile.
- Supports granular permission-based RBAC without hard-coding a fixed small role set.
- Supports live-first UI freshness without requiring first-party polling loops as the primary update mechanism.
- Supports long-term growth of personal and shared memory without quality collapse through lifecycle and precedence controls.
- Preserves long-horizon memory utility: old memories remain durable while scoring favors recent and repeatedly reinforced context.
- Prevents stale-topic over-personalization through explicit recency, suppression, and distraction regression controls.
- Supports reliable pre-decision behavior under partial failure through explicit degraded-mode policy.
- Supports first-class hybrid deployments where anymem governs decisions while external vector/doc systems serve large corpus retrieval.
- Supports high-throughput hybrid retrieval with measurable warm-cache gains and bounded degraded behavior.
- Supports portable memory flows and multimodal evidence without sacrificing governance/auditability.
- Supports employee-only and commercially licensed proprietary memory distribution with fail-closed entitlement enforcement.
- Supports marketplace-ready publisher distribution without forcing protected packages to expose raw memory payloads to buyers.
- Supports creators earning money from curated protected memory packages through anymem-hosted serving paths without exposing raw payloads to buyers.
- Supports API/SDK/MCP access to hosted external memory only for principals authenticated and governed through anymem, with explicit external-source labeling and metering.
- Supports enterprise operations with strong identity, isolation, resilience, and admin controls.
- Supports enterprise AI safety expectations with DLP, legal hold, and context-attack defenses.
- Supports auditable decision explainability and safe policy promotion across deployment profiles.
- Supports compressed replay-friendly history for mutable high-churn state without making delta logs the canonical source for memory retrieval or policy evaluation.
- Supports fast broad knowledge access through precompiled summaries, indexes, and concept views without assuming agents receive the full raw memory corpus in every context window.
- Supports BEAM-class long-horizon workloads through selective retrieval, compact synthesized knowledge layers, and anti-context-stuffing defaults.
- Supports evidence escalation: when confidence is low, decision risk is high, or policy demands it, anymem expands from compiled knowledge to raw supporting evidence automatically.
- Supports memory-level compression controls so explicitly critical records can be marked as never-compress, verbatim-required, or always-include for eligible workflows.
- Supports markdown-native local workflows and Obsidian-style vault usage as a projection surface without making markdown the canonical authority.
- Supports reusable graph/report/slide/artifact generation from governed knowledge through predefined templates and components.

## Delivery Rule
- A feature is not considered complete until its required tests are added and passing.
- Tests serve two purposes: proof that the feature works now, and regression protection for future changes.
- Ranking/retrieval features must also include replayable evaluation or benchmark coverage where correctness is not binary.
- Phase completion requires a recorded proof bundle before moving to the next phase.
- anymem phase proof bundle must include:
  - passing unit/integration/regression suites for all in-phase deliverables
  - replayable evaluation outputs for retrieval/ranking changes
  - performance checks for hot paths introduced or modified in the phase (API latency, retrieval latency, event stream stability, broker-path overhead when applicable)
