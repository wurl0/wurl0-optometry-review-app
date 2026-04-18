export type QuizQuestion =
  | { kind: 'mcq'; stem: string; options: string[]; correct: number; answer: string }
  | { kind: 'tf'; stem: string; correct: boolean; answer: string }
  | { kind: 'identification'; stem: string; answer: string }

export interface NotesQuizData {
  subject: string
  slug: string
  questions: QuizQuestion[]
}
