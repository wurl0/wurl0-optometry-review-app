export interface Question {
  type: 'mcq' | 'tf'
  stem: string
  options?: string[]
  correct: number | boolean
  explanation: string
  isTrap?: boolean
  module?: string
  category?: string
}

export interface Subject {
  slug: string
  name: string
  description: string
  color: string
  questionCount: number
}

export interface ExamResult {
  subject: string
  score: number
  total: number
  percentage: number
  answers: (number | boolean | null)[]
  completedAt: string
}
