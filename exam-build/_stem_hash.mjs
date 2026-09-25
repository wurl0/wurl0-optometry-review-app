// Same id as src/lib/srs.ts questionId(): FNV-1a over the normalized stem + length suffix.
export function normalizeStem(s) {
  return s.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[^a-z0-9]+/g, ' ').trim()
}
export function questionId(stem) {
  const s = normalizeStem(stem)
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0 }
  return h.toString(16).padStart(8, '0') + '-' + s.length.toString(36)
}
