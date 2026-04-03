# M-056 - Markdown Vault Projection and Filesystem Sync

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Expose authorized knowledge as a markdown/filesystem-native vault projection for human and agent workflows while keeping canonical memory in governed storage.

## Projection Model
- Vault projection is a derived working surface, not the canonical database.
- Projection profiles define folder structure, naming rules, frontmatter schema, backlink style, asset mirroring, and category/package visibility.
- Both read-only and governed write-back modes are supported.

## Acceptance Criteria
- Authorized compiled views and selected raw/derived artifacts can be projected to a local markdown vault.
- Projected markdown files carry stable identifiers, frontmatter metadata, backlinks, citations, and lineage references.
- Local asset copies preserve content hash and permission-aware visibility rules.
- Incremental sync updates only changed files and records deterministic rename/move behavior.
- Optional write-back mode requires diff capture, lineage preservation, and policy/approval gates before canonical mutation.
- Projection profiles support offline/self-hosted workflows without requiring SaaS-only infrastructure.
- Agents can use filesystem-native vault projections as a tool surface without bypassing canonical policy enforcement.

## Dependencies
- `M-014`, `M-030`, `M-033`, `M-049`, `M-055`

## Required Coverage
- Sync tests for create/update/move/delete projection events.
- Permission tests proving projected content respects workspace scope, sensitivity, and activation filters.
- Round-trip tests for governed write-back mode with diff lineage preservation.
- Regression tests for stable path generation and backlink integrity across incremental sync runs.
