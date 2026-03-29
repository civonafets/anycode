# M-002 - Shared Backend Service Skeleton

## Status
- Priority: `P0`
- Phase: `1 - Governance Core`
- State: `In Progress`

## Goal
Implement stable anymem APIs for auth tenancy context, memory/retrieval, policy, approvals, trace/proof, and package lifecycle.

## Acceptance Criteria
- APIs are standalone and do not require Analyt services.
- Contracts are tenancy-safe for self-host and future SaaS.
- Export/install/activation endpoints are present and auditable.
- Runtime bootstrap endpoint exists for local broker session bootstrapping and is owned by anymem, not by wrappers.
- Decision-context endpoint exists and returns policy-aware pre-action context contract for agent/tool consumers.
- API contracts are suitable for external product consumers (`anycode`, adapters).
- Request context contract includes actor identity, workspace context, tool/session identifiers, and effective activation state.
- Mutating APIs support idempotency keys where duplicate submission risk exists.
- Long-running flows (`approval`, `proof`, `package export`, `sensitivity scan`) have explicit async resource semantics plus live event delivery.
- First-party UI contract uses ordered replayable `SSE` for fresh state.
- External integration contract supports webhook delivery with signing, retry, and idempotent event identifiers.
- Versioning and deprecation policy are documented for external consumers.
- Failure semantics are explicit enough that consumers can distinguish retryable, terminal, and authorization/scope failures.
- Degraded-mode semantics are explicit per action class and consistent with policy engine outputs.

## Dependencies
- `M-001`, `M-009`, `M-014`, `M-016`
