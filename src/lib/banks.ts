import physioQ from '@/data/physiologic-optics.json'
import bvQ from '@/data/binocular-vision.json'
import theoQ from '@/data/theoretical-optics.json'
import phoroQ from '@/data/phorometry.json'
import pecQ from '@/data/primary-eye-care.json'
import pmoQ from '@/data/practical-mechanical-optics.json'
import lvQ from '@/data/low-vision.json'
import odQ from '@/data/ocular-disease.json'
import opQ from '@/data/ocular-pharmacology.json'
import gpQ from '@/data/general-pharmacology.json'
import gaQ from '@/data/general-anatomy.json'
import pedsQ from '@/data/pediatric-optometry.json'
import clQ from '@/data/contact-lens.json'
import ejQ from '@/data/ethics-and-jurisprudence.json'
import { ocularAnatomyQuiz } from '@/data/notes-quiz/ocular-anatomy'
import { QuizQuestion } from './notes-quiz-types'
import { Question } from './types'

// The 15 practice banks, keyed by subject slug. Server-side only in practice: these are
// ~1,700 questions, so a page must slice what it needs rather than ship the whole map.

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

export const QUESTION_MAP: Record<string, unknown[]> = {
  'physiologic-optics': physioQ,
  'binocular-vision': bvQ,
  'theoretical-optics': theoQ,
  'phorometry': phoroQ,
  'primary-eye-care': pecQ,
  'general-anatomy': gaQ,
  'ocular-anatomy': convertQuizQuestions(ocularAnatomyQuiz.questions),
  'ocular-disease': odQ,
  'general-pharmacology': gpQ,
  'ocular-pharmacology': opQ,
  'practical-mechanical-optics': pmoQ,
  'low-vision': lvQ,
  'pediatric-optometry': pedsQ,
  'contact-lens': clQ,
  'ethics-and-jurisprudence': ejQ,
}

export function bankFor(slug: string): Question[] | undefined {
  return QUESTION_MAP[slug] as Question[] | undefined
}
