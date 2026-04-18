import { notFound } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import PracticeClient from './PracticeClient'
import physioQ from '@/data/physiologic-optics.json'
import bvQ from '@/data/binocular-vision.json'
import theoQ from '@/data/theoretical-optics.json'
import phoroQ from '@/data/phorometry.json'
import { Question } from '@/lib/types'

const QUESTION_MAP: Record<string, unknown[]> = {
  'physiologic-optics': physioQ,
  'binocular-vision': bvQ,
  'theoretical-optics': theoQ,
  'phorometry': phoroQ,
}

export default async function PracticePage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (!subjectMeta || !QUESTION_MAP[subject]) notFound()

  return <PracticeClient subject={subjectMeta} questions={QUESTION_MAP[subject] as Question[]} />
}
