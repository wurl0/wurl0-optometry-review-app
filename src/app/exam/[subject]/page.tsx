import { notFound } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import ExamClient from './ExamClient'
import physioQ from '@/data/physiologic-optics.json'
import bvQ from '@/data/binocular-vision.json'
import theoQ from '@/data/theoretical-optics.json'
import phoroQ from '@/data/phorometry.json'
import pecQ from '@/data/primary-eye-care.json'
import oaQ from '@/data/ocular-anatomy.json'
import pmoQ from '@/data/practical-mechanical-optics.json'
import lvQ from '@/data/low-vision.json'
import odQ from '@/data/ocular-disease.json'
import opQ from '@/data/ocular-pharmacology.json'
import gpQ from '@/data/general-pharmacology.json'
import gaQ from '@/data/general-anatomy.json'
import pedsQ from '@/data/pediatric-optometry.json'
import clQ from '@/data/contact-lens.json'

const QUESTION_MAP: Record<string, unknown[]> = {
  'physiologic-optics': physioQ,
  'binocular-vision': bvQ,
  'theoretical-optics': theoQ,
  'phorometry': phoroQ,
  'primary-eye-care': pecQ,
  'ocular-anatomy': oaQ,
  'practical-mechanical-optics': pmoQ,
  'low-vision': lvQ,
  'ocular-disease': odQ,
  'ocular-pharmacology': opQ,
  'general-pharmacology': gpQ,
  'general-anatomy': gaQ,
  'pediatric-optometry': pedsQ,
  'contact-lens': clQ,
}

export default async function ExamPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (!subjectMeta || !QUESTION_MAP[subject]) notFound()

  return <ExamClient subject={subjectMeta} questions={QUESTION_MAP[subject] as never} />
}
