import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { SUBJECTS, COLOR_MAP } from '@/lib/subjects'
import { xpLevel } from '@/lib/gamification'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [attemptsRes, statsRes, badgesRes, progressRes] = await Promise.all([
    supabase.from('exam_attempts').select('subject, score, total, percentage, created_at').eq('user_id', user.id).order('created_at', { ascending: false }),
    supabase.from('user_stats').select('xp, streak, daily_goal, daily_done, daily_date').eq('user_id', user.id).single(),
    supabase.from('user_badges').select('badge_id').eq('user_id', user.id),
    supabase.from('practice_progress').select('subject, level, passed').eq('user_id', user.id),
  ])

  const attempts = attemptsRes.data
  const userStats = statsRes.data
  const badgeCount = badgesRes.data?.length ?? 0

  // Map: subject → { 1: passed, 2: passed, 3: passed }
  const levelMap: Record<string, Record<number, boolean>> = {}
  for (const row of progressRes.data ?? []) {
    if (!levelMap[row.subject]) levelMap[row.subject] = {}
    levelMap[row.subject][row.level] = row.passed
  }
  const examUnlocked = (slug: string) =>
    !!(levelMap[slug]?.[1] && levelMap[slug]?.[2] && levelMap[slug]?.[3])

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
            {(user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL) && (
              <Link href="/admin" className="text-xs font-medium text-teal-600 hover:underline">Admin</Link>
            )}
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
                className="bg-white rounded-2xl overflow-hidden border border-gray-200"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${c.gradient} px-5 pt-5 pb-4`}>
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{subject.icon}</span>
                  </div>
                  <h2 className="text-base font-bold text-white mt-3 leading-tight">{subject.name}</h2>
                  {stats && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-white/70 mb-1">
                        <span>Best score</span>
                        <span className="font-semibold text-white">{Math.round(stats.best)}%</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white/80 rounded-full" style={{ width: `${stats.best}%` }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="px-5 py-4">
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{subject.description}</p>
                  {/* Level progress pips */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {[1, 2, 3].map(lvl => {
                      const passed = levelMap[subject.slug]?.[lvl]
                      return (
                        <div key={lvl} className="flex items-center gap-1">
                          <div className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center ${passed ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                            {lvl}
                          </div>
                          {lvl < 3 && <div className={`w-3 h-0.5 ${passed ? 'bg-green-400' : 'bg-gray-200'}`} />}
                        </div>
                      )
                    })}
                    <span className="text-xs text-gray-400 ml-1">
                      {examUnlocked(subject.slug) ? '· Exam unlocked ✓' : '· Complete all levels to unlock exam'}
                    </span>
                  </div>

                  <div className="space-y-2">
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
                        Levels & Practice
                      </Link>
                      {examUnlocked(subject.slug) ? (
                        <Link
                          href={`/exam/${subject.slug}`}
                          className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                        >
                          Full Exam
                        </Link>
                      ) : (
                        <div className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed select-none">
                          🔒 Full Exam
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* OLE Board Style Prep */}
        <div className="mt-6">
          <Link
            href="/ole-prep"
            className="flex items-center justify-between bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl px-5 py-4 hover:from-violet-700 hover:to-purple-800 transition-colors"
          >
            <div>
              <p className="text-sm font-bold text-white">🎓 OLE Board Style Prep</p>
              <p className="text-xs text-violet-200 mt-0.5">Mnemonics · High-yield facts · Board traps · Active recall</p>
            </div>
            <span className="text-white text-lg">→</span>
          </Link>
        </div>

        {/* Coming soon */}
        <div className="mt-4 bg-gray-100 rounded-2xl p-5 border border-dashed border-gray-300">
          <p className="text-sm font-semibold text-gray-400">Coming soon</p>
          <p className="text-xs text-gray-400 mt-0.5">Pharmacology · Ethics · Special Areas</p>
        </div>

        {/* Changelog */}
        <div className="mt-6">
          <details className="group">
            <summary className="cursor-pointer text-xs text-gray-400 hover:text-gray-600 transition-colors select-none list-none flex items-center gap-1.5">
              <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
              What&apos;s new in OptoPrep
            </summary>
            <div className="mt-3 space-y-2">
              {[
                { version: 'v0.8', date: 'Apr 2026', note: 'Ocular Disease — notes reviewer, OLE prep, and quiz covering eyelid to neuro-ophthalmology' },
                { version: 'v0.7', date: 'Apr 2026', note: 'General Anatomy — notes reviewer, OLE prep, and quiz covering 8 body systems' },
                { version: 'v0.6', date: 'Apr 2026', note: 'Ocular Anatomy — full notes reviewer with 5 inline SVG diagrams, OLE prep, and quiz' },
                { version: 'v0.5', date: 'Apr 2026', note: 'Added Primary Eye Care — 151 practice questions across 6 modules' },
                { version: 'v0.4', date: 'Apr 2026', note: 'OLE Board Style Prep — mnemonics, board traps, and active recall for 4 subjects' },
                { version: 'v0.3', date: 'Mar 2026', note: 'Level system — practice unlocks in 3 stages (L1/L2/L3) before full exam access' },
                { version: 'v0.2', date: 'Mar 2026', note: 'Notes & Reviewer — collapsible study notes with diagrams for 4 subjects' },
                { version: 'v0.1', date: 'Feb 2026', note: 'Launch — exam mode, practice mode, XP + streaks, badges' },
              ].map(({ version, date, note }) => (
                <div key={version} className="flex gap-3 items-start">
                  <span className="text-[10px] font-bold text-gray-400 shrink-0 mt-0.5 w-8">{version}</span>
                  <span className="text-[10px] text-gray-400 shrink-0 mt-0.5 w-16">{date}</span>
                  <span className="text-xs text-gray-500">{note}</span>
                </div>
              ))}
            </div>
          </details>
        </div>
      </main>
    </div>
  )
}
