// Maps a weak-area sub-code (the "B5" in "B5 Binocular Vision") to the main
// section anchor of that topic inside the subject Reviewer, so the readiness
// page can deep-link a weakness straight to the exact reviewer section rather
// than the top of the page.
//
// GENERATED from the "<subcode>-01-…" heading ids in each X-Reviewer.html.
// If a reviewer's topic headings change, regenerate this map. Every area
// sub-code the subject exams emit (A1..H3) is covered. Format: subcode -> "L#anchor".
export const AREA_ANCHORS: Record<string, string> = {
  A1: 'A#a1-01-human-biology-systems',
  A2: 'A#a2-01-orbit-and-extraocular-muscles',
  A3: 'A#a3-01-ocular-embryology',
  B1: 'B#b1-01-visual-system-and-ocular-optics',
  B2: 'B#b2-01-visual-perception',
  B3: 'B#b3-01-visual-field',
  B4: 'B#b4-01-color-perception',
  B5: 'B#b5-01-binocular-vision-and-fusion',
  B6: 'B#b6-01-stereopsis-and-depth-perception',
  B7: 'B#b7-01-vip-vps-cognitive-processing',
  C1: 'C#c1-01-epidemiology-and-prevention',
  C2: 'C#c2-01-ametropia-and-refractive-errors',
  C3: 'C#c3-01-preliminary-examination',
  C4: 'C#c4-01-objective-examination',
  C5: 'C#c5-01-subjective-examination',
  C6: 'C#c6-01-management-of-visual-disorders',
  C7: 'C#c7-01-vision-therapy-and-orthoptics',
  D1: 'D#d1-01-geometric-and-physical-optics',
  D2: 'D#d2-01-ophthalmic-lenses-and-dispensing',
  D3: 'D#d3-01-contact-lenses',
  E1: 'E#e1-01-orbit-adnexa-eyelids',
  E2: 'E#e2-01-anterior-segment',
  E3: 'E#e3-01-posterior-segment-and-retina',
  E4: 'E#e4-01-ocular-emergencies',
  F1: 'F#f1-01-dpa-examination',
  F2: 'F#f2-01-pediatric-optometry',
  F3: 'F#f3-01-geriatric-optometry',
  F4: 'F#f4-01-neuro-optometry',
  F5: 'F#f5-01-occupational-optometry',
  F6: 'F#f6-01-sports-vision',
  F7: 'F#f7-01-low-vision-and-rehabilitation',
  F8: 'F#f8-01-prosthesis-and-absorptive-lenses',
  G1: 'G#g1-01-general-pharmacology-principles',
  G2: 'G#g2-01-autonomic-drugs',
  G3: 'G#g3-01-diagnostic-pharmaceutical-agents',
  G4: 'G#g4-01-therapeutic-ophthalmic-agents',
  G5: 'G#g5-01-special-populations-and-drug-effects',
  H1: 'H#h1-01-ra8050-optometry-law',
  H2: 'H#h2-01-bioethics-and-code-of-ethics',
  H3: 'H#h3-01-practice-management-and-labor-laws',
}

// "B5 Binocular Vision" -> { subject: "B", anchor: "b5-01-…" }, or null when the
// area label does not start with a known sub-code.
export function areaToReviewer(area: string): { subject: string; anchor: string } | null {
  const m = /^([A-H][0-9])\b/.exec(area.trim())
  if (!m) return null
  const entry = AREA_ANCHORS[m[1]]
  if (!entry) return null
  const [subject, anchor] = entry.split('#')
  return { subject, anchor }
}
