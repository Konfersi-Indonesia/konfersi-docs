# Konfersi Docs

Source of truth for Konfersi's public documentation: product guides, account and billing help, and legal / trust pages, in **English** and **Bahasa Indonesia**.

This repository is content only. It is not a service:

- `konfersi-backend` fetches these files from git, renders them, and indexes them for search and the link graph. It serves them under `/v1/public/docs/*`.
- `konfersi-landing-page` displays them at `<landing>/docs/...`.

The repo can be made public or mirrored anywhere. Point the backend at the new location with `DOCS_SOURCE_BASE_URL`; nothing else changes.

## Layout

```
scalar.config.json     Scalar Docs 2.0 config — navigation.routes has one root per locale (/en, /id)
docs/<locale>/<group>/<page>.md
assets/                Images; reference them with a relative path (../../../assets/x.png)
stable-slugs.json      Slugs apps link to directly (mirrored by DOCS_PAGE in @konfersi/shared)
scripts/validate.mjs   Run by CI and before every push: npm run validate
```

**How slugs work**

- A page's slug is its route path without the locale root. For example, `/en` + `/legal` + `/terms` gives `legal/terms`, and the file is `docs/en/legal/terms.md`.
- The same slug in every locale forms a translation pair. The validator fails if a page exists in one language only.

## Writing a page

```markdown
---
title: Privacy Policy
description: How PT Konfersi Metocean Climate Consultant collects, uses and protects personal data.
tags: [legal, privacy, uu-pdp]
related: [legal/terms, legal/cookies]
status: draft
updated: 2026-09-27
review: [P5, P8, P9]
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
| `status` | yes | `published` or `draft`. Drafts render with a banner and are `noindex`. |
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

`git.konfersi.com` is internal-only, so the backend (a Cloudflare Worker) reads the **public mirror**:
`DOCS_SOURCE_BASE_URL=https://raw.githubusercontent.com/Konfersi-Indonesia/konfersi-docs/main`.

1. Run `npm run validate`.
2. Push to `main` on git.konfersi.com and on the GitHub mirror (`github` remote). Until a Gitea push-mirror is configured, push both remotes.
3. A GitHub push webhook calls `POST <api>/v1/webhooks/docs`. Use content type `application/json` and the secret `DOCS_WEBHOOK_SECRET`; the signature arrives in `X-Hub-Signature-256`. The backend re-syncs only when the content hash changes.
4. An hourly cron re-syncs as a safety net. raw.githubusercontent.com caches files for about 5 minutes, so a sync can briefly see the previous version.
5. Admins can force a sync with `POST <api>/v1/admin/docs/sync?force=1`.

## Legal pages

The `legal/*` pages are drafted from the facts in the internal "TnC / legal checklist" and company profile. They stay `status: draft` until counsel and the Direktur approve them:

- The `review` list names the clause decisions still open.
- To approve a page, set `status: published`, clear `review`, and bump `updated`.
