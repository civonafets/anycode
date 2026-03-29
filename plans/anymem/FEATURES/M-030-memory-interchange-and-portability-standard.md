# M-030 - Memory Interchange and Portability Standard

## Status
- Priority: `P1`
- Phase: `2 - Broker + Tooling`
- State: `Planned`

## Goal
Define a versioned interchange format so memory can move across tools and vendors without lock-in.

## Acceptance Criteria
- Package format is schema-versioned and forward/backward compatibility rules are explicit.
- Export/import preserves provenance, scope, sensitivity labels, and trust metadata.
- Signed manifests and integrity checks are required for interchange artifacts.
- Compatibility and migration semantics are documented for schema upgrades.
- Conformance test suite validates round-trip import/export behavior.

## Dependencies
- `M-012`, `M-014`, `M-029`
