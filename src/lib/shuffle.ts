// Shared shuffling helpers for the quiz surfaces.
//
// Question ORDER has always been randomized; OPTION order was not, which left the
// correct answer sitting in the same slot every sitting (an answer-position tell the
// Top 2 exams already guard against). shuffleOptions closes that gap the same way
// NotesQuiz does: reorder the options and remap `correct` by finding where the
// originally-correct option landed, so scoring stays correct regardless of order.

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a
}

// Reorder an MCQ's options and remap its numeric `correct` index. TF questions and any
// item without options or without a numeric answer are returned untouched.
export function shuffleOptions<T extends { options?: string[]; correct: number | boolean }>(q: T): T {
  if (!q.options || typeof q.correct !== 'number') return q
  const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correct }))
  const s = shuffle(indexed)
  return { ...q, options: s.map(x => x.opt), correct: s.findIndex(x => x.isCorrect) }
}
