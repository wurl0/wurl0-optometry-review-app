import { notFound } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import ExamClient from './ExamClient'
import physioQ from '@/data/physiologic-optics.json'
import bvQ from '@/data/binocular-vision.json'
import theoQ from '@/data/theoretical-optics.json'
import phoroQ from '@/data/phorometry.json'
import pecQ from '@/data/primary-eye-care.json'

const QUESTION_MAP: Record<string, unknown[]> = {
  'physiologic-optics': physioQ,
  'binocular-vision': bvQ,
  'theoretical-optics': theoQ,
  'phorometry': phoroQ,
  'primary-eye-care': pecQ,
}

export default async function ExamPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (!subjectMeta || !QUESTION_MAP[subject]) notFound()

  return <ExamClient subject={subjectMeta} questions={QUESTION_MAP[subject] as never} />
}
