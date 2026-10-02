# Konfersi Docs

Source of truth for Konfersi's public documentation: product guides, account and billing help, and legal / trust pages, in **English** and **Bahasa Indonesia**.

This repository is content only. It is not a service:

- `konfersi-backend` fetches these files from git, renders them, and indexes them for search and the link graph. It serves them under `/v1/public/docs/*`.
- `konfersi-landing-page` displays them at `<landing>/docs/...`.

The repo can be made public or mirrored anywhere. Point the backend at the new location with `DOCS_SOURCE_BASE_URL`; nothing else changes.

## Layout

```
scalar.config.json     Scalar Docs 2.0 config — navigation.routes has one root per locale (/en, /id)
docs/<locale>/<section>/[<folder>/…]<page>.md
assets/                Images; reference them with a relative path (../../../assets/x.png)
stable-slugs.json      Slugs apps link to directly (mirrored by DOCS_PAGE in @konfersi/shared)
scripts/validate.mjs   Run by CI and before every push: npm run validate
```

**How slugs work**

- A page's slug is its route path without the locale root. For example, `/en` + `/legal` + `/terms` gives `legal/terms`, and the file is `docs/en/legal/terms.md`.
- The same slug in every locale forms a translation pair. The validator fails if a page exists in one language only.

**Sections, folders and overview pages**

- Top-level groups under a locale root are **sections** (the sidebar headings and docs home cards).
- Groups inside a section are **folders**, and can nest to any depth. The slug and file path follow the route: `/en` + `/using-konfersi` + `/organizations` + `/settings` → `using-konfersi/organizations/settings` → `docs/en/using-konfersi/organizations/settings.md`.
- A folder can have its own **overview page**: give the group a `filepath` of `docs/<locale>/<path>/index.md`. Its slug is the folder path (`using-konfersi/organizations`), and links to it use `…/organizations/index.md`. Sections can't have one.
- Breadcrumbs on each page show the section and the folders above it, linking folders that have an overview page.

```json
"/organizations": {
  "type": "group",
  "title": "Organizations",
  "filepath": "docs/en/using-konfersi/organizations/index.md",
  "children": {
    "/settings": { "type": "page", "title": "Organization settings", "filepath": "docs/en/using-konfersi/organizations/settings.md" }
  }
}
```

Keep a page's slug stable once published (apps and other sites may link to it); add new folders for new content rather than moving existing pages.

## Writing a page

```markdown
---
title: Privacy Policy
description: How PT Konfersi Metocean Climate Consultant collects, uses and protects personal data.
tags: [legal, privacy, uu-pdp]
related: [legal/terms, legal/cookies]
status: published
updated: 2026-09-27
---

Intro paragraph (no H1 — the title comes from frontmatter).

## First section
...
```

**Frontmatter fields**

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Shown as the page H1 and in search. |
| `description` | yes | One sentence, ≤ 200 chars; used for SEO and search snippets. |
| `status` | yes | `published` or `draft`. Drafts are never published: the backend drops them at sync, so they are not listed, searchable or reachable. Published pages and `stable-slugs.json` pages may not link to a draft. |
| `updated` | yes | `YYYY-MM-DD` of the last meaningful change. |
| `tags` | no | Inline list `[a, b]`; boosts search. |
| `related` | no | Slugs in the same locale; become explicit graph edges. |
| `review` | legal drafts | Clause IDs from the legal checklist still awaiting counsel / Direktur decision. |

Only this subset of YAML is supported: `key: value`, `key: [a, b]`, and indented `- item` lists.

**Markdown**

- GitHub-flavoured Markdown is supported: tables, task lists, strikethrough and autolinks.
- **Links between pages** use relative `.md` paths, for example `[Privacy Policy](../legal/privacy.md#your-rights)`. They are rewritten to docs URLs and become edges in the docs graph.
- **Callouts** follow Scalar's Markdown syntax:
  ```html
  <scalar-callout type="info">Short, helpful note.</scalar-callout>
  ```
  Types: `neutral`, `info`, `success`, `warning`, `danger`.
- **No other raw HTML.** The renderer escapes it, and the validator rejects it, because the repo may accept public contributions.
- **No environment hosts.** `localhost`, `*.dev|stg|uat.konfersi.com` are not allowed. Link to production hosts (`konfersi.com`, `app.konfersi.com`, …) only when the reader must visit them.

**Language**

- Write each page natively in both languages rather than translating word for word.
- Keep product names (Console, Lab, Mission Planning) in English in both.
- For legal pages, the Indonesian text prevails (see the language clause in the Terms).

