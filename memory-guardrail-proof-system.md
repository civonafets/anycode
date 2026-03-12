# memory, guardrail, and proof system

## purpose

This document describes a shared system for memory, guardrails, approvals, and proof in AI-assisted engineering work.

The baseline design assumes one organization, many projects, many users, shared audit requirements, and direct use of existing `Codex` and `Claude` subscriptions. The system is not a model-hosting product and not a token proxy. It is a governance and memory layer that sits around current coding tools so the work stays explainable, enforceable, portable, and reviewable.

The system has four visible surfaces:

- a shared backend
- a local broker on each developer machine
- a web dashboard for history, memory, policy, and trace
- a mobile inbox for approvals, edits, and chat around proposed changes

## design goals

- Keep the source of truth for memory, guardrails, approvals, and trace inside the organization's own system.
- Work with existing `Codex CLI`, `Codex app`, and `Claude Code` usage without forcing API-only billing.
- Separate contextual memory from enforceable guardrails.
- Require proof for risky work and preserve a durable trail of why decisions were made.
- Support non-binary approvals: approve, reject, edit, rewrite, ask, escalate, or add new rules.
- Make the system portable across tools and vendors.
- Allow strict enforcement for CLI-based tools while still supporting app-based tools.
- Keep storage boring and inspectable: `Postgres` plus `pgvector` in the baseline design.
- Make mobile approval useful enough for real work, not just quick yes/no taps.

## non-goals

- Replacing `Codex`, `Claude`, or other coding tools with a custom IDE.
- Acting as the mandatory runtime for all model tokens.
- Designing a public multi-tenant SaaS in v1.
- Using memory retrieval as the only enforcement mechanism.
- Defining final SQL schemas or API payloads in this document.
- Building native mobile apps in v1.
- Solving full enterprise identity, billing, or procurement workflows in this document.

## system shape

The baseline deployment is `shared backend + local brokers`.

The shared backend stores canonical state for memory, policy, approval records, trace, and proof. Each developer machine runs a local broker that connects tools to that shared backend. The local broker is where tool integration, local enforcement hooks, memory retrieval calls, and trace submission happen.

This topology is the baseline because it preserves direct use of existing tool subscriptions while still giving the organization one shared memory and governance plane.

The backend is not the model provider. It does not need to proxy every token. The model may still run through the user's existing `Codex` or `Claude` session. The governance system wraps the workflow, not the billing relationship.

## core subsystems

### shared backend

The shared backend owns canonical state and shared workflow state.

It includes:

- memory service
- policy and procedure service
- approval and conversation service
- trace and proof service
- notification service
- dashboard API
- auth and RBAC layer

### local broker

Each developer machine runs a local broker.

The local broker:

- exposes local MCP and HTTP interfaces
- launches or wraps supported tools
- fetches memory before work starts
- resolves policy checks before privileged actions
- submits proposals, approvals, and proof
- emits trace events to the shared backend
- keeps local tool usage connected to shared governance

### dashboard

The dashboard is the web UI for inspection and control.

It includes:

- memory browser
- tag registry
- policy and procedure browser
- approval queue
- trace explorer
- proof viewer
- conversation history for approvals
- analytics for memory usage, proposals, and decisions

### mobile inbox

The mobile inbox is a focused surface for pending approvals.

It is a web inbox or PWA in v1. It supports:

- push notifications
- approval detail view
- editing proposed changes
- chat with the agent or workflow before deciding
- escalation and reassignment
- access to related trace, memory, and policy context

## data model at a high level

The system has three primary data domains and one supporting workflow domain.

### primary domains

- `memory`
- `guardrails / policy / procedure`
- `trace / proof`

### supporting workflow domain

- `approval and conversation`

The important boundary is this:

- memory is contextual
- guardrails are enforceable
- trace is durable history
- approvals are editable workflow state

Memory is not the enforcement layer. Policy cannot live only in memory. Trace survives memory edits, merges, renames, or deletions.

## memory

Memory is the contextual layer the agent reads before and during work.

It includes:

- global memory
- project-scoped memory
- approved tags
- memory proposals
- memory updates
- retrieval metadata

Global memory holds things that carry across projects, such as recurring engineering decisions, review habits, reusable patterns, common failure notes, and organization-wide working preferences.

Project-scoped memory holds local constraints, domain-specific exceptions, sharp edges, integration notes, and decisions that only make sense inside one codebase.

Memory is retrieved, ranked, and attached to work. It can be proposed, updated, merged, renamed, or retired. It is not immutable.

Memory records should track enough metadata to explain why they were pulled and how they were used, including:

