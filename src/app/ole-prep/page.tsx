import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { SUBJECTS, COLOR_MAP, SUBJECT_GROUPS } from '@/lib/subjects'

export default async function OlePrepPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const isAdmin =
    user.email === process.env.ADMIN_EMAIL ||
    user.id === process.env.ADMIN_USER_ID

  const { data: attempts } = await supabase
    .from('exam_attempts')
    .select('subject')
    .eq('user_id', user.id)

  const attemptedSlugs = new Set((attempts ?? []).map(a => a.subject))
  const regularSubjects = SUBJECTS.filter(s => s.olePrep && !s.isBonus)
  const bonusSubject = SUBJECTS.find(s => s.isBonus && s.olePrep)
  const completedCount = regularSubjects.filter(s => attemptedSlugs.has(s.slug)).length
  const totalRequired = regularSubjects.length
  const bonusUnlocked = isAdmin || completedCount >= totalRequired

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">← Back</Link>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-gray-900">OLE Board Style</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">OLE Board Style Prep</h1>
          <p className="text-gray-500 mt-1 text-sm">Mnemonics, high-yield facts, board traps, and active recall — built for exam day.</p>
        </div>

        {/* How to use */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-amber-800 mb-1">How to use this section</p>
          <ul className="text-xs text-amber-700 space-y-1 list-disc list-inside">
            <li>Read mnemonics aloud — say the device, then the breakdown</li>
            <li>Board Traps: try to answer before revealing the correct answer</li>
            <li>Active Recall: cover the answer, recall from memory, then check</li>
          </ul>
        </div>

        {/* Subject cards, grouped by the 8 board areas (mirrors the home page) */}
        <div className="space-y-8">
          {SUBJECT_GROUPS.map(group => {
            const groupSubjects = group.slugs
              .map(slug => SUBJECTS.find(s => s.slug === slug))
              .filter((s): s is (typeof SUBJECTS)[number] => !!s && !!s.olePrep && !s.isBonus)
            if (groupSubjects.length === 0) return null
            const gc = COLOR_MAP[group.accent]
            return (
              <section key={group.id} className={`rounded-3xl border ${gc.border} ${gc.bg} p-4 sm:p-5`}>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h2 className={`text-sm font-bold ${gc.text} leading-tight`}>{group.title}</h2>
                  <span className="shrink-0 text-[11px] font-semibold text-gray-600 bg-white/70 border border-gray-200 px-2 py-0.5 rounded-full">
                    {group.weight}% of written exam
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {groupSubjects.map(subject => {
                    const c = COLOR_MAP[subject.color]
                    return (
                      <Link
                        key={subject.slug}
                        href={`/ole-prep/${subject.slug}`}
                        className="block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className={`bg-gradient-to-br ${c.gradient} px-5 py-4`}>
                          <span className="text-3xl">{subject.icon}</span>
                          <h3 className="text-base font-bold text-white mt-2 leading-tight">{subject.name}</h3>
                        </div>
                        <div className="px-5 py-4">
                          <div className="flex flex-wrap gap-1.5">
                            {['Mnemonics', 'High-Yield', 'Board Traps', 'Active Recall'].map(tag => (
                              <span key={tag} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>{tag}</span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{subject.description}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* Bonus subject */}
        {bonusSubject && (
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-600">Bonus</span>
              <div className="flex-1 h-px bg-yellow-200" />
            </div>

            {bonusUnlocked ? (
              <Link
                href={`/ole-prep/${bonusSubject.slug}`}
                className="block bg-white rounded-2xl overflow-hidden border-2 border-yellow-300 hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{bonusSubject.icon}</span>
                    <span className="text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                      {isAdmin ? 'Admin' : '🔓 Unlocked'}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-white mt-2 leading-tight">{bonusSubject.name}</h2>
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {['Gullstrand', 'Hofstetter\'s', 'Prentice\'s Rule', 'All Formulas'].map(tag => (
                      <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800">{tag}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{bonusSubject.description}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-dashed border-yellow-300 opacity-80">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl grayscale">{bonusSubject.icon}</span>
                    <span className="text-xs font-bold bg-yellow-200 text-yellow-700 px-2 py-0.5 rounded-full">
                      🔒 Locked
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-yellow-800 mt-2 leading-tight">{bonusSubject.name}</h2>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-gray-500 mb-3">{bonusSubject.description}</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
                    <p className="text-xs font-semibold text-yellow-800 mb-1">
                      Complete at least 1 quiz for every subject to unlock
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-yellow-200 rounded-full h-1.5">
                        <div
                          className="bg-yellow-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${(completedCount / totalRequired) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-yellow-700 shrink-0">
                        {completedCount}/{totalRequired}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
