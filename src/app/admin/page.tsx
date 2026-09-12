'use client'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SUBJECTS, ITEMS } from '@/lib/reviewer-manifest'
import type { Readiness, Verdict } from '@/lib/readiness'

type ReadinessUser = {
  userId: string
  fullName: string | null
  email: string | null
  attemptCount: number
  lastAttemptAt: string | null
  readiness: Readiness
}

type Profile = {
  id: string
  full_name: string | null
  email: string | null
  approved: boolean
  approved_at: string | null
  created_at: string
  tier?: string | null
  grants?: string[] | null
  suspended?: boolean | null
  blocked_until?: string | null
}

const TIERS = ['base', 'select', 'full', 'admin'] as const
const GLOBAL_ITEMS = ITEMS.filter(i => i.subject === 'GLOBAL')
const shortLabel = (label: string) => label.split(' — ')[1] ?? label

// Three different kinds of work: a queue you empty, a registry you edit, a report you read.
type Tab = 'approvals' | 'access' | 'readiness' | 'usage'
const TABS: { id: Tab; label: string }[] = [
  { id: 'approvals', label: 'Approvals' },
  { id: 'access', label: 'Access' },
  { id: 'readiness', label: 'Readiness' },
  { id: 'usage', label: 'Usage' },
]

type PageUnit = { label: string; units: number; surface: string }
type TimelineEntry = { label: string; surface: string; at: string | null }
type UsageUser = {
  email: string | null; name: string | null; tier: string
  approved: boolean; suspended: boolean; createdAt: string | null; lastActive: string | null
  quizzes: number; reviews: number; pageViews: number; readMins: number; examMins: number; top2Reads: number
  current: string | null; currentAt: string | null; currentSurface: string
  topPages: PageUnit[]; timeline: TimelineEntry[]
}
type LiveUser = { name: string | null; email: string | null; label: string | null; surface: string; at: string | null }
type UsageData = {
  summary: {
    signups: number; approved: number; hasAccess: number; everActive: number
    active24h: number; active7d: number; active30d: number
  }
  live: LiveUser[]
  users: UsageUser[]
  topPages: { path: string; label: string; views: number; users: number }[]
  reading: { source: string; label: string; email: string | null; updatedAt: string | null }[]
  bySubject: { surface: string; subject: string; attempts: number; users: number; avgPct: number; who: string[] }[]
}

