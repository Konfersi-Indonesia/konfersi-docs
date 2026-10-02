#!/usr/bin/env node
// Validates the docs repo so the backend sync never ingests a broken tree.
// Checks: config shape, en/id slug parity, files exist, frontmatter schema,
// internal links + related slugs resolve, allowed HTML only, no local/absolute
// Konfersi hosts, and every stable slug that apps link to still exists.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, relative, resolve, posix } from 'node:path'
import { fileURLToPath } from 'node:url'
import { splitFrontmatter } from './lib/frontmatter.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const errors = []
const warnings = []
const fail = (msg) => errors.push(msg)

const config = JSON.parse(readFileSync(join(ROOT, 'scalar.config.json'), 'utf8'))
const ext = config['x-konfersi']
if (!ext?.locales?.length) fail('scalar.config.json: x-konfersi.locales is required')
const locales = ext?.locales ?? []

// ── Walk the route tree per locale ────────────────────────
// Groups nest to any depth. A nested group with a filepath is a folder with its own
// overview page at docs/<locale>/<folder>/index.md; top-level sections cannot have one.
function collectPages(node, prefix, out, groupTitle, depth = 0) {
  for (const [key, child] of Object.entries(node.children ?? {})) {
    const path = `${prefix}${key}`
    if (child.type === 'group') {
      if (child.filepath) {
        if (depth === 0) fail(`${path}: a top-level section cannot have a filepath; give a nested folder the overview page instead`)
        else out.push({ path, filepath: child.filepath, title: child.title, group: groupTitle, folder: true })
      }
      collectPages(child, path, out, depth === 0 ? child.title : groupTitle, depth + 1)
    } else if (child.type === 'page') out.push({ path, filepath: child.filepath, title: child.title, group: groupTitle })
    else if (child.type !== 'link' && child.type !== 'spacer') fail(`${path}: unsupported node type "${child.type}"`)
  }
  return out
}

