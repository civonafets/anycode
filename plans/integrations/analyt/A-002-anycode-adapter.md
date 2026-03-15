# A-002 - Analyt Adapter for anycode

## Goal
Integrate anycode workflow surfaces in Analyt while preserving anycode->anymem API boundary.

## Acceptance Criteria
- Analyt can launch anycode tooling surfaces with tenant context.
- anycode continues to consume anymem through public contracts only.
- Anycode remains independently operable outside Analyt.

## Dependencies
- `C-001`, `C-002`, `C-004`, `A-001`
