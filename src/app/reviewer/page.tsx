import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import { SUBJECTS, ITEMS, ITEM_BY_ID, READINESS_ITEM_ID, type Item } from '@/lib/reviewer-manifest'
import { canOpenCockpit, canOpenItem, type Access } from '@/lib/access'

// Dynamic cockpit for the Top 2 reviewer. Renders only the items a user may open
// (admin sees everything). Non-cockpit users are sent home by middleware/this guard.
export default async function ReviewerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data } = await supabase
    .from('profiles')
    .select('approved, tier, grants')
    .eq('user_id', user.id)
    .single()
  const profile = data as { approved: boolean; tier: string; grants: string[] } | null
  if (profile && !profile.approved) redirect('/pending')

  const access: Access = {
    tier: profile?.tier ?? 'base',
    grants: profile?.grants ?? [],
    isEnvAdmin: user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL,
  }
  if (!canOpenCockpit(access)) redirect('/')

  const can = (i: Item) => canOpenItem(access, i)
  const readinessItem = ITEM_BY_ID.get(READINESS_ITEM_ID)
  const showReadiness = !!readinessItem && can(readinessItem)
  const mocks = ITEMS.filter(i => i.subject === 'GLOBAL' && i.type === 'mock' && can(i))
  const subjects = SUBJECTS
    .map(s => ({ s, items: ITEMS.filter(i => i.subject === s.code && can(i)) }))
    .filter(g => g.items.length > 0)
  const nothing = mocks.length === 0 && subjects.length === 0

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-teal-700">WAA · BOARD REVIEW 2026</p>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">Dr. Wyrlo Top 2 Reviewer</h1>
          </div>
          <Link href="/" className="text-sm text-teal-600 hover:underline font-medium">← Home</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {showReadiness && (
          <Link href="/readiness"
            className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-5 py-4 mb-6 hover:border-teal-300 transition-colors">
            <div>
              <p className="text-sm font-bold text-gray-900">📊 Board Readiness</p>
              <p className="text-xs text-gray-500 mt-0.5">Your weighted GWA and what to revisit, from every exam you take</p>
            </div>
            <span className="text-teal-600 text-lg">→</span>
          </Link>
        )}

        {mocks.length > 0 && (
          <section className="mb-7">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full board simulation</p>
            <div className="space-y-2">
              {mocks.map(m => (
                <a key={m.id} href={m.path}
                  className="flex items-center justify-between bg-gradient-to-r from-teal-600 to-emerald-700 rounded-2xl px-5 py-4 hover:from-teal-700 hover:to-emerald-800 transition-colors">
                  <div>
                    <p className="text-sm font-bold text-white">🏆 {m.label}</p>
                    {m.sub && <p className="text-xs text-teal-100 mt-0.5">{m.sub}</p>}
                  </div>
                  <span className="text-white text-lg">→</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {subjects.length > 0 && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Subjects</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {subjects.map(({ s, items }) => (
                <div key={s.code} className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center">{s.code}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm leading-tight">{s.name}</p>
                      <p className="text-xs text-gray-400">{s.weight}% of exam</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map(i => (
                      <a key={i.id} href={i.path}
                        className="text-xs font-medium text-teal-700 border border-gray-200 rounded-lg px-2.5 py-1.5 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors">
                        {i.label.split(' — ')[1] ?? i.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {nothing && (
          <p className="text-sm text-gray-500">Nothing has been shared with you yet. Granted reviewers, exams, and preboards will appear here.</p>
        )}

        <p className="text-[11px] text-gray-400 mt-8 border-t border-gray-200 pt-4">
          WAA · Board Review 2026 · personal study materials
        </p>
      </main>
    </div>
  )
}
