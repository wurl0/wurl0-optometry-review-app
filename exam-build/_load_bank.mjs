// Load one main-app bank exactly as src/lib/banks.ts serves it, for the seeders.
// Most banks are src/data/<slug>.json. ocular-anatomy is served from the notes-quiz .ts via
// convertQuizQuestions (mcq + tf only; 'identification' items are not served), so mirror that.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const FROM_NOTES_QUIZ = new Set(['ocular-anatomy'])

export function loadBank(slug) {
  if (!FROM_NOTES_QUIZ.has(slug)) {
    const file = join('src', 'data', `${slug}.json`)
    return { file, questions: JSON.parse(readFileSync(file, 'utf8')) }
  }
  const file = join('src', 'data', 'notes-quiz', `${slug}.ts`)
  // The .ts is a single object literal: drop the import and the type annotation, then evaluate it.
  const src = readFileSync(file, 'utf8')
    .replace(/^import .*$/m, '')
    .replace(/export const \w+\s*:\s*\w+\s*=/, 'return')
  const data = new Function(src)()
  const questions = []
  for (const q of data.questions) {
    if (q.kind === 'mcq') questions.push({ type: 'mcq', stem: q.stem, options: q.options, correct: q.correct, explanation: q.answer })
    else if (q.kind === 'tf') questions.push({ type: 'tf', stem: q.stem, correct: q.correct, explanation: q.answer })
  }
  return { file, questions }
}
