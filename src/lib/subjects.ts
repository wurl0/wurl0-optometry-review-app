import { Subject } from './types'

export const SUBJECTS: Subject[] = [
  {
    slug: 'physiologic-optics',
    name: 'Physiologic Optics',
    description: 'Accommodation, refractive errors, schematic eye, visual physiology',
    color: 'teal',
    questionCount: 80,
  },
  {
    slug: 'binocular-vision',
    name: 'Binocular Vision',
    description: 'Vergence, eye movements, stereopsis, binocular disorders',
    color: 'blue',
    questionCount: 105,
  },
  {
    slug: 'theoretical-optics',
    name: 'Theoretical Optics',
    description: 'Geometric optics, lenses, prisms, optical principles',
    color: 'violet',
    questionCount: 71,
  },
  {
    slug: 'phorometry',
    name: 'Phorometry (21 Steps)',
    description: 'OEP 21-step sequence, probe bodies, phoria measurements',
    color: 'amber',
    questionCount: 113,
  },
]

export const COLOR_MAP: Record<string, { bg: string; border: string; badge: string; text: string }> = {
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   badge: 'bg-teal-100 text-teal-800',   text: 'text-teal-700' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   badge: 'bg-blue-100 text-blue-800',   text: 'text-blue-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-800', text: 'text-violet-700' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  badge: 'bg-amber-100 text-amber-800',  text: 'text-amber-700' },
}
