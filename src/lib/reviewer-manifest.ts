// Single source of truth for the Top 2 reviewer content. Drives the middleware gate,
// the dynamic cockpit (/reviewer), the home-page cards, and the admin access toggles.
// Add or restructure content here; nothing else hard-codes these paths.

export type ItemType =
  | 'reviewer' | 'strategy' | 'exam' | 'preboards-2025' | 'preboards-set2' | 'mock' | 'interactive' | 'feature'

// The five per-subject content types (everything except the global mocks, interactives, and features).
type SubjectItemType = Exclude<ItemType, 'mock' | 'interactive' | 'feature'>

export type Item = {
  id: string          // stable ID, e.g. "A.exam", "mock.set2"
  subject: string     // "A".."H", or "GLOBAL" for the mocks
  type: ItemType
  label: string       // card title
  sub?: string        // card subtitle
  path: string        // exact served path under /top2
  public?: boolean    // free to ALL approved users (preserves today's samples)
}

export type SubjectDef = { code: string; name: string; folder: string; weight: number }

export const SUBJECTS: SubjectDef[] = [
  { code: 'A', name: 'Visual Biology',            folder: 'A-Visual-Biology',                   weight: 10 },
  { code: 'B', name: 'Physiological Optics & BV', folder: 'B-Physiological-Optics-and-BV',       weight: 15 },
  { code: 'C', name: 'Primary Care & Refraction', folder: 'C-Primary-Care-and-Refraction',       weight: 15 },
  { code: 'D', name: 'Theoretical Optics & CL',   folder: 'D-Theoretical-Optics-Dispensing-CL',  weight: 15 },
  { code: 'E', name: 'Ocular Disease',            folder: 'E-Ocular-Disease-and-Emergencies',    weight: 10 },
  { code: 'F', name: 'Clinical Optometry',        folder: 'F-Clinical-Optometry-and-Specialties', weight: 15 },
  { code: 'G', name: 'Ocular Pharmacology',       folder: 'G-Ocular-Pharmacology',               weight: 10 },
  { code: 'H', name: 'Jurisprudence & Ethics',    folder: 'H-Jurisprudence-and-Ethics',          weight: 10 },
]

const SUBJECT_ITEM_TYPES: SubjectItemType[] =
  ['reviewer', 'strategy', 'exam', 'preboards-2025', 'preboards-set2']

const TYPE_LABEL: Record<SubjectItemType, string> = {
  reviewer: 'Reviewer',
  strategy: 'Strategy',
  exam: 'Subject Exam',
  'preboards-2025': 'Preboards Set 1',
  'preboards-set2': 'Preboards Set 2',
}

// No public/free items: all Top 2 content is controlled per-user via grants.
// (Add an item id here to make it free to every approved user.)
const PUBLIC_IDS = new Set<string>()

// Filename per (subject, type). Only G and H differ: their strategy lives in
// X-Subject-Exam-Strategy.html instead of X-Strategy.html.
function fileFor(code: string, type: SubjectItemType): string {
  const strategy = (code === 'G' || code === 'H')
    ? `${code}-Subject-Exam-Strategy.html`
    : `${code}-Strategy.html`
  const files: Record<SubjectItemType, string> = {
    reviewer: `${code}-Reviewer.html`,
    strategy,
    exam: `${code}-Subject-Exam.html`,
    'preboards-2025': `${code}-Preboards-2025.html`,
    'preboards-set2': `${code}-Preboards-Set2.html`,
  }
  return files[type]
}

const SUBJECT_ITEMS: Item[] = SUBJECTS.flatMap(s =>
  SUBJECT_ITEM_TYPES.map<Item>(type => {
    const id = `${s.code}.${type}`
    return {
      id,
      subject: s.code,
      type,
      label: `${s.name} — ${TYPE_LABEL[type]}`,
      path: `/top2/${s.folder}/${fileFor(s.code, type)}`,
      public: PUBLIC_IDS.has(id) || undefined,
    }
  })
)

const MOCK_ITEMS: Item[] = [
  { id: 'mock.2025', subject: 'GLOBAL', type: 'mock', label: 'OLE Mock Board Exam',
    sub: 'Cross-subject, weighted to TOS', path: '/top2/00-Master-Index/OLE-Mock-Board-Exam.html' },
  { id: 'mock.set2', subject: 'GLOBAL', type: 'mock', label: 'OLE Mock Board Exam — Set 2',
    sub: '2024 preboard bank, weighted to TOS', path: '/top2/00-Master-Index/OLE-Mock-Board-Exam-Set2.html' },
  { id: 'mock.reviewer', subject: 'GLOBAL', type: 'mock', label: 'OLE Mock Board — Reviewer Bank',
    sub: 'Full 1000-item weighted paper drawn from the reviewer banks', path: '/top2/00-Master-Index/OLE-Mock-Board-Reviewer.html' },
]