## Publishing

`git.konfersi.com` is internal-only, so the backend (a Cloudflare Worker) reads the **public GitHub mirror**:
`DOCS_SOURCE_BASE_URL=https://raw.githubusercontent.com/Konfersi-Indonesia/konfersi-docs/{ref}`, where each
environment follows one ref through `DOCS_SOURCE_REF`: stg (and local dev) read the `stg` branch, uat reads `uat`,
and smoke + production read a **release tag** (`vX.Y.Z`), which the release pipeline sets.

Open PRs against `stg`; a merge publishes to the stg docs. `stg` → `uat` publishes to uat, `uat` → `main` prepares a
release, and publishing a Gitea release (tag `vX.Y.Z` on `main`) releases the docs to production.
CI does the rest (see below). An hourly cron re-syncs each backend from its `DOCS_SOURCE_REF` as a safety net.

## CI/CD

`.gitea/workflows/ci.yml` is self-contained: it needs no access to other (private) repos, so it keeps working once this repo is public.

| Job | When | What |
|---|---|---|
| `validate` | every push / PR | `node scripts/validate.mjs`: frontmatter, en↔id parity, links, allowed HTML, and that every `stable-slugs.json` page exists. |
| `publish` | push / dispatch on `stg`, `uat` or `main` | 1. Force-mirrors that branch to the same branch on GitHub over SSH with a repo-scoped deploy key (`scripts/mirror-push.sh`). 2. For each env in `DOCS_SYNC_ENVS_<BRANCH>`, runs `scripts/trigger-sync.mjs` with `DOCS_SYNC_BRANCH=<branch>` + `DOCS_SYNC_COMMIT=<sha>` (`scripts/sync-envs.sh`). Without that variable the branch is only mirrored. |
| `release` | Gitea release **published** with tag `vX.Y.Z` (or a dispatch on that tag) | 1. `scripts/check-release.mjs <tag>`: the tag must equal `v` + `package.json` version and every locale's changelog needs its `## X.Y.Z` entry; the tagged commit must be on `main`; `validate.mjs` runs again. 2. Mirrors `refs/tags/<tag>` to GitHub (same deploy key, no `--force`: a release tag never moves). 3. For each env in `DOCS_SYNC_ENVS_RELEASE`, runs `trigger-sync.mjs` with `DOCS_SYNC_TAG=<tag>`. Unset → a notice, the tag is only mirrored. Pre-releases are skipped with a notice. |

**Reverse pull (GitHub → Gitea):** `.gitea/workflows/pull-from-github.yml` runs hourly and on manual dispatch. It fast-forwards `stg` / `uat` / `main` from the public GitHub mirror when Gitea's tip is an ancestor of GitHub's (or the branch is missing on Gitea). Matching tips are skipped (loop break with `publish`). Diverged branches warn and are **not** force-pushed. Uses the same Alpine inline-git pattern as `ci.yml`; push auth is `${{ github.token }}` as oauth2. Optional var: `DOCS_GITHUB_MIRROR` (defaults to `Konfersi-Indonesia/konfersi-docs`).

Branch syncs are signed webhooks **pinned to the pushed commit**, so raw.githubusercontent.com's roughly 5-minute branch cache can't serve stale files. Release syncs are pinned to the tag (`refs/tags/<tag>`); only a backend whose `DOCS_SOURCE_REF` is a release tag accepts them, and it keeps a newer tag the release flow pinned until the release pipeline moves `DOCS_SOURCE_REF` up to it. Requests carry `X-Docs-Sync-Wait: 1`, so the job gets the sync result and fails if the sync fails, or if the backend shows a different docs version than the one it was pinned to. The script then smoke-tests nav, page, search and graph in both languages.

The apps check links in the other direction. The landing page and accounts CI run `scripts/check-docs-links.mjs` before every build. It fails the build if any `DOCS_PAGE` slug from `@konfersi/shared` is missing from this repo's published navigation, in any locale. So renaming a page that an app links to breaks the app's CI, not production.

**Configured on git.konfersi.com** (`platform/konfersi-docs` → Settings → Actions):

