import { notFound } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import NotesClient from './NotesClient'
import physioNotes from '@/data/notes/physiologic-optics'
import bvNotes from '@/data/notes/binocular-vision'
import theoreticalOpticsNotes from '@/data/notes/theoretical-optics'
import phorometryNotes from '@/data/notes/phorometry'
import primaryEyeCareNotes from '@/data/notes/primary-eye-care'
import { ocularAnatomyNotes } from '@/data/notes/ocular-anatomy'
import { generalAnatomyNotes } from '@/data/notes/general-anatomy'
import { ocularDiseaseNotes } from '@/data/notes/ocular-disease'
import { generalPharmacologyNotes } from '@/data/notes/general-pharmacology'
import { ocularPharmacologyNotes } from '@/data/notes/ocular-pharmacology'
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
import { NotesData } from '@/lib/notes-types'
import { NotesQuizData } from '@/lib/notes-quiz-types'

const NOTES_MAP: Record<string, NotesData> = {
  'physiologic-optics': physioNotes,
  'binocular-vision': bvNotes,
  'theoretical-optics': theoreticalOpticsNotes,
  'phorometry': phorometryNotes,
  'primary-eye-care': primaryEyeCareNotes,
  'ocular-anatomy': ocularAnatomyNotes,
  'general-anatomy': generalAnatomyNotes,
  'ocular-disease': ocularDiseaseNotes,
  'general-pharmacology': generalPharmacologyNotes,
  'ocular-pharmacology': ocularPharmacologyNotes,
}

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
}

export default async function NotesPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
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

  return <NotesClient subject={subjectMeta} notes={notes} quiz={QUIZ_MAP[subject]} />
}
