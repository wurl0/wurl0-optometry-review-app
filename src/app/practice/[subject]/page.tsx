import { notFound, redirect } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import { createClient } from '@/lib/supabase-server'
import PracticeClient from './PracticeClient'
import physioQ from '@/data/physiologic-optics.json'
import bvQ from '@/data/binocular-vision.json'
import theoQ from '@/data/theoretical-optics.json'
import phoroQ from '@/data/phorometry.json'
import pecQ from '@/data/primary-eye-care.json'
import { generalAnatomyQuiz } from '@/data/notes-quiz/general-anatomy'
import { ocularAnatomyQuiz } from '@/data/notes-quiz/ocular-anatomy'
import { ocularDiseaseQuiz } from '@/data/notes-quiz/ocular-disease'
import { generalPharmacologyQuiz } from '@/data/notes-quiz/general-pharmacology'
import { ocularPharmacologyQuiz } from '@/data/notes-quiz/ocular-pharmacology'
import { practicalMechanicalOpticsQuiz } from '@/data/notes-quiz/practical-mechanical-optics'
import { QuizQuestion } from '@/lib/notes-quiz-types'
import { Question } from '@/lib/types'

function convertQuizQuestions(qs: QuizQuestion[]): Question[] {
  const result: Question[] = []
  for (const q of qs) {
    if (q.kind === 'mcq') {
      result.push({ type: 'mcq', stem: q.stem, options: q.options, correct: q.correct, explanation: q.answer })
    } else if (q.kind === 'tf') {
      result.push({ type: 'tf', stem: q.stem, correct: q.correct, explanation: q.answer })
    }
  }
  return result
}

const QUESTION_MAP: Record<string, unknown[]> = {
  'physiologic-optics': physioQ,
  'binocular-vision': bvQ,
  'theoretical-optics': theoQ,
  'phorometry': phoroQ,
  'primary-eye-care': pecQ,
  'general-anatomy': convertQuizQuestions(generalAnatomyQuiz.questions),
  'ocular-anatomy': convertQuizQuestions(ocularAnatomyQuiz.questions),
  'ocular-disease': convertQuizQuestions(ocularDiseaseQuiz.questions),
  'general-pharmacology': convertQuizQuestions(generalPharmacologyQuiz.questions),
  'ocular-pharmacology': convertQuizQuestions(ocularPharmacologyQuiz.questions),
  'practical-mechanical-optics': convertQuizQuestions(practicalMechanicalOpticsQuiz.questions),
}

export default async function PracticePage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (!subjectMeta || !QUESTION_MAP[subject]) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: progressRows } = await supabase
    .from('practice_progress')
    .select('level, passed, score, total, percentage')
    .eq('user_id', user.id)
    .eq('subject', subject)

  // Build map: level → { passed, score, total, percentage }
  const levelProgress: Record<number, { passed: boolean; score: number; total: number; percentage: number }> = {}
  for (const row of progressRows ?? []) {
    levelProgress[row.level] = {
      passed: row.passed,
      score: row.score ?? 0,
      total: row.total ?? 0,
      percentage: row.percentage ?? 0,
    }
  }

  return (
    <PracticeClient
      subject={subjectMeta}
      questions={QUESTION_MAP[subject] as Question[]}
      levelProgress={levelProgress}
    />
  )
}
