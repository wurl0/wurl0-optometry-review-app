import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { SUBJECTS, COLOR_MAP } from '@/lib/subjects'
import { xpLevel } from '@/lib/gamification'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [attemptsRes, statsRes, badgesRes] = await Promise.all([
    supabase.from('exam_attempts').select('subject, score, total, percentage, created_at').eq('user_id', user.id).order('created_at', { ascending: false }),
    supabase.from('user_stats').select('xp, streak, daily_goal, daily_done, daily_date').eq('user_id', user.id).single(),
    supabase.from('user_badges').select('badge_id').eq('user_id', user.id),
  ])

  const attempts = attemptsRes.data
  const userStats = statsRes.data
  const badgeCount = badgesRes.data?.length ?? 0

  const statsBySubject: Record<string, { best: number; attempts: number }> = {}
  for (const a of attempts ?? []) {
    if (!statsBySubject[a.subject]) statsBySubject[a.subject] = { best: 0, attempts: 0 }
    statsBySubject[a.subject].attempts++
    if (a.percentage > statsBySubject[a.subject].best) statsBySubject[a.subject].best = a.percentage
  }

  const name = user.user_metadata?.full_name?.split(' ')[0] ?? 'there'

  const today = new Date().toISOString().split('T')[0]
  const xp = userStats?.xp ?? 0
  const streak = userStats?.streak ?? 0
  const dailyGoal = userStats?.daily_goal ?? 10
  const dailyDone = userStats?.daily_date === today ? (userStats?.daily_done ?? 0) : 0
  const { level, progress } = xpLevel(xp)

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
            <span className="font-bold text-gray-900">OptoPrep</span>
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
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-900">Hey {name} 👋</h1>
          <p className="text-gray-500 mt-1">Prep. Practice. Pass. — OLE 2026, let&apos;s go.</p>
        </div>

        {/* Gamification stats bar */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6 grid grid-cols-3 gap-4">
          {/* Streak */}
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{streak > 0 ? `🔥 ${streak}` : '—'}</div>
            <div className="text-xs text-gray-500 mt-0.5">{streak > 0 ? `day${streak > 1 ? 's' : ''} streak` : 'No streak yet'}</div>
          </div>

          {/* XP / Level */}
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600">Lv {level}</div>
            <div className="text-xs text-gray-500 mt-0.5">{xp} XP total</div>
            <div className="mt-1.5 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Daily goal ring */}
          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" className="mb-1">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" strokeWidth="4" />
              <circle
                cx="20" cy="20" r="16"
                fill="none"
                stroke={dailyDone >= dailyGoal ? '#22c55e' : '#14b8a6'}
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 16}`}
                strokeDashoffset={`${2 * Math.PI * 16 * (1 - Math.min(1, dailyDone / dailyGoal))}`}
                strokeLinecap="round"
                transform="rotate(-90 20 20)"
              />
            </svg>
            <div className="text-xs text-gray-500">{dailyDone}/{dailyGoal} today</div>
          </div>
        </div>

        {/* Badge count */}
        {badgeCount > 0 && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs text-gray-500">{badgeCount} badge{badgeCount > 1 ? 's' : ''} earned</span>
          </div>
        )}

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
              <div
                key={subject.slug}
                className={`bg-white rounded-2xl border-2 ${c.border} p-5`}
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
                <div className="mt-4 space-y-2">
                  <Link
                    href={`/notes/${subject.slug}`}
                    className={`block w-full text-center text-xs font-semibold py-2 rounded-lg border ${c.border} ${c.text} hover:${c.bg} transition-colors`}
                  >
                    📖 Notes & Reviewer
                  </Link>
                  <div className="flex gap-2">
                    <Link
                      href={`/practice/${subject.slug}`}
                      className="flex-1 text-center text-xs font-semibold py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Guided Practice
                    </Link>
                    <Link
                      href={`/exam/${subject.slug}`}
                      className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    >
                      Full Exam
                    </Link>
                  </div>
                </div>
              </div>
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
