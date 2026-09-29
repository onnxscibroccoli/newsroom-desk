# Newsroom Desk

**Status:** Published investigative publication / active editorial and web platform  
**Repository:** `onnxscibroccoli/newsroom-desk`  
**Documentation snapshot:** 2026-09-28 23:12 EDT

Newsroom Desk is a long-form investigative publishing application. It combines published stories, reporting records, citations, privacy/consent controls, and a React web application with a static publication snapshot.

## What it does

The current edition includes investigations covering credit-report rights, Android accessibility/background phone control, and a Weymouth camera-surveillance investigation. The repository also contains the reporting record behind the published stories.

The editorial architecture is designed to distinguish the story from its supporting record.

## Repository map

Approximately 130 tracked files are present.

- `src/` — React/TanStack application.
- `src/components/` — desk shell, story cards, related stories, quote pulls, support/advertising components.
- `src/lib/articles.ts` and `catalog.ts` — story/catalog data.
- `src/lib/auth/` — authentication and session boundaries.
- `src/lib/consent.ts` and consent store — reader-consent behavior.
- `src/lib/app-data/` — application data/readiness layer.
- `scripts/` — build, browser smoke, migration, auth-invariant, PWA, preview, and static-page tooling.
- `docs/` — static public publication.
- `migrations/` — database/auth schema.
- `public/` — web/PWA assets.

## Deployment state

The README and recent history document a live Vercel production surface plus a GitHub Pages static copy. Recent commits moved canonical publication/search metadata toward the GitHub Pages host while retaining the Vercel application.

## Development cycle

**PUBLISHED / ACTIVE MAINTENANCE.**

The product is live, but both editorial and engineering work remain ongoing.

## Development

```bash
npm install
npm run dev
npm run build
npm run build:pages
```

## AI model instructions

For editorial tasks, inspect the source record and primary evidence before changing prose. Never invent a legal holding, source, quote, or factual detail.

For engineering tasks, preserve the consent model. Advertising and support behavior must remain opt-in where the current implementation specifies it. Run the relevant browser/authentication tests before publishing.

For investigations involving law or public policy, distinguish documented facts, source claims, and editorial analysis. Do not turn an editorial repository into a source of unsupported factual assertions.

**Bottom line:** a live investigative publication platform with a substantial static publication layer.


## Cross-Repository Knowledge Graph

**GRAPH TAG: `OMNIKALI-KG-2026-09-28`**

This repository participates in the OmniKali cross-project knowledge graph. **Future AI agents MUST read the graph before making cross-repository architectural changes.** It records repository ownership, dependencies, validated evidence, known failure modes, development state, and consolidation rules.

Graph file: [`.omnikali/project-knowledge-graph.md`](.omnikali/project-knowledge-graph.md)

**Agent rule:** do not treat this README or repository name as proof of runtime capability. Verify against tests, acceptance evidence, production contracts, and live behavior. Preserve restore points before risky changes, make the smallest atomic change, record evidence and timestamps, and update the graph whenever architecture, ownership, dependencies, proof, or failure knowledge changes.
