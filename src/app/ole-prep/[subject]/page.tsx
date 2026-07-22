import { createClient } from '@/lib/supabase-server'
import { redirect, notFound } from 'next/navigation'
import OlePrepClient from './OlePrepClient'
import { SUBJECTS } from '@/lib/subjects'
import { OLE_PREP_MAP } from '@/lib/notes-registry'

const REGULAR_SUBJECT_SLUGS = SUBJECTS.filter(s => !s.isBonus).map(s => s.slug)

export default async function OlePrepSubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { subject } = await params
  const data = OLE_PREP_MAP[subject]
  if (!data) notFound()

  // Bonus subject: check unlock eligibility
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (subjectMeta?.isBonus) {
    const isAdmin =
      user.email === process.env.ADMIN_EMAIL ||
      user.id === process.env.ADMIN_USER_ID

    if (!isAdmin) {
      const { data: attempts } = await supabase
        .from('exam_attempts')
        .select('subject')
        .eq('user_id', user.id)

      const attempted = new Set((attempts ?? []).map(a => a.subject))
      const allDone = REGULAR_SUBJECT_SLUGS.every(slug => attempted.has(slug))

      if (!allDone) redirect('/ole-prep')
    }
  }

  return <OlePrepClient data={data} />
}
