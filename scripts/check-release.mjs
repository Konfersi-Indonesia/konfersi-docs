#!/usr/bin/env node
// Checks that a release tag may be published: `node scripts/check-release.mjs vX.Y.Z`
// - the tag is vMAJOR.MINOR.PATCH (the only release-tag convention the backend recognises)
// - it equals "v" + package.json version
// - every locale's changelog has a "## <version>" entry
// The CI release job also checks that the tagged commit is on main.
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tag = process.argv[2]?.trim() ?? ''
const errors = []

if (!/^v\d+\.\d+\.\d+$/.test(tag)) errors.push(`tag "${tag}" must be vMAJOR.MINOR.PATCH (e.g. v1.4.0)`)

const version = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version
if (tag && tag !== `v${version}`) errors.push(`tag ${tag} does not match package.json version ${version} (expected v${version})`)

const locales = JSON.parse(readFileSync(join(ROOT, 'scalar.config.json'), 'utf8'))['x-konfersi']?.locales ?? []
if (!locales.length) errors.push('scalar.config.json: x-konfersi.locales is required')
const heading = new RegExp(`^## ${String(version).replace(/\./g, '\\.')}(\\s|$)`, 'm')
for (const locale of locales) {
  const changelog = join(ROOT, 'docs', locale, 'releases', 'changelog.md')
  if (!existsSync(changelog)) errors.push(`[${locale}] docs/${locale}/releases/changelog.md is missing`)
  else if (!heading.test(readFileSync(changelog, 'utf8'))) errors.push(`[${locale}] changelog has no "## ${version}" entry`)
}

if (errors.length) {
  for (const e of errors) console.error(`release: ${e}`)
  process.exit(1)
}
console.log(`release: ${tag} = package.json ${version}, changelog entry present in ${locales.join(', ')}`)
