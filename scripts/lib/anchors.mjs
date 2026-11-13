// Heading anchor ids, computed the way konfersi-backend renders them (src/lib/docs/render.ts: slugifyHeading +
// uniqueId), so `page.md#anchor` links can be checked before they ship. Keep the two in sync.

/** Same as the backend's slugifyHeading. */
export function slugifyHeading(text) {
  const base = text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z#0-9]+;/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return base || 'section'
}

/** The visible text of an inline Markdown heading: links, images, emphasis and code reduced to their text. */
function headingText(markdown) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/(\*\*|__)(.+?)\1/g, '$2')
    .replace(/(\*|_)(.+?)\1/g, '$2')
    .replace(/~~(.+?)~~/g, '$1')
    .replace(/\s+#+\s*$/, '')
    .trim()
}

/** Every heading id a page body renders, in order (a repeated heading gets -2, -3, … like the backend). */
export function headingIds(body) {
  const ids = new Set()
  const used = new Map()
  let fence = null
  for (const line of body.split('\n')) {
    const f = line.match(/^\s{0,3}(`{3,}|~{3,})/)
    if (f) {
      if (!fence) fence = f[1][0]
      else if (f[1][0] === fence) fence = null
      continue
    }
    if (fence) continue
    const h = line.match(/^\s{0,3}#{1,6}\s+(.*)$/)
    if (!h) continue
    const id = slugifyHeading(headingText(h[1]))
    const n = used.get(id) ?? 0
    used.set(id, n + 1)
    ids.add(n === 0 ? id : `${id}-${n + 1}`)
  }
  return ids
}
