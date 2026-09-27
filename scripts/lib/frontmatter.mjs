// Frontmatter subset shared with konfersi-backend (src/lib/docs/frontmatter.ts).
// Supported: `key: scalar`, `key: [a, b]`, and block lists (`key:` then `  - item`).
// Keep the two parsers in sync; anything outside this subset is a validation error.

export function splitFrontmatter(source) {
  const text = source.replace(/^﻿/, '').replace(/\r\n/g, '\n')
  if (!text.startsWith('---\n')) return { data: null, body: text, error: 'missing frontmatter' }
  const end = text.indexOf('\n---', 4)
  if (end === -1) return { data: null, body: text, error: 'unterminated frontmatter' }
  const raw = text.slice(4, end)
  const body = text.slice(end + 4).replace(/^\n/, '')
  try {
    return { data: parseYamlSubset(raw), body, error: null }
  } catch (err) {
    return { data: null, body, error: err.message }
  }
}

function unquote(value) {
  const v = value.trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) return v.slice(1, -1)
  return v
}

function parseInlineList(value) {
  const inner = value.trim().slice(1, -1).trim()
  if (!inner) return []
  return inner.split(',').map((s) => unquote(s)).filter(Boolean)
}

export function parseYamlSubset(raw) {
  const data = {}
  let listKey = null
  for (const [i, line] of raw.split('\n').entries()) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const item = line.match(/^\s+-\s+(.*)$/)
    if (item) {
      if (!listKey) throw new Error(`line ${i + 1}: list item without a key`)
      data[listKey].push(unquote(item[1]))
      continue
    }
    const kv = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/)
    if (!kv) throw new Error(`line ${i + 1}: unsupported frontmatter syntax`)
    const [, key, value] = kv
    if (value === '') {
      data[key] = []
      listKey = key
    } else if (value.trim().startsWith('[')) {
      data[key] = parseInlineList(value)
      listKey = null
    } else {
      data[key] = unquote(value)
      listKey = null
    }
  }
  return data
}
