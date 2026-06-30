// Single source of truth for the Top 2 reviewer content. Drives the middleware gate,
// the dynamic cockpit (/reviewer), the home-page cards, and the admin access toggles.
// Add or restructure content here; nothing else hard-codes these paths.

export type ItemType =
  | 'reviewer' | 'strategy' | 'exam' | 'preboards-2025' | 'preboards-set2' | 'mock'

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

const SUBJECT_ITEM_TYPES: Exclude<ItemType, 'mock'>[] =
  ['reviewer', 'strategy', 'exam', 'preboards-2025', 'preboards-set2']

const TYPE_LABEL: Record<Exclude<ItemType, 'mock'>, string> = {
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
function fileFor(code: string, type: Exclude<ItemType, 'mock'>): string {
  const strategy = (code === 'G' || code === 'H')
    ? `${code}-Subject-Exam-Strategy.html`
    : `${code}-Strategy.html`
  const files: Record<Exclude<ItemType, 'mock'>, string> = {
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
    sub: 'MCU 2024 bank, weighted to TOS', path: '/top2/00-Master-Index/OLE-Mock-Board-Exam-Set2.html' },
]

export const ITEMS: Item[] = [...SUBJECT_ITEMS, ...MOCK_ITEMS]
export const ITEM_BY_PATH = new Map<string, Item>(ITEMS.map(i => [i.path, i]))
export const ITEM_BY_ID = new Map<string, Item>(ITEMS.map(i => [i.id, i]))