| Kind | Name | Value |
|---|---|---|
| secret | `GH_MIRROR_DEPLOY_KEY` | Private half of the **write** deploy key on the GitHub mirror (GitHub → repo → Settings → Deploy keys). |
| secret | `DOCS_WEBHOOK_SECRET_STG` (`_UAT`, `_SMOKE`, `_PRODUCTION`) | Random 64-hex value. `platform/konfersi-backend` must hold the **same** value under the same name. |
| variable | `DOCS_GITHUB_MIRROR` | `Konfersi-Indonesia/konfersi-docs` |
| variable | `DOCS_SYNC_ENVS_STG` | `stg`: envs that follow the `stg` branch |
| variable | `DOCS_SYNC_ENVS_UAT` | `uat`: envs that follow the `uat` branch (unset = mirror only) |
| variable | `DOCS_SYNC_ENVS_MAIN` | envs that follow `main` (normally unset: production follows release tags) |
| variable | `DOCS_SYNC_ENVS_RELEASE` | envs that follow release tags, e.g. `production` (and `smoke`); unset = the tag is only mirrored |
| variable | `DOCS_API_BASE_STG` (`_UAT`, `_SMOKE`, `_PRODUCTION`) | Backend origin reachable from CI and not behind Cloudflare Access, e.g. `https://konfersi-backend-stg.konfersi-indonesia.workers.dev` |

**Backend side** (`platform/konfersi-backend` CI, the stg/uat deploy steps):

1. Applies D1 migrations, including the docs tables and FTS.
2. Deploys.
3. `wrangler secret put DOCS_WEBHOOK_SECRET` from `DOCS_WEBHOOK_SECRET_<ENV>`.
4. `npm run docs:sync`: re-indexes and smoke-tests, so docs rendering, search and indexing changes go live with the deploy.

A missing secret fails the deploy **before** anything is deployed.

**Frontends** (landing page and accounts): before every build, CI runs:

- `check-required-env.mjs .env.<mode>`: every required `VITE_*` value, including `VITE_DOCS_URL`, must be present, https and not localhost.
- `check-docs-links.mjs`: described above.

**Manual operations**

- **Force a rebuild:** `POST <api>/v1/admin/docs/sync?force=1` (admin session), optionally `&ref=<sha|vX.Y.Z>`.
- **Re-run from a laptop:** `DOCS_API_BASE=… DOCS_WEBHOOK_SECRET=… DOCS_SYNC_BRANCH=stg node scripts/trigger-sync.mjs` (the branch that env's `DOCS_SOURCE_REF` names), or `DOCS_SYNC_TAG=vX.Y.Z` for an env that follows release tags.
- **Re-run a release:** dispatch the workflow on the tag (`refs/tags/vX.Y.Z`); mirroring an unchanged tag is a no-op.
- **Rotate the webhook secret:** update `DOCS_WEBHOOK_SECRET_<ENV>` in both repos, redeploy the backend, then re-run `publish`.
- **Rotate the mirror key:** add a new write deploy key on GitHub, replace `GH_MIRROR_DEPLOY_KEY`, then delete the old key.
- **Pull from GitHub:** Actions → **Pull from GitHub** → Run workflow (or wait for the hourly cron).

## Legal pages

The `legal/*` pages are drafted from the facts in the internal "TnC / legal checklist" and company profile. They are published as their initial version (effective 27 September 2026) and will be enriched over time.

- Apps link to them (`stable-slugs.json`), so they must stay `status: published`; the validator fails otherwise.
- Draft a substantial rewrite on a branch. When it is ready, bump `updated`, update the effective-date callout, and note the change in the changelog.

## Versions

The release number is `version` in `package.json` (`MAJOR.MINOR.PATCH`). The backend reads it at sync and the docs
sidebar shows the resulting **docs version**, with a link to the changelog:

| Environment follows | Docs version shown | Example |
|---|---|---|
| a branch (stg, uat), synced by CI / webhook | `<version>+<short commit>` | `1.4.0+0123abc` |
| a release tag (smoke, production) | exactly the tag | `v1.4.0` |
| a branch read with nothing pinned (manual sync without a ref) | `<version>` | `1.4.0` |

When the backend has `DOCS_SOURCE_COMMIT_URL` (the mirror's commit URL with `{ref}`), the version links to that commit or tag.

Release tags are **`vX.Y.Z`** (no prefix, no suffix) and must equal `v` + `package.json` version. To release:

1. Bump `version` in `package.json`: patch for fixes and wording, minor for new pages or sections, major for restructures or renamed slugs.
2. Add a `## <version> — <date>` entry at the top of `docs/<locale>/releases/changelog.md`, in every locale. The validator fails if the current version has no entry.
3. Merge to `stg` (stg docs), `stg` → `uat` (uat docs), then `uat` → `main`.
4. On git.konfersi.com, publish a release on `main` with tag `v<version>`. CI checks it, mirrors the tag and syncs `DOCS_SYNC_ENVS_RELEASE`; the release pipeline sets production's `DOCS_SOURCE_REF` to the tag.