const pagesByLocale = {}
for (const locale of locales) {
  const routeKey = ext.localeRoutes?.[locale]
  const root = config.navigation?.routes?.[routeKey]
  if (!root) {
    fail(`navigation.routes["${routeKey}"] missing for locale ${locale}`)
    continue
  }
  pagesByLocale[locale] = collectPages(root, '', [], root.title).map((p) => ({ ...p, slug: p.path.replace(/^\//, '') }))
}

// ── Parity ────────────────────────────────────────────────
const [base, ...others] = locales
const baseSlugs = new Set((pagesByLocale[base] ?? []).map((p) => p.slug))
for (const locale of others) {
  const slugs = new Set((pagesByLocale[locale] ?? []).map((p) => p.slug))
  for (const s of baseSlugs) if (!slugs.has(s)) fail(`[${locale}] missing translation for "${s}"`)
  for (const s of slugs) if (!baseSlugs.has(s)) fail(`[${locale}] "${s}" has no ${base} counterpart`)
}

// ── Stable slugs used by apps ─────────────────────────────
const stable = JSON.parse(readFileSync(join(ROOT, 'stable-slugs.json'), 'utf8'))
for (const [name, slug] of Object.entries(stable)) {
  if (name.startsWith('$') || slug === '') continue
  if (!baseSlugs.has(slug)) fail(`stable-slugs.json: ${name} → "${slug}" is not in the navigation`)
}

// When checked out next to konfersi-shared (the Konfersi workspace), DOCS_PAGE must mirror this file.
const sharedDocs = join(ROOT, '..', 'konfersi-shared', 'src', 'docs.ts')
if (process.env.KONFERSI_SHARED_REQUIRED === '1' && !existsSync(sharedDocs)) {
  fail('KONFERSI_SHARED_REQUIRED=1 but ../konfersi-shared/src/docs.ts is missing (CI must clone konfersi-shared next to this repo)')
}
if (existsSync(sharedDocs)) {
  const block = readFileSync(sharedDocs, 'utf8').match(/DOCS_PAGE\s*=\s*\{([\s\S]*?)\}\s*as const/)?.[1] ?? ''
  const shared = Object.fromEntries([...block.matchAll(/([A-Z_]+):\s*'([^']*)'/g)].map((m) => [m[1], m[2]]))
  const ours = Object.fromEntries(Object.entries(stable).filter(([k]) => !k.startsWith('$')))
  for (const [k, v] of Object.entries(ours)) if (shared[k] !== v) fail(`konfersi-shared DOCS_PAGE.${k} is "${shared[k]}", stable-slugs.json says "${v}"`)
  for (const k of Object.keys(shared)) if (!(k in ours)) fail(`konfersi-shared DOCS_PAGE.${k} is not in stable-slugs.json`)
}

/** `folder/index.md` is the folder's overview page, so its slug is `folder`. */
const slugFromPath = (relativePath) => relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '')

// ── Per-file checks ───────────────────────────────────────
const STATUSES = new Set(['draft', 'published'])
const ALLOWED_TAG = /^<\/?scalar-callout(\s+type="(neutral|info|success|warning|danger)")?\s*>$/
const FORBIDDEN_HOST = /(localhost|127\.0\.0\.1|\b(?:[a-z0-9-]+\.)*(?:dev|stg|uat)\.konfersi\.com)/i
const referenced = new Set()
const statusBySlug = {}
const edges = []

for (const locale of locales) {
  statusBySlug[locale] = {}
  const slugSet = new Set((pagesByLocale[locale] ?? []).map((p) => p.slug))
  for (const page of pagesByLocale[locale] ?? []) {
    const where = `[${locale}] ${page.filepath}`
    const expected = page.folder ? `docs/${locale}/${page.slug}/index.md` : `docs/${locale}/${page.slug}.md`
    if (page.filepath !== expected) fail(`${where}: filepath must be ${expected}`)
    const abs = join(ROOT, page.filepath)
    referenced.add(relative(ROOT, abs))
    if (!existsSync(abs)) {
      fail(`${where}: file not found`)
      continue
    }
    const { data, body, error } = splitFrontmatter(readFileSync(abs, 'utf8'))
    if (error) {
      fail(`${where}: ${error}`)
      continue
    }
    for (const key of ['title', 'description', 'status', 'updated']) {
      if (!data[key] || typeof data[key] !== 'string') fail(`${where}: frontmatter "${key}" is required`)
    }
    if (data.status && !STATUSES.has(data.status)) fail(`${where}: status must be draft|published`)
    statusBySlug[locale][page.slug] = data.status
    if (data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) fail(`${where}: updated must be YYYY-MM-DD`)
    if (data.description && data.description.length > 200) warnings.push(`${where}: description over 200 chars`)
    for (const key of ['tags', 'related', 'review']) {
      if (data[key] !== undefined && !Array.isArray(data[key])) fail(`${where}: "${key}" must be a list`)
    }
    for (const rel of data.related ?? []) {
      if (!slugSet.has(rel)) fail(`${where}: related "${rel}" does not exist`)
      else edges.push({ locale, where, from: page.slug, to: rel, kind: 'related' })
    }
    if (page.slug.startsWith('legal/') && data.status === 'draft' && !(data.review ?? []).length) {
      fail(`${where}: draft legal pages must list open clause IDs in "review"`)
    }
    if (/^#\s/m.test(body)) fail(`${where}: do not use an H1 in the body; the title comes from frontmatter`)

    // Strip fenced code before scanning HTML and links.
    const prose = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '')
    for (const tag of prose.match(/<\/?[a-zA-Z][^>]*>/g) ?? []) {
      if (!ALLOWED_TAG.test(tag)) fail(`${where}: raw HTML not allowed: ${tag}`)
    }
    const hostHit = prose.match(FORBIDDEN_HOST)
    if (hostHit) fail(`${where}: non-production host "${hostHit[0]}" in content`)

    for (const [, target] of prose.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      if (/^(https?:|mailto:|tel:|#)/.test(target)) continue
      const [pathPart] = target.split('#')
      const resolved = posix.normalize(posix.join(posix.dirname(page.filepath), pathPart))
      if (pathPart.endsWith('.md')) {
        const slug = slugFromPath(resolved.replace(`docs/${locale}/`, ''))
        if (!slugSet.has(slug)) fail(`${where}: broken link ${target}`)
        else edges.push({ locale, where, from: page.slug, to: slug, kind: 'link' })
      } else if (!existsSync(join(ROOT, resolved))) {
        fail(`${where}: missing asset ${target}`)
      }
    }
  }
}

// ── Drafts are never published, so nothing public may point at one ──
for (const { locale, where, from, to, kind } of edges) {
  if (statusBySlug[locale][to] === 'draft' && statusBySlug[locale][from] !== 'draft') {
    fail(`${where}: ${kind} to draft page "${to}" (drafts are not published)`)
  }
}
for (const [name, slug] of Object.entries(stable)) {
  if (name.startsWith('$') || slug === '') continue
  for (const locale of locales) {
    if (statusBySlug[locale]?.[slug] === 'draft') fail(`stable-slugs.json: ${name} → "${slug}" is a draft in ${locale}; apps link to it, so it must be published`)
  }
}

// ── Release version + changelog ───────────────────────────
const release = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version
if (!/^\d+\.\d+\.\d+$/.test(release ?? '')) fail(`package.json: version "${release}" must be MAJOR.MINOR.PATCH`)
for (const locale of locales) {
  const changelog = join(ROOT, 'docs', locale, 'releases', 'changelog.md')
  if (!existsSync(changelog)) {
    fail(`[${locale}] docs/${locale}/releases/changelog.md is required`)
    continue
  }
  const heading = new RegExp(`^## ${release.replace(/\./g, '\\.')}(\\s|$)`, 'm')
  if (!heading.test(readFileSync(changelog, 'utf8'))) fail(`[${locale}] changelog has no "## ${release}" entry for the current version`)
}

// ── Orphan markdown files ─────────────────────────────────
function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}
for (const file of walk(join(ROOT, 'docs')).filter((f) => f.endsWith('.md'))) {
  if (!referenced.has(relative(ROOT, file))) warnings.push(`${relative(ROOT, file)}: not referenced in scalar.config.json`)
}

for (const w of warnings) console.warn(`warn  ${w}`)
if (errors.length) {
  for (const e of errors) console.error(`error ${e}`)
  console.error(`\n${errors.length} error(s)`)
  process.exit(1)
}
const total = Object.values(pagesByLocale).reduce((n, p) => n + p.length, 0)
console.log(`ok  ${total} pages across ${locales.join(', ')}`)
