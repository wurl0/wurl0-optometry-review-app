import { createClient } from '@/lib/supabase-server'
import { redirect, notFound } from 'next/navigation'
import OlePrepClient from './OlePrepClient'
import { OlePrepData } from '@/lib/ole-prep-types'
import { SUBJECTS } from '@/lib/subjects'

import physiologicOpticsData from '@/data/ole-prep/physiologic-optics'
import binocularVisionData from '@/data/ole-prep/binocular-vision'
import theoreticalOpticsData from '@/data/ole-prep/theoretical-optics'
import phorometryData from '@/data/ole-prep/phorometry'
import primaryEyeCareData from '@/data/ole-prep/primary-eye-care'
import { ocularAnatomyData } from '@/data/ole-prep/ocular-anatomy'
import { generalAnatomyData } from '@/data/ole-prep/general-anatomy'
import { ocularDiseaseData } from '@/data/ole-prep/ocular-disease'
import { generalPharmacologyData } from '@/data/ole-prep/general-pharmacology'
import { ocularPharmacologyData } from '@/data/ole-prep/ocular-pharmacology'
import { practicalMechanicalOpticsData } from '@/data/ole-prep/practical-mechanical-optics'
import { optometryConstantsData } from '@/data/ole-prep/optometry-constants'

const DATA_MAP: Record<string, OlePrepData> = {
  'physiologic-optics': physiologicOpticsData,
  'binocular-vision': binocularVisionData,
  'theoretical-optics': theoreticalOpticsData,
  'phorometry': phorometryData,
  'primary-eye-care': primaryEyeCareData,
  'ocular-anatomy': ocularAnatomyData,
  'general-anatomy': generalAnatomyData,
  'ocular-disease': ocularDiseaseData,
  'general-pharmacology': generalPharmacologyData,
  'ocular-pharmacology': ocularPharmacologyData,
  'practical-mechanical-optics': practicalMechanicalOpticsData,
  'optometry-constants': optometryConstantsData,
}

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
  const data = DATA_MAP[subject]
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
