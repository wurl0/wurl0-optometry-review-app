import { notFound } from 'next/navigation'
import { SUBJECTS } from '@/lib/subjects'
import NotesClient from './NotesClient'
import physioNotes from '@/data/notes/physiologic-optics'
import bvNotes from '@/data/notes/binocular-vision'
import { NotesData } from '@/lib/notes-types'

const NOTES_MAP: Record<string, NotesData> = {
  'physiologic-optics': physioNotes,
  'binocular-vision': bvNotes,
}

export default async function NotesPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const subjectMeta = SUBJECTS.find(s => s.slug === subject)
  if (!subjectMeta) notFound()

  const notes = NOTES_MAP[subject]

  if (!notes) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl mb-4">📖</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Notes Coming Soon</h2>
          <p className="text-sm text-gray-500">Reviewer notes for {subjectMeta.name} are being prepared.</p>
        </div>
      </div>
    )
  }

  return <NotesClient subject={subjectMeta} notes={notes} />
}