// Visual interactives (grouped under their subject). Grantable like any other item.
const INTERACTIVE_ITEMS: Item[] = [
  { id: 'int.A2-07-Visual-Pathway-Interactive', subject: 'A', type: 'interactive', label: 'A2 07 Visual Pathway', path: '/top2/A-Visual-Biology/A2-The-Human-Eye-Anatomy/A2-07-Visual-Pathway-Interactive.html' },
  { id: 'int.A2-08-Axes-and-Planes-of-the-Eye-Interactive', subject: 'A', type: 'interactive', label: 'A2 08 Axes & Planes of the Eye', path: '/top2/A-Visual-Biology/A2-The-Human-Eye-Anatomy/A2-08-Axes-and-Planes-of-the-Eye-Interactive.html' },
  { id: 'int.A2-09-Benzene-Ring-EOM-Interactive', subject: 'A', type: 'interactive', label: 'A2 09 Benzene Ring (EOM & Gaze)', path: '/top2/A-Visual-Biology/A2-The-Human-Eye-Anatomy/A2-09-Benzene-Ring-EOM-Interactive.html' },
  { id: 'int.A2-10-Pupil-Light-Reflex-RAPD-Interactive', subject: 'A', type: 'interactive', label: 'A2 10 Pupil Light Reflex & RAPD', path: '/top2/A-Visual-Biology/A2-The-Human-Eye-Anatomy/A2-10-Pupil-Light-Reflex-RAPD-Interactive.html' },
  { id: 'int.A2-11-Pupillary-Pathways-Interactive', subject: 'A', type: 'interactive', label: 'A2 11 Pupillary Pathways', path: '/top2/A-Visual-Biology/A2-The-Human-Eye-Anatomy/A2-11-Pupillary-Pathways-Interactive.html' },
  { id: 'int.B1-Accommodation-and-AC-A-Interactive', subject: 'B', type: 'interactive', label: 'B1 Accommodation & AC/A', path: '/top2/B-Physiological-Optics-and-BV/B1-Visual-System-and-Ocular-Optics/B1-Accommodation-and-AC-A-Interactive.html' },
  { id: 'int.B1-Reference-Axes-and-Angles-Interactive', subject: 'B', type: 'interactive', label: 'B1 Reference Axes and Angles', path: '/top2/B-Physiological-Optics-and-BV/B1-Visual-System-and-Ocular-Optics/B1-Reference-Axes-and-Angles-Interactive.html' },
  { id: 'int.B5-Physiologic-Diplopia-Interactive', subject: 'B', type: 'interactive', label: 'B5 Physiologic Diplopia', path: '/top2/B-Physiological-Optics-and-BV/B5-Binocular-Vision-and-Fusion/B5-Physiologic-Diplopia-Interactive.html' },
  { id: 'int.B5-Worth-4-Dot-Interactive', subject: 'B', type: 'interactive', label: 'B5 Worth 4-Dot', path: '/top2/B-Physiological-Optics-and-BV/B5-Binocular-Vision-and-Fusion/B5-Worth-4-Dot-Interactive.html' },
  { id: 'int.B5-Horopter-and-Panum-Interactive', subject: 'B', type: 'interactive', label: 'B5 Horopter & Panum', path: '/top2/B-Physiological-Optics-and-BV/B5-Binocular-Vision-and-Fusion/B5-Horopter-and-Panum-Interactive.html' },
  { id: 'int.C4-Retinoscopy-Interactive', subject: 'C', type: 'interactive', label: 'C4 Retinoscopy', path: '/top2/C-Primary-Care-and-Refraction/C4-Objective-Examination/C4-Retinoscopy-Interactive.html' },
  { id: 'int.C4-Ophthalmoscopy-Interactive', subject: 'C', type: 'interactive', label: 'C4 Ophthalmoscopy', path: '/top2/C-Primary-Care-and-Refraction/C4-Objective-Examination/C4-Ophthalmoscopy-Interactive.html' },
  { id: 'int.C4-Optic-Disc-CD-Ratio-Interactive', subject: 'C', type: 'interactive', label: 'C4 Optic Disc & C/D Ratio', path: '/top2/C-Primary-Care-and-Refraction/C4-Objective-Examination/C4-Optic-Disc-CD-Ratio-Interactive.html' },
  { id: 'int.D1-Refractive-Error-Simulator-Interactive', subject: 'D', type: 'interactive', label: 'D1 Refractive Error Simulator', path: '/top2/D-Theoretical-Optics-Dispensing-CL/D1-Geometric-and-Physical-Optics/D1-Refractive-Error-Simulator-Interactive.html' },
  { id: 'int.D1-Gullstrand-Cardinal-Points-Interactive', subject: 'D', type: 'interactive', label: 'D1 Gullstrand Cardinal Points', path: '/top2/D-Theoretical-Optics-Dispensing-CL/D1-Geometric-and-Physical-Optics/D1-Gullstrand-Cardinal-Points-Interactive.html' },
  { id: 'int.D1-Ray-Diagram-Interactive', subject: 'D', type: 'interactive', label: 'D1 Ray Diagram', path: '/top2/D-Theoretical-Optics-Dispensing-CL/D1-Geometric-and-Physical-Optics/D1-Ray-Diagram-Interactive.html' },
  { id: 'int.D1-Ocular-Axes-and-Angles-Interactive', subject: 'D', type: 'interactive', label: 'D1 Axes & Angles of the Eye', path: '/top2/D-Theoretical-Optics-Dispensing-CL/D1-Geometric-and-Physical-Optics/D1-Ocular-Axes-and-Angles-Interactive.html' },
  { id: 'int.E3-Fundus-Signatures-Interactive', subject: 'E', type: 'interactive', label: 'E3 Fundus Signatures', path: '/top2/E-Ocular-Disease-and-Emergencies/E3-Posterior-Segment-and-Retina/E3-Fundus-Signatures-Interactive.html' },
  { id: 'int.F1-DPA-Quiz', subject: 'F', type: 'interactive', label: 'F1 DPA Quiz', path: '/top2/F-Clinical-Optometry-and-Specialties/F1-DPA-Examination/F1-DPA-Quiz.html' },
  { id: 'int.G1-Interactive', subject: 'G', type: 'interactive', label: 'G1 Interactive', path: '/top2/G-Ocular-Pharmacology/G1-General-Pharmacology-Principles/G1-Interactive.html' },
  { id: 'int.G2-Autonomic-Grid-Interactive', subject: 'G', type: 'interactive', label: 'G2 Autonomic Grid', path: '/top2/G-Ocular-Pharmacology/G2-Autonomic-Drugs/G2-Autonomic-Grid-Interactive.html' },
]

