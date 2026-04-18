import { createClient } from '@/lib/supabase-server'
import { redirect, notFound } from 'next/navigation'
import OlePrepClient from './OlePrepClient'
import { OlePrepData } from '@/lib/ole-prep-types'

import physiologicOpticsData from '@/data/ole-prep/physiologic-optics'
import binocularVisionData from '@/data/ole-prep/binocular-vision'
import theoreticalOpticsData from '@/data/ole-prep/theoretical-optics'
import phorometryData from '@/data/ole-prep/phorometry'

const DATA_MAP: Record<string, OlePrepData> = {
  'physiologic-optics': physiologicOpticsData,
  'binocular-vision': binocularVisionData,
  'theoretical-optics': theoreticalOpticsData,
  'phorometry': phorometryData,
}

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

  return <OlePrepClient data={data} />
}
