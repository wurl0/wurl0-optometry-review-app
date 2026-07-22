import { notFound } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import NotesClient from './NotesClient'
import { NOTES_MAP } from '@/lib/notes-registry'
import physioQuiz from '@/data/notes-quiz/physiologic-optics'
import bvQuiz from '@/data/notes-quiz/binocular-vision'
import theoreticalOpticsQuiz from '@/data/notes-quiz/theoretical-optics'
import phorometryQuiz from '@/data/notes-quiz/phorometry'
import primaryEyeCareQuiz from '@/data/notes-quiz/primary-eye-care'
import { ocularAnatomyQuiz } from '@/data/notes-quiz/ocular-anatomy'
import { generalAnatomyQuiz } from '@/data/notes-quiz/general-anatomy'
import { ocularDiseaseQuiz } from '@/data/notes-quiz/ocular-disease'
import { generalPharmacologyQuiz } from '@/data/notes-quiz/general-pharmacology'
import { ocularPharmacologyQuiz } from '@/data/notes-quiz/ocular-pharmacology'
import { practicalMechanicalOpticsQuiz } from '@/data/notes-quiz/practical-mechanical-optics'
import { lowVisionQuiz } from '@/data/notes-quiz/low-vision'
import { pediatricOptometryQuiz } from '@/data/notes-quiz/pediatric-optometry'
import { contactLensQuiz } from '@/data/notes-quiz/contact-lens'
import { ethicsAndJurisprudenceQuiz } from '@/data/notes-quiz/ethics-and-jurisprudence'
import { NotesQuizData } from '@/lib/notes-quiz-types'

const QUIZ_MAP: Record<string, NotesQuizData> = {
  'physiologic-optics': physioQuiz,
  'binocular-vision': bvQuiz,
  'theoretical-optics': theoreticalOpticsQuiz,
  'phorometry': phorometryQuiz,
  'primary-eye-care': primaryEyeCareQuiz,
  'ocular-anatomy': ocularAnatomyQuiz,
  'general-anatomy': generalAnatomyQuiz,
  'ocular-disease': ocularDiseaseQuiz,
  'general-pharmacology': generalPharmacologyQuiz,
  'ocular-pharmacology': ocularPharmacologyQuiz,
  'practical-mechanical-optics': practicalMechanicalOpticsQuiz,
  'low-vision': lowVisionQuiz,
  'pediatric-optometry': pediatricOptometryQuiz,
  'contact-lens': contactLensQuiz,
  'ethics-and-jurisprudence': ethicsAndJurisprudenceQuiz,
}

export default async function NotesPage({
  params,
  searchParams,
}: {
  params: Promise<{ subject: string }>
  searchParams: Promise<{ q?: string }>
}) {
  const { subject } = await params
  // `?q=` arrives from the global search on the home page, so the subject opens with
  // the same keyword already filtering and highlighted.
  const { q } = await searchParams
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (!subjectMeta) notFound()

  const notes = NOTES_MAP[subject]

  if (!notes) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl mb-4">📖</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Notes Coming Soon</h2>
          <p className="text-sm text-gray-500">Reviewer notes for {subjectMeta.name} are being prepared.</p>
        </div>
      </div>
    )
  }

  return (
    <NotesClient
      subject={subjectMeta}
      notes={notes}
      quiz={QUIZ_MAP[subject]}
      initialQuery={q ?? ''}
    />
  )
}