// Per-subject extras that sit outside the generated five. These are linked FROM pages a
// granted user can already open (H-Reviewer's layers bar points at both law-book pages),
// so leaving them off the manifest made those links bounce a granted user back to /.
const EXTRA_SUBJECT_ITEMS: Item[] = [
  { id: 'H.optolawbook', subject: 'H', type: 'reviewer', label: 'Jurisprudence & Ethics — Law Book (full)',
    sub: 'Full digest of the optometry law and professional aspects text',
    path: '/top2/H-Jurisprudence-and-Ethics/H-OPTOLAWBOOK-Reviewer.html' },
  { id: 'H.optolawbook-drill', subject: 'H', type: 'interactive', label: 'Jurisprudence & Ethics — Law Drill',
    sub: 'Self-test on the law book digest',
    path: '/top2/H-Jurisprudence-and-Ethics/H-OPTOLAWBOOK-Law-Drill.html' },
]

// App features (not static /top2 files) that are grantable like any other item.
// Gated in their own page, not by the /top2 middleware.
export const READINESS_ITEM_ID = 'feature.readiness'
export const DRILL_ITEM_ID = 'feature.drill'
export const REVIEW_ITEM_ID = 'feature.review'

// Features with their own home-page card, kept out of the generic granted-item list.
export const OWN_CARD_ITEM_IDS = [READINESS_ITEM_ID, DRILL_ITEM_ID, REVIEW_ITEM_ID]

const FEATURE_ITEMS: Item[] = [
  { id: READINESS_ITEM_ID, subject: 'GLOBAL', type: 'feature', label: 'Board Readiness',
    sub: 'Weighted GWA dashboard from exam scores', path: '/readiness' },
  { id: DRILL_ITEM_ID, subject: 'GLOBAL', type: 'feature', label: '10-Minute Drill',
    sub: 'Mixed-subject interleaved drill, no setup', path: '/drill' },
  { id: REVIEW_ITEM_ID, subject: 'GLOBAL', type: 'feature', label: 'Review Queue',
    sub: 'Spaced repetition of every missed question', path: '/review' },
]

export const ITEMS: Item[] = [
  ...SUBJECT_ITEMS, ...EXTRA_SUBJECT_ITEMS, ...INTERACTIVE_ITEMS, ...MOCK_ITEMS, ...FEATURE_ITEMS,
]
export const ITEM_BY_PATH = new Map<string, Item>(ITEMS.map(i => [i.path, i]))
export const ITEM_BY_ID = new Map<string, Item>(ITEMS.map(i => [i.id, i]))
