// Single source of truth for the Top 2 reviewer content. Drives the middleware gate,
// the dynamic cockpit (/reviewer), the home-page cards, and the admin access toggles.
// Add or restructure content here; nothing else hard-codes these paths.

export type ItemType =
  | 'reviewer' | 'strategy' | 'exam' | 'preboards-2025' | 'preboards-set2' | 'mock' | 'interactive'

// The five per-subject content types (everything except the global mocks and interactives).
type SubjectItemType = Exclude<ItemType, 'mock' | 'interactive'>

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
    sub: 'MCU 2024 bank, weighted to TOS', path: '/top2/00-Master-Index/OLE-Mock-Board-Exam-Set2.html' },
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
  { id: 'int.E3-Fundus-Signatures-Interactive', subject: 'E', type: 'interactive', label: 'E3 Fundus Signatures', path: '/top2/E-Ocular-Disease-and-Emergencies/E3-Posterior-Segment-and-Retina/E3-Fundus-Signatures-Interactive.html' },
  { id: 'int.F1-DPA-Quiz', subject: 'F', type: 'interactive', label: 'F1 DPA Quiz', path: '/top2/F-Clinical-Optometry-and-Specialties/F1-DPA-Examination/F1-DPA-Quiz.html' },
  { id: 'int.G1-Interactive', subject: 'G', type: 'interactive', label: 'G1 Interactive', path: '/top2/G-Ocular-Pharmacology/G1-General-Pharmacology-Principles/G1-Interactive.html' },
  { id: 'int.G2-Autonomic-Grid-Interactive', subject: 'G', type: 'interactive', label: 'G2 Autonomic Grid', path: '/top2/G-Ocular-Pharmacology/G2-Autonomic-Drugs/G2-Autonomic-Grid-Interactive.html' },
]

export const ITEMS: Item[] = [...SUBJECT_ITEMS, ...INTERACTIVE_ITEMS, ...MOCK_ITEMS]
export const ITEM_BY_PATH = new Map<string, Item>(ITEMS.map(i => [i.path, i]))
export const ITEM_BY_ID = new Map<string, Item>(ITEMS.map(i => [i.id, i]))