// Compact relative time, e.g. "3h", "2d", "just now".
function ago(iso: string | null): string {
  if (!iso) return 'never'
  const ms = Date.now() - new Date(iso).getTime()
  if (ms < 0) return 'just now'
  const m = Math.floor(ms / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d}d`
  return `${Math.floor(d / 30)}mo`
}

// No activity in the last 14 days. Kept at module scope so the Date.now read is
// outside component render (react-hooks/purity), matching ago() above.
function isIdle(iso: string | null): boolean {
  return !iso || Date.now() - new Date(iso).getTime() > 14 * 864e5
}

// A per-user block is active only while blocked_until is still in the future.
function isBlocked(iso: string | null | undefined): boolean {
  return !!iso && new Date(iso).getTime() > Date.now()
}
const isTab = (v: string | null): v is Tab => TABS.some(t => t.id === v)

// Same wording and colours as the user-facing /readiness page.
const VERDICT: Record<Verdict, { label: string; cls: string }> = {
  READY: { label: 'Board-ready', cls: 'bg-emerald-100 text-emerald-800' },
  BORDERLINE: { label: 'Borderline', cls: 'bg-amber-100 text-amber-800' },
  NOT_READY: { label: 'Not ready yet', cls: 'bg-rose-100 text-rose-800' },
  BUILDING: { label: 'Building', cls: 'bg-slate-100 text-slate-700' },
}

function scoreColor(pct: number | null): string {
  if (pct === null) return 'text-gray-400'
  if (pct >= 75) return 'text-emerald-600'
  if (pct >= 65) return 'text-amber-600'
  return 'text-rose-600'
}

function ReadinessCard({ u }: { u: ReadinessUser }) {
  const [open, setOpen] = useState(false)
  const r = u.readiness
  const v = VERDICT[r.verdict]

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{u.fullName ?? '—'}</p>
          <p className="text-xs text-gray-400 truncate">{u.email}</p>
          <p className="text-xs text-gray-300 mt-0.5">
            {u.attemptCount === 0
              ? 'No attempts logged'
              : `${u.attemptCount} attempt${u.attemptCount === 1 ? '' : 's'} · last ${new Date(u.lastAttemptAt as string).toLocaleDateString()}`}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <p className={`text-sm font-semibold ${scoreColor(r.projectedGwa)}`}>
              {r.projectedGwa ?? '—'}
            </p>
            <p className="text-xs text-gray-400">{r.measuredCount}/{SUBJECTS.length} subjects</p>
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${v.cls}`}>{v.label}</span>
        </div>
      </div>

      {u.attemptCount > 0 && (
        <>
          <button
            onClick={() => setOpen(o => !o)}
            className="mt-2 text-xs text-teal-600 hover:underline font-medium"
          >
            {open ? 'Hide subjects' : 'Show subjects'}
          </button>
          {open && (
            <div className="mt-2 border-t border-gray-100 pt-2 space-y-1">
              {[...r.subjects]
                .sort((a, b) => (a.avg ?? -1) - (b.avg ?? -1))
                .map(s => (
                  <div key={s.code} className="flex items-center justify-between gap-2 text-xs">
                    <span className="text-gray-600 min-w-0 truncate">
                      <b className="text-gray-400 mr-1">{s.code}</b>{s.name}
                      <span className="text-gray-300 ml-1">({s.weight}%)</span>
                    </span>
                    <span className="flex items-center gap-2 shrink-0">
                      <span className="text-gray-400">
                        {s.attempts === 0
                          ? '0 attempts'
                          : `${s.attempts} attempt${s.attempts === 1 ? '' : 's'} · ${s.items} item${s.items === 1 ? '' : 's'}`}
                      </span>
                      {s.avg !== null && !s.confident && (
                        <span className="text-amber-600 font-medium">provisional</span>
                      )}
                      {s.best !== null && <span className="text-gray-300">best {s.best}%</span>}
                      <span className={`font-semibold w-14 text-right ${scoreColor(s.avg)}`}>
                        {s.avg === null ? 'untested' : `${s.avg}%`}
                      </span>
                    </span>
                  </div>
                ))}
              {r.mockGwa !== null && (
                <p className="text-xs text-gray-400 pt-1">Latest mock GWA: {r.mockGwa}</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

function AccessEditor({ profile, onSaved }: {
  profile: Profile
  onSaved: (tier: string, grants: string[]) => void
}) {
  const [open, setOpen] = useState(false)
  const [tier, setTier] = useState<string>(profile.tier ?? 'base')
  const [grants, setGrants] = useState<string[]>(profile.grants ?? [])
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  function toggle(id: string) {
    setGrants(g => g.includes(id) ? g.filter(x => x !== id) : [...g, id])
  }

  async function save() {
    setSaving(true); setMsg('')
    const res = await fetch('/api/admin/access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId: profile.id, tier, grants }),
    })
    const json = await res.json()
    setSaving(false)
    if (json.error) { setMsg(json.error); return }
    setMsg('Saved')
    onSaved(tier, json.grants ?? grants)
  }

  return (
    <div className="mt-2 border-t border-gray-100 pt-2">
      <button onClick={() => setOpen(o => !o)} className="text-xs font-medium text-teal-600 hover:underline">
        {open ? 'Hide access' : 'Manage access'}
      </button>
      {open && (
        <div className="mt-3 space-y-3">
          <label className="block text-xs font-semibold text-gray-600">
            Tier
            <select
              value={tier}
              onChange={e => setTier(e.target.value)}
              className="ml-2 border border-gray-300 rounded-md px-2 py-1 text-xs"
            >
              {TIERS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <p className="text-[11px] text-gray-400 leading-snug">
            base = original app only · select = granted items via home cards · full = granted items + reviewer cockpit · admin = everything. Checkboxes grant individual items (apply to select and full).
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setGrants(ITEMS.map(i => i.id))}
              className="text-xs font-medium text-teal-700 border border-gray-300 rounded-md px-2 py-1 hover:bg-teal-50"
            >
              Select all
            </button>
            <button
              type="button"
              onClick={() => setGrants([])}
              className="text-xs font-medium text-gray-600 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-50"
            >
              Deselect all
            </button>
          </div>

          {SUBJECTS.map(s => {
            const items = ITEMS.filter(i => i.subject === s.code)
            return (
              <div key={s.code}>
                <p className="text-xs font-semibold text-gray-700">{s.code} · {s.name}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  {items.map(i => (
                    <label key={i.id} className="text-xs text-gray-600 flex items-center gap-1">
                      <input type="checkbox" checked={grants.includes(i.id)} onChange={() => toggle(i.id)} />
                      {shortLabel(i.label)}
                    </label>
                  ))}
                </div>
              </div>
            )
          })}

          <div>
            <p className="text-xs font-semibold text-gray-700">Mocks &amp; tools</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
              {GLOBAL_ITEMS.map(i => (
                <label key={i.id} className="text-xs text-gray-600 flex items-center gap-1">
                  <input type="checkbox" checked={grants.includes(i.id)} onChange={() => toggle(i.id)} />
                  {i.label}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={save}
              disabled={saving}
              className="bg-teal-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-teal-700 disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Save access'}
            </button>
            {msg && <span className="text-xs text-gray-500">{msg}</span>}
          </div>
        </div>
      )}
    </div>
  )
}

// Inline rename used on both pending and approved cards. Shows the name with an
// Edit affordance; editing swaps in a small input.
function NameEditor({ profile, onSaved }: {
  profile: Profile
  onSaved: (name: string) => void
}) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(profile.full_name ?? '')
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState('')

  async function save() {
    setSaving(true); setErr('')
    const res = await fetch('/api/admin/rename', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId: profile.id, name }),
    })
    const json = await res.json()
    setSaving(false)
    if (json.error) { setErr(json.error); return }
    onSaved(json.name)
    setEditing(false)
  }

  if (!editing) {
    return (
      <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
        {profile.full_name ?? '—'}
        <button
          onClick={() => { setName(profile.full_name ?? ''); setEditing(true) }}
          className="text-xs font-normal text-teal-600 hover:underline"
        >
          Edit
        </button>
      </p>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        maxLength={80}
        autoFocus
        className="border border-gray-300 rounded-md px-2 py-1 text-sm w-44"
      />
      <button
        onClick={save}
        disabled={saving}
        className="text-xs font-semibold text-teal-700 hover:underline disabled:opacity-50"
      >
        {saving ? 'Saving…' : 'Save'}
      </button>
      <button
        onClick={() => { setEditing(false); setErr('') }}
        className="text-xs font-medium text-gray-500 hover:underline"
      >
        Cancel
      </button>
      {err && <span className="text-xs text-rose-600">{err}</span>}
    </div>
  )
}

export default function AdminPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [readiness, setReadiness] = useState<ReadinessUser[]>([])
  const [loading, setLoading] = useState(true)
  const [approving, setApproving] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [suspending, setSuspending] = useState<string | null>(null)
  const [blocking, setBlocking] = useState<string | null>(null)
  const [justApproved, setJustApproved] = useState<Profile | null>(null)
  const [tab, setTab] = useState<Tab>('approvals')
  const [error, setError] = useState('')
  const [maintenance, setMaintenance] = useState<boolean | null>(null)
  const [maintBusy, setMaintBusy] = useState(false)
  const [usage, setUsage] = useState<UsageData | null>(null)
  const [usageAt, setUsageAt] = useState<string | null>(null)
  const [usageLoading, setUsageLoading] = useState(false)
  const [openUser, setOpenUser] = useState<number | null>(null)   // expanded per-user drill-down row
  const router = useRouter()

  const refreshUsage = useCallback(async () => {
    setUsageLoading(true)
    try {
      const res = await fetch('/api/admin/usage')
      const json = await res.json()
      if (!json.error) { setUsage(json); setUsageAt(new Date().toISOString()) }
    } finally {
      setUsageLoading(false)
    }
  }, [])

  // Read/write the tab through window.location rather than useSearchParams, which
  // would force this page under a Suspense boundary to build.
  function selectTab(next: Tab) {
    setTab(next)
    window.history.replaceState(null, '', next === 'approvals' ? '/admin' : `/admin?tab=${next}`)
  }

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      const res = await fetch('/api/admin/users')
      if (res.status === 403) { router.push('/'); return }
      const json = await res.json()
      if (json.error) { setError(json.error); setLoading(false); return }
      setProfiles(json.profiles)

      // An explicit ?tab wins. Otherwise open the queue only if it has something
      // in it, so a waiting sign-up is never hidden behind a tab.
      const urlTab = new URLSearchParams(window.location.search).get('tab')
      const pendingCount = (json.profiles as Profile[]).filter(p => !p.approved).length
      setTab(isTab(urlTab) ? urlTab : pendingCount > 0 ? 'approvals' : 'readiness')
      setLoading(false)

      // Secondary: approvals stay usable even if the readiness table is missing.
      const rRes = await fetch('/api/admin/readiness')
      const rJson = await rRes.json()
      if (!rJson.error) setReadiness(rJson.users)

      // Maintenance flag. Non-fatal: if the table is missing it just stays null.
      const mRes = await fetch('/api/admin/maintenance')
      const mJson = await mRes.json()
      if (!mJson.error) setMaintenance(!!mJson.maintenance)

      // Usage analytics (initial load). Fetched here inside load() so the setState
      // runs after an await, not synchronously in the effect. The Refresh button
      // re-pulls via refreshUsage. Non-fatal.
      const uRes = await fetch('/api/admin/usage')
      const uJson = await uRes.json()
      if (!uJson.error) { setUsage(uJson); setUsageAt(new Date().toISOString()) }
    }
    load()
  }, [router])

  async function toggleMaintenance() {
    const next = !maintenance
    if (next && !window.confirm(
      'Turn ON maintenance mode? Every non-admin will get a 503 "Service Unavailable" ' +
      'page and cannot use the app. You keep full access. You can turn it off anytime.'
    )) return
    setMaintBusy(true)
    setError('')
    const res = await fetch('/api/admin/maintenance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ maintenance: next }),
    })
    const json = await res.json()
    if (json.error) { setError(json.error); setMaintBusy(false); return }
    setMaintenance(next)
    setMaintBusy(false)
  }

  async function approve(profileId: string) {
    setApproving(profileId)
    const res = await fetch('/api/admin/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId }),
    })
    const json = await res.json()
    if (json.error) { setError(json.error); setApproving(null); return }
    setProfiles(prev =>
      prev.map(p => p.id === profileId ? { ...p, approved: true, approved_at: new Date().toISOString() } : p)
    )
    // Approving grants nothing on its own, so hand off to the Access tab.
    setJustApproved(profiles.find(p => p.id === profileId) ?? null)
    setApproving(null)
  }

  async function remove(profile: Profile) {
    const who = profile.full_name || profile.email || 'this user'
    const msg = profile.approved
      ? `Delete ${who}? This removes their account and revokes all access. This cannot be undone.`
      : `Reject and delete ${who}? This removes their sign-up and account. This cannot be undone.`
    if (!window.confirm(msg)) return

    setDeleting(profile.id)
    setError('')
    const res = await fetch('/api/admin/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId: profile.id }),
    })
    const json = await res.json()
    if (json.error) { setError(json.error); setDeleting(null); return }
    setProfiles(prev => prev.filter(p => p.id !== profile.id))
    if (justApproved?.id === profile.id) setJustApproved(null)
    setDeleting(null)
  }

  async function toggleSuspend(profile: Profile) {
    const next = !profile.suspended
    const who = profile.full_name || profile.email || 'this user'
    if (next && !window.confirm(`Suspend ${who}? They lose access immediately but keep their account, progress, tier and grants. You can restore them anytime.`)) return

    setSuspending(profile.id)
    setError('')
    const res = await fetch('/api/admin/suspend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId: profile.id, suspended: next }),
    })
    const json = await res.json()
    if (json.error) { setError(json.error); setSuspending(null); return }
    setProfiles(prev => prev.map(p => p.id === profile.id ? { ...p, suspended: next } : p))
    setSuspending(null)
  }

  // Quiet per-user block: the user sees the neutral 503 maintenance page (not the
  // /suspended page) until the time passes. `choice` is a duration or 'clear'.
  async function setBlock(profile: Profile, choice: string) {
    let until: string | null = null
    if (choice !== 'clear') {
      const ms = choice === '1h' ? 3600e3 : choice === '6h' ? 6 * 3600e3 : choice === '1d' ? 24 * 3600e3 : 0
      until = choice === 'forever'
        ? new Date(2999, 0, 1).toISOString()   // effectively "until I lift it"
        : new Date(Date.now() + ms).toISOString()
    }
    const who = profile.full_name || profile.email || 'this user'
    if (choice !== 'clear' && !window.confirm(
      `Take ${who} offline? They will see the neutral 503 maintenance page (not a suspension) ` +
      `${choice === 'forever' ? 'until you bring them back online' : 'for the chosen time'}. ` +
      `Their account, progress, tier and grants are untouched.`
    )) return

    setBlocking(profile.id)
    setError('')
    const res = await fetch('/api/admin/block', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId: profile.id, until }),
    })
    const json = await res.json()
    if (json.error) { setError(json.error); setBlocking(null); return }
    setProfiles(prev => prev.map(p => p.id === profile.id ? { ...p, blocked_until: until } : p))
    setBlocking(null)
  }

  const pending = profiles.filter(p => !p.approved)
  const approved = profiles.filter(p => p.approved)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <Link href="/" className="text-sm text-teal-600 hover:underline font-medium">← Home</Link>
        </div>
        <p className="text-gray-500 text-sm mb-6">Manage FoqusLab sign-up approvals and reviewer access</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-6">{error}</div>
        )}

        {maintenance !== null && (
          <div className={`flex items-center justify-between gap-4 rounded-lg border px-4 py-3 mb-6 ${
            maintenance ? 'bg-rose-50 border-rose-200' : 'bg-white border-gray-200'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full ${maintenance ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                <span className="text-sm font-semibold text-gray-900">
                  Maintenance mode {maintenance ? 'ON' : 'OFF'}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {maintenance
                  ? 'Non-admins see a 503 outage page. You still have full access.'
                  : 'App runs normally for everyone. Turn on to show non-admins a 503 outage page.'}
              </p>
            </div>
            <button
              onClick={toggleMaintenance}
              disabled={maintBusy}
              className={`shrink-0 text-sm font-medium rounded-lg px-3 py-1.5 transition-colors disabled:opacity-50 ${
                maintenance
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
            >
              {maintBusy ? '…' : maintenance ? 'Turn off' : 'Turn on'}
            </button>
          </div>
        )}

        <nav className="flex gap-1 border-b border-gray-200 mb-6">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => selectTab(t.id)}
              className={`relative px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? 'border-teal-600 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {t.label}
              {t.id === 'approvals' && pending.length > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-semibold rounded-full bg-rose-500 text-white">
                  {pending.length}
                </span>
              )}
            </button>
          ))}
        </nav>

        {tab === 'readiness' && (
          <section>
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Readiness ({readiness.filter(u => u.attemptCount > 0).length} with attempts)
            </h2>
            <p className="text-xs text-gray-400 mb-3">
              Scores come only from Top 2 exams (subject exams, preboards, mocks). Main app practice
              and drills are not counted. Projected GWA treats untested subjects as 0, so it only
              equals the true GWA at 8/8 coverage.
            </p>
            {readiness.length === 0 ? (
              <p className="text-gray-400 text-sm">
                No readiness data. Either nobody has sat a Top 2 exam yet, or the
                <code className="bg-gray-100 px-1 rounded mx-1">ole_attempts</code>
                table is missing.
              </p>
            ) : (
              <div className="space-y-2">
                {readiness.map(u => <ReadinessCard key={u.userId} u={u} />)}
              </div>
            )}
          </section>
        )}

        {tab === 'usage' && (
          <section>
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">Usage</h2>
            <p className="text-xs text-gray-400 mb-4">
              Who&rsquo;s on now and what page or exam they&rsquo;re on, plus review-vs-exam time, top pages and quizzes.
              Click any user to see what they review most and their recent activity.
              &ldquo;Active&rdquo; counts anyone who read, drilled or took an exam. Needs the
              <code className="bg-gray-100 px-1 rounded mx-1">app_events</code> table (see supabase-setup.sql).
            </p>

            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={refreshUsage}
                disabled={usageLoading}
                className="text-xs font-medium rounded-lg px-3 py-1.5 bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50"
              >
                {usageLoading ? 'Refreshing…' : 'Refresh'}
              </button>
              <span className="text-xs text-gray-400">Updated {ago(usageAt)}</span>
            </div>

            {!usage ? (
              <p className="text-gray-400 text-sm">No usage data yet.</p>
            ) : (
              <div className="space-y-6">
                {/* Summary */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {([
                    ['Active 24h', usage.summary.active24h],
                    ['Active 7d', usage.summary.active7d],
                    ['Active 30d', usage.summary.active30d],
                    ['Ever active', usage.summary.everActive],
                    ['Signups', usage.summary.signups],
                    ['Approved', usage.summary.approved],
                    ['Has Top 2', usage.summary.hasAccess],
                  ] as [string, number][]).map(([label, val]) => (
                    <div key={label} className="bg-white border border-gray-200 rounded-lg px-3 py-2">
                      <div className="text-lg font-bold text-gray-900">{val}</div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Who's on now */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    On now — {usage.live.length} active in the last 20 min
                  </h3>
                  {usage.live.length === 0 ? (
                    <p className="text-gray-400 text-sm">Nobody active right now.</p>
                  ) : (
                    <div className="border border-gray-200 rounded-lg bg-white divide-y divide-gray-50">
                      {usage.live.map((u, i) => (
                        <div key={i} className="flex items-center justify-between px-3 py-2 text-sm gap-2">
                          <span className="text-gray-800 truncate min-w-0 flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full shrink-0 ${u.surface === 'doing' ? 'bg-amber-400' : u.surface === 'reading' ? 'bg-emerald-400' : 'bg-gray-300'}`} />
                            <span className="font-medium truncate">{u.name || u.email || '—'}</span>
                            <span className="text-gray-400 truncate">→ {u.label ?? '—'}</span>
                          </span>
                          <span className="text-gray-400 text-xs shrink-0">{ago(u.at)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Per-user behavior — click a row to see their pages and recent timeline */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    Per user — {usage.users.filter(u => u.approved).length} approved, by last active
                  </h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
                          <th className="px-3 py-2 font-medium">User</th>
                          <th className="px-3 py-2 font-medium">Currently / last on</th>
                          <th className="px-3 py-2 font-medium">Last active</th>
                          <th className="px-3 py-2 font-medium text-right" title="Reviewer reading time (approx minutes, ~1 per minute on a reviewer page)">Review</th>
                          <th className="px-3 py-2 font-medium text-right" title="Time on exams, practice and drills (approx minutes)">Exam</th>
                          <th className="px-3 py-2 font-medium text-right" title="Answered quizzes: subject exams, practice, and Top 2 exams">Quizzes</th>
                          <th className="px-3 py-2 font-medium text-right" title="SRS review / drill answers">Reviews</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usage.users.filter(u => u.approved).map((u, i) => {
                          const idle = isIdle(u.lastActive)
                          const open = openUser === i
                          const maxUnits = Math.max(1, ...u.topPages.map(p => p.units))
                          // Match this usage row to its profile (by email) so the block
                          // control can reuse the same setBlock/isBlocked as the Access tab.
                          const prof = u.email ? profiles.find(pr => pr.email === u.email) : undefined
                          return (
                            <Fragment key={i}>
                            <tr
                              className="border-b border-gray-50 last:border-0 cursor-pointer hover:bg-gray-50"
                              onClick={() => setOpenUser(open ? null : i)}
                            >
                              <td className="px-3 py-2">
                                <div className="text-gray-900 flex items-center gap-1.5">
                                  <span className={`text-gray-300 transition-transform ${open ? 'rotate-90' : ''}`}>›</span>
                                  {u.name || u.email || '—'}
                                  {prof && isBlocked(prof.blocked_until) && (
                                    <span className="text-[10px] font-medium text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded-full">Offline</span>
                                  )}
                                </div>
                                {u.name && u.email && <div className="text-xs text-gray-400 pl-4">{u.email}</div>}
                              </td>
                              <td className="px-3 py-2">
                                {u.current ? (
                                  <span className="inline-flex items-center gap-1.5">
                                    <span className={`h-1.5 w-1.5 rounded-full ${u.currentSurface === 'doing' ? 'bg-amber-400' : u.currentSurface === 'reading' ? 'bg-emerald-400' : 'bg-gray-300'}`} />
                                    <span className="text-gray-700 truncate">{u.current}</span>
                                  </span>
                                ) : <span className="text-gray-300">—</span>}
                              </td>
                              <td className={`px-3 py-2 ${idle ? 'text-gray-400' : 'text-gray-700'}`}>{ago(u.lastActive)}</td>
                              <td className="px-3 py-2 text-right tabular-nums text-gray-700">{u.readMins ? `${u.readMins}m` : (u.top2Reads ? '·' : '—')}</td>
                              <td className="px-3 py-2 text-right tabular-nums text-gray-700">{u.examMins ? `${u.examMins}m` : '—'}</td>
                              <td className="px-3 py-2 text-right tabular-nums text-gray-700">{u.quizzes || '—'}</td>
                              <td className="px-3 py-2 text-right tabular-nums text-gray-700">{u.reviews || '—'}</td>
                            </tr>
                            {open && (
                              <tr className="bg-gray-50/60 border-b border-gray-100">
                                <td colSpan={7} className="px-4 py-3">
                                  {u.topPages.length === 0 && u.timeline.length === 0 ? (
                                    <p className="text-xs text-gray-400">No page activity recorded in the last 30 days.</p>
                                  ) : (
                                    <div className="grid sm:grid-cols-2 gap-5 mb-3">
                                      <div>
                                        <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Reviews the most (30d)</div>
                                        <div className="space-y-1">
                                          {u.topPages.map((p, j) => (
                                            <div key={j} className="flex items-center gap-2">
                                              <span className="text-xs text-gray-700 w-40 truncate shrink-0">{p.label}</span>
                                              <span className="h-2 rounded-full bg-gray-200 grow overflow-hidden">
                                                <span
                                                  className={`block h-full rounded-full ${p.surface === 'doing' ? 'bg-amber-400' : p.surface === 'reading' ? 'bg-emerald-400' : 'bg-gray-400'}`}
                                                  style={{ width: `${Math.round((p.units / maxUnits) * 100)}%` }}
                                                />
                                              </span>
                                              <span className="text-[11px] text-gray-400 tabular-nums w-8 text-right shrink-0">{p.units}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Recent activity</div>
                                        <div className="space-y-0.5">
                                          {u.timeline.map((t, j) => (
                                            <div key={j} className="flex items-center justify-between gap-2 text-xs">
                                              <span className="text-gray-700 truncate flex items-center gap-1.5">
                                                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${t.surface === 'doing' ? 'bg-amber-400' : t.surface === 'reading' ? 'bg-emerald-400' : 'bg-gray-300'}`} />
                                                {t.label}
                                              </span>
                                              <span className="text-gray-400 shrink-0">{ago(t.at)}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {prof ? (
                                    <div className="mt-1 pt-3 border-t border-gray-200 flex items-center gap-2 flex-wrap">
                                      <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Access</span>
                                      {isBlocked(prof.blocked_until) ? (
                                        <>
                                          <span className="text-xs text-slate-600">Offline until {new Date(prof.blocked_until!).toLocaleString()}</span>
                                          <button
                                            onClick={() => setBlock(prof, 'clear')}
                                            disabled={blocking === prof.id}
                                            className="text-xs font-semibold px-3 py-1 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 disabled:opacity-50 transition-colors"
                                          >
                                            {blocking === prof.id ? 'Saving…' : 'Bring online'}
                                          </button>
                                        </>
                                      ) : (
                                        <select
                                          aria-label="Take offline"
                                          disabled={blocking === prof.id}
                                          defaultValue=""
                                          onChange={e => { const v = e.target.value; e.target.value = ''; if (v) setBlock(prof, v) }}
                                          className="text-xs font-semibold px-2 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                                        >
                                          <option value="" disabled>{blocking === prof.id ? 'Saving…' : 'Take offline…'}</option>
                                          <option value="1h">Offline · 1 hour</option>
                                          <option value="6h">Offline · 6 hours</option>
                                          <option value="1d">Offline · 1 day</option>
                                          <option value="forever">Offline · until I lift it</option>
                                        </select>
                                      )}
                                      {prof.suspended && <span className="text-xs text-amber-700">· suspended</span>}
                                    </div>
                                  ) : (
                                    <p className="text-[11px] text-gray-400 mt-2">Open the Access tab to block this user (profile not matched here).</p>
                                  )}
                                </td>
                              </tr>
                            )}
                            </Fragment>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1.5">
                    <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> reviewing</span>
                    <span className="inline-flex items-center gap-1 ml-3"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> exam / practice / drill</span>
                    <span className="ml-3">Time columns are approximate (~1 min per 60s the tab was open on that page).</span>
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Top pages */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Most-visited pages (30d)</h3>
                    {usage.topPages.length === 0 ? (
                      <p className="text-gray-400 text-sm">No page views recorded yet.</p>
                    ) : (
                      <div className="border border-gray-200 rounded-lg bg-white divide-y divide-gray-50">
                        {usage.topPages.map((p, i) => (
                          <div key={i} className="flex items-center justify-between px-3 py-1.5 text-sm">
                            <span className="text-gray-700 truncate mr-2" title={p.path}>{p.label}</span>
                            <span className="text-gray-400 text-xs shrink-0 tabular-nums">{p.views} · {p.users}u</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Reading activity */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Recent reviewer reading (Top 2 + main app)</h3>
                    {usage.reading.length === 0 ? (
                      <p className="text-gray-400 text-sm">No reading recorded yet.</p>
                    ) : (
                      <div className="border border-gray-200 rounded-lg bg-white divide-y divide-gray-50">
                        {usage.reading.map((r, i) => (
                          <div key={i} className="flex items-center justify-between px-3 py-1.5 text-sm gap-2">
                            <span className="text-gray-700 truncate min-w-0">
                              <span className={`text-[10px] px-1 py-0.5 rounded mr-1.5 ${r.source === 'Top 2' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>{r.source}</span>
                              <span className="font-medium">{r.label}</span>
                              <span className="text-gray-400"> · {r.email ?? '—'}</span>
                            </span>
                            <span className="text-gray-400 text-xs shrink-0">{ago(r.updatedAt)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* By subject */}
                {usage.bySubject.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Quizzes by subject (all surfaces)</h3>
                    <div className="border border-gray-200 rounded-lg bg-white divide-y divide-gray-50">
                      {usage.bySubject.map((b, i) => (
                        <details key={i} className="px-3 py-1.5 text-sm">
                          <summary className="flex items-center justify-between gap-2 cursor-pointer list-none">
                            <span className="text-gray-700 truncate min-w-0">
                              <span className={`text-[10px] px-1 py-0.5 rounded mr-1.5 ${
                                b.surface === 'Top 2' ? 'bg-indigo-50 text-indigo-600'
                                  : b.surface === 'Practice' ? 'bg-amber-50 text-amber-600'
                                  : 'bg-emerald-50 text-emerald-600'
                              }`}>{b.surface}</span>
                              {b.subject}
                            </span>
                            <span className="text-gray-400 text-xs tabular-nums shrink-0">{b.attempts} · {b.users}u · avg {b.avgPct}%</span>
                          </summary>
                          <div className="text-xs text-gray-500 mt-1.5 pl-1 leading-relaxed">
                            {b.who.length ? b.who.join(', ') : '—'}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {tab === 'approvals' && (
        <section>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Pending ({pending.length})
          </h2>
          {justApproved && (
            <div className="bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 mb-3 flex items-center justify-between gap-3">
              <p className="text-xs text-teal-900">
                Approved <b>{justApproved.full_name ?? justApproved.email}</b>. They start on
                base tier with nothing granted.
              </p>
              <button
                onClick={() => { setJustApproved(null); selectTab('access') }}
                className="text-xs font-semibold text-teal-700 hover:underline shrink-0"
              >
                Set access →
              </button>
            </div>
          )}
          {pending.length === 0 ? (
            <p className="text-gray-400 text-sm">No pending approvals.</p>
          ) : (
            <div className="space-y-2">
              {pending.map(p => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div>
                    <NameEditor
                      profile={p}
                      onSaved={name => setProfiles(prev => prev.map(x => x.id === p.id ? { ...x, full_name: name } : x))}
                    />
                    <p className="text-xs text-gray-400">{p.email}</p>
                    <p className="text-xs text-gray-300 mt-0.5">Signed up {new Date(p.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => approve(p.id)}
                      disabled={approving === p.id || deleting === p.id}
                      className="bg-teal-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-teal-700 disabled:opacity-50 transition-colors"
                    >
                      {approving === p.id ? 'Approving…' : 'Approve'}
                    </button>
                    <button
                      onClick={() => remove(p)}
                      disabled={approving === p.id || deleting === p.id}
                      className="text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 disabled:opacity-50 transition-colors"
                    >
                      {deleting === p.id ? 'Rejecting…' : 'Reject'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        )}

        {tab === 'access' && (
        <>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-4 text-xs text-blue-900 leading-relaxed">
          <p className="font-semibold mb-1">Reviewer access</p>
          <p><b>Tiers:</b> base = original app only · select = granted items via home cards · full = granted items + the reviewer cockpit · admin = everything.</p>
          <p className="mt-1"><b>Grants</b> are per item: check to share, uncheck to revoke (applies to select and full). New sign-ups default to base, so nothing is shared until you grant it.</p>
          <p className="mt-1"><b>Suspend</b> blocks access immediately but keeps the account, progress, tier and grants intact, so Restore is one click. <b>Take offline</b> is a quieter, timed block: the user sees the neutral 503 maintenance page (not a suspension notice) for the chosen time, then it lifts itself. <b>Delete permanently</b> erases the account and all their data (cannot be undone).</p>
          <p className="mt-1 text-blue-700">If access controls error on save, run <code className="bg-blue-100 px-1 rounded">supabase/access-tiers.sql</code> in Supabase first. If Suspend errors, run <code className="bg-blue-100 px-1 rounded">supabase/suspend-accounts.sql</code>. If Take offline errors, run <code className="bg-blue-100 px-1 rounded">supabase/per-user-block.sql</code>.</p>
        </div>

        <section>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Approved ({approved.length})
          </h2>
          {approved.length === 0 ? (
            <p className="text-gray-400 text-sm">No approved users yet.</p>
          ) : (
            <div className="space-y-2">
              {approved.map(p => (
                <div key={p.id} className={`bg-white rounded-xl border px-4 py-3 ${p.suspended ? 'border-amber-300 bg-amber-50/40' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <NameEditor
                        profile={p}
                        onSaved={name => setProfiles(prev => prev.map(x => x.id === p.id ? { ...x, full_name: name } : x))}
                      />
                      <p className="text-xs text-gray-400">{p.email}</p>
                      <p className="text-xs text-gray-300 mt-0.5">Approved {p.approved_at ? new Date(p.approved_at).toLocaleDateString() : '—'}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {p.suspended && (
                        <span className="text-xs font-medium text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Suspended</span>
                      )}
                      {isBlocked(p.blocked_until) && (
                        <span
                          title={`Offline until ${new Date(p.blocked_until!).toLocaleString()}`}
                          className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
                        >
                          Offline
                        </span>
                      )}
                      <span className="text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">{p.tier ?? 'base'}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => toggleSuspend(p)}
                      disabled={suspending === p.id || deleting === p.id}
                      className={`text-xs font-semibold px-3 py-1 rounded-lg border disabled:opacity-50 transition-colors ${
                        p.suspended
                          ? 'text-emerald-700 border-emerald-200 hover:bg-emerald-50'
                          : 'text-amber-700 border-amber-200 hover:bg-amber-50'
                      }`}
                    >
                      {suspending === p.id ? 'Saving…' : p.suspended ? 'Restore access' : 'Suspend'}
                    </button>
                    {isBlocked(p.blocked_until) ? (
                      <button
                        onClick={() => setBlock(p, 'clear')}
                        disabled={blocking === p.id || suspending === p.id || deleting === p.id}
                        className="text-xs font-semibold px-3 py-1 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 disabled:opacity-50 transition-colors"
                      >
                        {blocking === p.id ? 'Saving…' : 'Bring online'}
                      </button>
                    ) : (
                      <select
                        aria-label="Take offline"
                        disabled={blocking === p.id || suspending === p.id || deleting === p.id}
                        defaultValue=""
                        onChange={e => { const v = e.target.value; e.target.value = ''; if (v) setBlock(p, v) }}
                        className="text-xs font-semibold px-2 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                      >
                        <option value="" disabled>{blocking === p.id ? 'Saving…' : 'Take offline…'}</option>
                        <option value="1h">Offline · 1 hour</option>
                        <option value="6h">Offline · 6 hours</option>
                        <option value="1d">Offline · 1 day</option>
                        <option value="forever">Offline · until I lift it</option>
                      </select>
                    )}
                    <button
                      onClick={() => remove(p)}
                      disabled={deleting === p.id || suspending === p.id}
                      className="text-rose-600 text-xs font-semibold px-3 py-1 rounded-lg border border-rose-200 hover:bg-rose-50 disabled:opacity-50 transition-colors"
                    >
                      {deleting === p.id ? 'Deleting…' : 'Delete permanently'}
                    </button>
                  </div>
                  <AccessEditor
                    profile={p}
                    onSaved={(tier, grants) =>
                      setProfiles(prev => prev.map(x => x.id === p.id ? { ...x, tier, grants } : x))
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </section>
        </>
        )}
      </div>
    </div>
  )
}
