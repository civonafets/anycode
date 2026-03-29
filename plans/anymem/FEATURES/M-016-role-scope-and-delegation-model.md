# M-016 - Role, Scope, and Delegation Model

## Status
- Priority: `P0`
- Phase: `0 - Planning`
- State: `Planned`

## Goal
Define who can publish, install, embed, activate, approve, and delegate across workspace, user, and session scopes.

## Authorization Model
- Permission system: granular action permissions are canonical.
- Role system: roles are named bundles of permissions; new roles are created by assigning permissions rather than changing schema.
- Scope levels: workspace, user, session.
- Precedence: session overrides user, user overrides workspace, except no narrower scope may grant a permission forbidden at a broader scope by policy.

## Required Permission Families
- Memory read/search/expand
- Memory create/update/archive
- Policy read/update/publish
- Approval view/participate/disposition
- Proof submit/view
- Package publish/install/embed/revoke/update/toggle
- Role and permission administration
- Delegation grant creation and delegation approval
- External principal registration, rotation, and disable controls

## Initial Permission Names
- `memory.records.read`
- `memory.records.create`
- `memory.records.update`
- `memory.records.archive`
- `memory.search`
- `memory.expand`
- `policy.read`
- `policy.update`
- `policy.publish`
- `approval.read`
- `approval.message.create`
- `approval.disposition.approve`
- `approval.disposition.reject`
- `approval.disposition.edit`
- `approval.disposition.rewrite`
- `approval.disposition.request_proof`
- `approval.disposition.defer`
- `approval.disposition.escalate`
- `proof.read`
- `proof.submit`
- `package.publish`
- `package.install_external`
- `package.embed`
- `package.revoke`
- `package.update`
- `package.toggle`
- `role.read`
- `role.write`
- `permission.assign`
- `delegation.create`
- `delegation.approve`
- `principal.read`
- `principal.write`
- `principal.rotate`
- `principal.disable`

## Initial Built-In Role Bundles
- `owner`: all permissions
- `admin`: all except role administration and owner-only destructive workspace actions
- `approver`: approval read, approval message create, all approval disposition permissions, proof read, package install/toggle
- `member`: memory read/search/expand, approval read, proof submit, package install external where workspace policy allows
- `viewer`: read-only memory, policy, approval, and proof access

## Delegation Rules
- Delegation grants are explicit, time-bounded, and scope-bounded.
- Delegation cannot create permissions the delegating principal does not already hold.
- Delegation approval is required when workspace policy marks the delegated permission family as sensitive.
- Every delegated action records both delegator and acting delegate in trace.

## Acceptance Criteria
- Publish/install/embed/toggle/approve permissions are explicit.
- Scope precedence is deterministic across workspace, user, and session levels.
- Delegated actions and approvals preserve actor provenance.
- The model works in personal/self-host and multi-user SaaS-safe modes.
- Personal/self-host mode uses the same permission model with a default fully privileged owner role.
- Roles are composable from permission bundles without schema changes.
- Every sensitive action records both acting principal and delegated-on-behalf-of principal when delegation exists.
- Initial permission names and built-in role bundles are defined well enough for implementation to start without inventing authorization vocabulary.
- External service principals and delegated user sessions are first-class identities with auditable mapping to actions.

## Dependencies
- `M-001`, `M-009`
