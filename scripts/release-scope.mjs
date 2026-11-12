#!/usr/bin/env node
// Release scope (release-scope.json): the pages a release leaves out.
//   node scripts/release-scope.mjs list    print the hidden pages and their status
//   node scripts/release-scope.mjs apply   mark every hidden page `status: draft` (run on a release branch: uat / main)
// stg keeps them published. validate.mjs --release fails if a hidden page is published on a release branch.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** Hide entries from release-scope.json; [] when the file is absent. */
export function loadScope(root = ROOT) {
  const file = join(root, 'release-scope.json')
  if (!existsSync(file)) return []
  const scope = JSON.parse(readFileSync(file, 'utf8'))
  if (!Array.isArray(scope.hide)) throw new Error('release-scope.json: "hide" must be a list')
  return scope.hide.map((h) => {
    if (typeof h?.slug !== 'string' || !h.slug) throw new Error('release-scope.json: every hide entry needs a "slug"')
    return h.slug
  })
}

/** "lab/" covers the lab folder (its overview page "lab" and everything below); anything else is one page. */
export function hiddenBy(slug, scope) {
  return scope.find((s) => (s.endsWith('/') ? slug === s.slice(0, -1) || slug.startsWith(s) : slug === s)) ?? null
}

const slugFromPath = (p) => p.replace(/\.md$/, '').replace(/(^|\/)index$/, '')

function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []
  })
}

function hiddenFiles(root, scope) {
  const out = []
  for (const locale of readdirSync(join(root, 'docs'))) {
    const dir = join(root, 'docs', locale)
    if (!statSync(dir).isDirectory()) continue
    for (const file of walk(dir)) {
      const slug = slugFromPath(relative(dir, file).split('\\').join('/'))
      if (hiddenBy(slug, scope)) out.push({ locale, slug, file })
    }
  }
  return out
}

const STATUS = /^(---\r?\n[\s\S]*?^status:\s*)(\S+)(\s*$[\s\S]*?^---)/m

function main() {
  const cmd = process.argv[2]
  if (cmd !== 'list' && cmd !== 'apply') {
    console.error('usage: node scripts/release-scope.mjs list|apply')
    process.exit(2)
  }
  const scope = loadScope()
  let changed = 0
  for (const { locale, slug, file } of hiddenFiles(ROOT, scope)) {
    const text = readFileSync(file, 'utf8')
    const m = text.match(STATUS)
    if (!m) {
      console.error(`[${locale}] ${slug}: no status in frontmatter`)
      process.exitCode = 1
      continue
    }
    if (cmd === 'list') console.log(`${m[2].padEnd(9)} [${locale}] ${slug}`)
    else if (m[2] !== 'draft') {
      writeFileSync(file, text.replace(STATUS, '$1draft$3'))
      changed++
    }
  }
  if (cmd === 'apply') console.log(`release-scope: ${changed} page(s) set to draft`)
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main()