- scope
- tags
- recency
- access count
- update count
- linked projects
- linked tools or agents
- retrieval score inputs
- status

Agents may read memory freely. Agents may propose memory changes. Agents do not silently mutate canonical memory and treat that as completed work.

## guardrails and procedures

Guardrails and procedures are the enforceable layer.

They include:

- required steps
- forbidden actions
- approval boundaries
- proof requirements
- escalation rules
- editable procedures and rule definitions

This layer is not fuzzy. It is explicit.

Examples:

- destructive actions require approval
- customer-facing sends require review and proof
- schema changes require rollback evidence
- production changes require specified checks before completion
- memory writes for protected scopes require approval

Guardrails may reference memory, but must not depend on memory retrieval alone. If a rule is mandatory, it must live in policy or procedure state, not only in retrieved context.

Procedures are editable. A pending approval may update the procedure itself, create a new rule, tighten a proof requirement, or widen an approval boundary.

## trace and proof

Trace and proof are the durable record of what happened and why.

They include:

- retrieved memory references
- policy hits
- checks run
- approvals and approval edits
- rejected paths
- proof artifacts
- immutable event history

Proof is the evidence attached to a decision or completion claim. That may include:

- test results
- command output
- screenshots
- diff references
- evaluator output
- linked artifacts
- human comments
- tool logs

Trace is append-only. Memory may change later. Policy may evolve later. Trace stays.

That separation is required so a later audit can still answer:

- what memory was used at the time
- what policy applied at the time
- what the agent proposed
- what the human edited or approved
- what evidence existed when the action was allowed

## approvals and mobile inbox

Approvals are not boolean. A pending approval is an editable workflow object.

Supported outcomes include:

- approve as proposed
- reject
- approve with edits
- rewrite the memory entry
- rewrite the rule or procedure
- create a new rule
- request more proof
- ask follow-up questions in chat
- defer
- escalate

The mobile flow is:

1. a notification arrives on the phone
2. the user opens the pending item in the mobile inbox
3. the inbox shows the proposal, the reason, related memory, related rule, and trace
4. the user can chat with the agent before deciding
5. the user can edit the proposal or the rule directly
6. the user can approve, reject, change, defer, or escalate from the same screen

Approval should block the privileged action, not necessarily the entire workflow. Where safe, the agent may continue non-privileged work in parallel while waiting.

Every approval record should carry:

- proposal payload
- human-readable reason
- related memory references
- related policy references
- linked trace
- linked proof artifacts
- conversation thread
- resulting disposition

## local broker

The local broker is the tool-facing control point on each machine.

It handles:

- local tool integration
- memory retrieval calls
- policy checks before privileged actions
- proposal submission
- proof submission
- trace emission
- local wrappers for CLI tools
- MCP and HTTP interfaces for compatibility

It also:

- connects local tool sessions to the shared backend
- preserves direct use of existing tool subscriptions
- applies local enforcement hooks before risky actions
- provides fallback behavior if one integration surface is weaker than another

The broker is the enforcement and routing layer. It is not the model provider.

In the baseline design, the broker should be able to:

- inject or expose the core skill to the tool
- fetch scoped memory before starting work
- request policy state relevant to the current task
- capture proposed writes to memory or procedure state
- stop privileged actions at approval boundaries
- record proof and trace without relying on the model to remember to do it manually

## tool integration

### Codex CLI

`Codex CLI` is a primary integration target.

Recommended model:

- launch through a local wrapper
- wrapper connects the session to the broker
- broker exposes memory, policy, approval, and trace interfaces
- core skill tells the agent how to use those interfaces

In this mode, `Codex CLI` can:

- retrieve memory before planning or editing
- respect hard guardrail checks before privileged actions
- submit memory proposals and rule proposals
- attach proof artifacts
- emit trace events through the broker

This path supports the strongest enforcement because the wrapper controls session startup and local tool invocation.

### Claude Code

`Claude Code` is also a primary integration target.

Recommended model:

- launch through a local wrapper
- wrapper registers broker endpoints and shared skill behavior
- broker handles memory retrieval, policy checks, proof submission, and trace

This integration should behave the same way as `Codex CLI` at the governance level:

- memory is loaded through the broker
- hard rules are checked before privileged actions
- approvals and proposals flow through the shared backend
- proof and trace are captured outside the model's own session memory

The user continues using the existing `Claude` subscription and local authentication flow.

### Codex app

`Codex app` is supported, but with a weaker control surface than CLI tooling.

Recommended model:

- use the shared core skill
- expose broker-accessible interfaces where the app can reach them
- rely more on guided behavior than on wrapper-enforced behavior

