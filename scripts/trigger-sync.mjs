#!/usr/bin/env node
/**
 * Trigger a konfersi-docs sync on a deployed backend and smoke-test the public docs API.
 * Used by konfersi-backend CD (after deploy) and konfersi-docs CD (after publish) — keep both copies in sync
 * (konfersi-backend/scripts/docs-sync-smoke.mjs).
 *
 * Required env (no defaults, no host fallbacks):
 *   DOCS_API_BASE          backend origin, e.g. https://konfersi-backend-stg.<account>.workers.dev
 *   DOCS_WEBHOOK_SECRET    same value as the Worker secret DOCS_WEBHOOK_SECRET
 * Optional:
 *   DOCS_SYNC_BRANCH       branch the backend follows (default payload ref: refs/heads/<branch>; must match DOCS_SOURCE_REF)
 *   DOCS_SYNC_COMMIT       40-hex commit SHA to pin the sync to (bypasses raw-host branch caching)
 */
import { createHmac } from "node:crypto";

function required(name) {
  const v = process.env[name]?.trim();
  if (!v) {
    console.error(`docs-sync: missing required env ${name}`);
    process.exit(1);
  }
  return v;
}

const base = required("DOCS_API_BASE").replace(/\/+$/, "");
if (!/^https:\/\//.test(base) || /\/\/(localhost|127\.0\.0\.1)/.test(base)) {
  console.error("docs-sync: DOCS_API_BASE must be a public https origin");
  process.exit(1);
}
const secret = required("DOCS_WEBHOOK_SECRET");
const branch = process.env.DOCS_SYNC_BRANCH?.trim();
const commit = process.env.DOCS_SYNC_COMMIT?.trim();
if (commit && !/^[0-9a-f]{40}$/.test(commit)) {
  console.error("docs-sync: DOCS_SYNC_COMMIT must be a 40-hex SHA");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function withRetry(label, fn, tries = 5) {
  for (let i = 1; ; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i >= tries) throw err;
      console.warn(`docs-sync: ${label} failed (${err.message}); retry ${i}/${tries - 1} in ${i * 5}s`);
      await sleep(i * 5000);
    }
  }
}

async function getJson(path) {
  const res = await fetch(`${base}${path}`, { headers: { Accept: "application/json" } });
  const body = await res.json().catch(() => null);
  if (res.status !== 200 || !body?.result) throw new Error(`GET ${path} → ${res.status} ${body?.err_code ?? ""}`);
  return body.result;
}

// 1) Signed, synchronous sync.
const payload = JSON.stringify({ ...(branch ? { ref: `refs/heads/${branch}` } : {}), ...(commit ? { after: commit } : {}) });
const signature = createHmac("sha256", secret).update(payload).digest("hex");
const sync = await withRetry("sync", async () => {
  const res = await fetch(`${base}/v1/webhooks/docs`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Gitea-Signature": signature, "X-Docs-Sync-Wait": "1" },
    body: payload,
  });
  const body = await res.json().catch(() => null);
  if (res.status === 401) {
    console.error("docs-sync: 401 — DOCS_WEBHOOK_SECRET does not match the Worker secret");
    process.exit(1);
  }
  if (res.status === 202 && body?.result?.accepted === false) {
    console.error(`docs-sync: backend ignored the push (${body.result.ignored}); DOCS_SYNC_BRANCH must equal DOCS_SOURCE_REF`);
    process.exit(1);
  }
  if (res.status !== 200 || !body?.result) throw new Error(`webhook → ${res.status} ${body?.err_message ?? ""}`);
  return body.result;
});
console.log(`docs-sync: ${sync.changed ? "updated" : "unchanged"} ref=${sync.ref ?? "-"} version=${String(sync.version).slice(0, 12)} pages=${sync.pages} warnings=${sync.warnings?.length ?? 0}`);
if (!sync.pages) {
  console.error("docs-sync: backend reports 0 pages");
  process.exit(1);
}
for (const w of (sync.warnings ?? []).slice(0, 10)) console.warn(`docs-sync: warning ${w}`);

// 2) Smoke the public API in both locales.
for (const lang of ["en", "id"]) {
  const nav = await withRetry(`nav ${lang}`, () => getJson(`/v1/public/docs/nav?lang=${lang}`));
  const pages = nav.groups.reduce((n, g) => n + g.pages.length, 0);
  if (!pages) throw new Error(`nav ${lang} has no pages`);
  const first = nav.groups[0].pages[0].slug;
  const page = await getJson(`/v1/public/docs/pages/${first}?lang=${lang}`);
  if (!page.html || page.locale !== lang) throw new Error(`page ${first} (${lang}) did not render in ${lang}`);
  const q = page.title.split(/\s+/)[0];
  const search = await getJson(`/v1/public/docs/search?q=${encodeURIComponent(q)}&lang=${lang}`);
  if (!search.results.length) throw new Error(`search "${q}" (${lang}) returned nothing`);
  console.log(`docs-sync: ${lang} ok — ${pages} pages, "${first}" renders, search "${q}" → ${search.results.length}`);
}
const graph = await getJson("/v1/public/docs/graph?lang=en");
if (!graph.nodes.length) throw new Error("graph has no nodes");
console.log(`docs-sync: graph ok — ${graph.nodes.length} nodes / ${graph.edges.length} edges`);
