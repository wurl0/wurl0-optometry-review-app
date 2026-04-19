import { Subject } from './types'

export const SUBJECTS: Subject[] = [
  {
    slug: 'physiologic-optics',
    name: 'Physiologic Optics',
    description: 'Accommodation, refractive errors, schematic eye, visual physiology',
    color: 'teal',
    questionCount: 80,
    icon: '👁️',
    olePrep: true,
  },
  {
    slug: 'binocular-vision',
    name: 'Binocular Vision',
    description: 'Vergence, eye movements, stereopsis, binocular disorders',
    color: 'blue',
    questionCount: 105,
    icon: '🎯',
    olePrep: true,
  },
  {
    slug: 'theoretical-optics',
    name: 'Theoretical Optics',
    description: 'Geometric optics, lenses, prisms, optical principles',
    color: 'violet',
    questionCount: 71,
    icon: '🌈',
    olePrep: true,
  },
  {
    slug: 'phorometry',
    name: 'Phorometry (21 Steps)',
    description: 'OEP 21-step sequence, probe bodies, phoria measurements',
    color: 'amber',
    questionCount: 113,
    icon: '🕶️',
    olePrep: true,
  },
  {
    slug: 'primary-eye-care',
    name: 'Primary Eye Care',
    description: 'Case history, refraction, binocular vision, ocular disease, examination techniques',
    color: 'emerald',
    questionCount: 151,
    icon: '🩺',
    olePrep: true,
  },
  {
    slug: 'ocular-anatomy',
    name: 'Ocular Anatomy',
    description: 'Orbit, eyelids, cornea, uvea, retina, visual pathways, cranial nerves, extraocular muscles',
    color: 'rose',
    questionCount: 120,
    icon: '🔬',
    olePrep: true,
  },
  {
    slug: 'general-anatomy',
    name: 'General Anatomy',
    description: 'Cell biology, integumentary, skeletal, muscular, nervous, circulatory, respiratory, digestive systems',
    color: 'amber',
    questionCount: 100,
    icon: '🦴',
    olePrep: true,
  },
]

export const COLOR_MAP: Record<string, {
  bg: string
  border: string
  badge: string
  text: string
  gradient: string
  progressBar: string
  ring: string
}> = {
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    badge: 'bg-teal-100 text-teal-800',
    text: 'text-teal-700',
    gradient: 'from-teal-500 to-emerald-600',
    progressBar: 'bg-teal-500',
    ring: '#14b8a6',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    text: 'text-blue-700',
    gradient: 'from-blue-500 to-indigo-600',
    progressBar: 'bg-blue-500',
    ring: '#3b82f6',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-800',
    text: 'text-violet-700',
    gradient: 'from-violet-500 to-purple-600',
    progressBar: 'bg-violet-500',
    ring: '#8b5cf6',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
    text: 'text-amber-700',
    gradient: 'from-amber-400 to-orange-500',
    progressBar: 'bg-amber-500',
    ring: '#f59e0b',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    text: 'text-emerald-700',
    gradient: 'from-emerald-500 to-teal-600',
    progressBar: 'bg-emerald-500',
    ring: '#10b981',
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-800',
    text: 'text-rose-700',
    gradient: 'from-rose-500 to-pink-600',
    progressBar: 'bg-rose-500',
    ring: '#f43f5e',
  },
}
