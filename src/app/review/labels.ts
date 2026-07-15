import { SUBJECTS } from '@/lib/subjects'
import { SUBJECTS as TOP2_SUBJECTS } from '@/lib/reviewer-manifest'

// A card's `subject` is whatever its source bank uses: a slug like 'primary-eye-care'
// from the main app, or a Top 2 letter code like 'C'. Resolve either to a display name.
export function subjectLabel(subject: string): string {
  const bank = SUBJECTS.find(s => s.slug === subject)
  if (bank) return bank.name
  const top2 = TOP2_SUBJECTS.find(s => s.code === subject)
  if (top2) return top2.name
  return subject
}
