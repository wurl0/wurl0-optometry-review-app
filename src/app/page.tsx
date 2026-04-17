import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { SUBJECTS, COLOR_MAP } from '@/lib/subjects'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: attempts } = await supabase
    .from('exam_attempts')
    .select('subject, score, total, percentage, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const statsBySubject: Record<string, { best: number; attempts: number }> = {}
  for (const a of attempts ?? []) {
    if (!statsBySubject[a.subject]) statsBySubject[a.subject] = { best: 0, attempts: 0 }
    statsBySubject[a.subject].attempts++
    if (a.percentage > statsBySubject[a.subject].best) statsBySubject[a.subject].best = a.percentage
  }

  const name = user.user_metadata?.full_name?.split(' ')[0] ?? 'there'

  async function handleSignOut() {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">👁️</span>
            <span className="font-bold text-gray-900">OLE Review</span>
            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium">2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:block">{user.email}</span>
            <form action={handleSignOut}>
              <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Sign out</button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Hey {name} 👋</h1>
          <p className="text-gray-500 mt-1">Pick a subject to practice. OLE 2026 — you got this.</p>
        </div>

        {/* Overall stats */}
        {(attempts?.length ?? 0) > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{attempts!.length}</div>
              <div className="text-xs text-gray-500 mt-0.5">Total attempts</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-teal-600">
                {Math.round((attempts!.reduce((sum, a) => sum + a.percentage, 0) / attempts!.length))}%
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Avg score</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {Object.keys(statsBySubject).length}/{SUBJECTS.length}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Subjects tried</div>
            </div>
          </div>
        )}

        {/* Subject cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {SUBJECTS.map(subject => {
            const c = COLOR_MAP[subject.color]
            const stats = statsBySubject[subject.slug]
            return (
              <Link
                key={subject.slug}
                href={`/exam/${subject.slug}`}
                className={`group bg-white rounded-2xl border-2 ${c.border} p-5 hover:shadow-md transition-all hover:-translate-y-0.5`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                    {subject.questionCount} questions
                  </span>
                  {stats && (
                    <span className={`text-xs font-bold ${stats.best >= 75 ? 'text-green-600' : 'text-orange-500'}`}>
                      Best: {Math.round(stats.best)}%
                    </span>
                  )}
                </div>
                <h2 className={`text-lg font-bold ${c.text} mb-1`}>{subject.name}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{subject.description}</p>
                {stats && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Best score</span>
                      <span>{Math.round(stats.best)}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${stats.best >= 75 ? 'bg-green-500' : 'bg-orange-400'}`}
                        style={{ width: `${stats.best}%` }}
                      />
                    </div>
                  </div>
                )}
                <div className={`mt-4 text-xs font-semibold ${c.text} group-hover:underline`}>
                  {stats ? `${stats.attempts} attempt${stats.attempts > 1 ? 's' : ''} → Practice again →` : 'Start practice →'}
                </div>
              </Link>
            )
          })}
        </div>

        {/* Coming soon */}
        <div className="mt-6 bg-gray-100 rounded-2xl p-5 border border-dashed border-gray-300">
          <p className="text-sm font-semibold text-gray-400">Coming soon</p>
          <p className="text-xs text-gray-400 mt-0.5">Ocular Disease · Primary Care · Pharmacology · Ethics · Ocular Anatomy</p>
        </div>
      </main>
    </div>
  )
}