`Codex app` can still:

- read memory through the shared workflow
- submit proposals
- participate in trace and proof workflows
- respect approval boundaries where the integration surface allows it

Its limits should be stated clearly in the implementation:

- app-based sessions usually provide weaker startup control than CLI wrappers
- some local enforcement may need to happen outside the app session itself
- proof and trace capture may rely more on broker-side adapters than on direct tool interception

The design must not assume API-only billing or require replacing the user's existing subscription.

## skill strategy

The baseline recommendation is one shared core skill for this system.

That skill should teach the agent how to:

- fetch relevant memory before acting
- distinguish memory from enforceable policy
- request policy checks before privileged actions
- submit proposals for memory and rule changes
- attach proof when claiming work is done
- stop at approval boundaries
- use trace and approval context when explaining decisions

The skill is not the source of truth.

The rules remain canonical in the backend. The skill gives the model the right behavior and vocabulary so it can use the system correctly.

Recommended structure:

- one shared core skill for memory, guardrails, approvals, and proof
- optional tool-specific addenda for `Codex CLI`, `Codex app`, and `Claude Code`
- wrappers and broker hooks for stronger guarantees on CLI tools

That means:

- backend policy remains canonical
- skills provide behavior guidance
- wrappers provide stronger guarantees
- tool-specific notes may exist, but the core workflow should stay shared

## portability and subscription model

The system is designed to stay portable across tools and vendors.

That means:

- memory stays in organization-controlled storage
- policy stays in organization-controlled storage
- trace stays in organization-controlled storage
- local brokers adapt tools to the same shared workflow
- the model vendor is not the owner of the workflow state

Existing subscriptions remain usable.

The baseline model is:

- users continue to use their `Codex` and `Claude` subscriptions directly
- the governance system wraps the workflow through brokers, skills, wrappers, and shared backend state
- no baseline requirement exists for routing all tokens through a central API proxy

A future API-managed mode may be added later, but it is not required for this system to work.

## example flows

### 1. normal coding task with memory retrieval

- wrapper starts the tool through the local broker
- broker loads relevant global and project memory
- broker loads matching guardrails and proof requirements
- agent plans and edits with that context
- trace records retrieved memory and policy hits
- proof is attached before the task is marked complete

### 2. agent proposes a new memory tag

- agent encounters a recurring case not covered by the current tag set
- agent proposes a new tag with reason and linked trace
- proposal is stored in the shared backend
- mobile and dashboard inbox receive a pending item
- approver approves, edits, rewrites, or rejects the tag proposal
- final result is written to canonical memory state and trace

### 3. approval from mobile with chat and edits

- a risky change triggers an approval boundary
- phone notification opens the mobile inbox item
- user sees proposal, rule, memory references, and trace
- user asks follow-up questions in chat
- user edits the proposed memory update directly
- user approves the edited version
- trace records the edit, approval, and resulting change

### 4. rule update instead of simple approve/reject

- agent hits a procedure that is now too weak or outdated
- instead of only asking to proceed, the agent proposes a rule change
- approver rewrites the rule from mobile or dashboard
- updated rule becomes canonical policy
- current action is re-evaluated against the new rule
- trace records both the rule change and the resulting action

### 5. hard guardrail blocks a risky action until proof exists

- agent reaches a production-affecting step
- policy requires rollback proof and test evidence
- broker refuses to release the action without proof
- agent attaches required evidence
- approver reviews proof and allows the action
- trace records the block, the proof, and the release decision

### 6. trace explains a decision after memory changed later

- a later investigation looks at an earlier action
- the relevant memory entry has since been merged or rewritten
- trace still shows the memory references, policy hits, proposal, approval, and proof that existed at the time
- audit remains possible without reconstructing model session state from scratch

### 7. vendor or tool switch without losing system continuity

- a team moves one workflow from `Claude Code` to `Codex CLI`
- local wrappers change, but backend memory, policy, approvals, and trace stay the same
- the shared core skill still describes the same behavioral contract
- governance continuity survives the tool change

## open extension points

The baseline design leaves room for later additions without changing the core model.

Examples:

- optional dedicated vector index such as `Qdrant` for larger-scale retrieval
- native mobile apps
- additional tool adapters
- richer analytics and simulator views for policy changes
- automated policy testing against historical trace
- multi-organization tenancy
- offline local queueing for brokers

Any future extension should preserve the baseline rules:

- `Postgres` remains the source of truth unless explicitly replaced by a migration plan
- hard policy does not collapse into memory retrieval
- trace remains durable and append-only
- existing subscriptions can still be used directly unless a separate API-proxy mode is intentionally chosen
