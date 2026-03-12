# Memory Guardrail Proof System

Standalone governance, memory, approval, and proof system for AI-assisted work.

## Current Implementation
- `apps/api`: standalone HTTP API skeleton
- `packages/contracts`: shared workflow and approval constants
- `tests`: built-in API tests using `node:test`

## Run
```bash
npm run dev:api
```

API defaults to `http://127.0.0.1:4010`.

## Manual Checks
```bash
curl http://127.0.0.1:4010/healthz
curl http://127.0.0.1:4010/api/v1/meta
```

## Tests
```bash
npm test
```
