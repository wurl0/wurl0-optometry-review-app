'use client'
import { useEffect, useState } from 'react'
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
}

const TIERS = ['base', 'select', 'full', 'admin'] as const
const GLOBAL_ITEMS = ITEMS.filter(i => i.subject === 'GLOBAL')
const shortLabel = (label: string) => label.split(' — ')[1] ?? label

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
                  <div key={s.code} className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">
                      <b className="text-gray-400 mr-1">{s.code}</b>{s.name}
                      <span className="text-gray-300 ml-1">({s.weight}%)</span>
                    </span>
                    <span className={`font-semibold ${scoreColor(s.avg)}`}>
                      {s.avg === null ? 'untested' : `${s.avg}%`}
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

export default function AdminPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [readiness, setReadiness] = useState<ReadinessUser[]>([])
  const [loading, setLoading] = useState(true)
  const [approving, setApproving] = useState<string | null>(null)
  const [error, setError] = useState('')
  const router = useRouter()

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
      setLoading(false)

      // Secondary: approvals stay usable even if the readiness table is missing.
      const rRes = await fetch('/api/admin/readiness')
      const rJson = await rRes.json()
      if (!rJson.error) setReadiness(rJson.users)
    }
    load()
  }, [router])

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
    setApproving(null)
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
        <p className="text-gray-500 text-sm mb-8">Manage OptoPrep sign-up approvals and reviewer access</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-6">{error}</div>
        )}

        {readiness.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Readiness ({readiness.filter(u => u.attemptCount > 0).length} with attempts)
            </h2>
            <p className="text-xs text-gray-400 mb-3">
              Projected GWA counts untested subjects as 0, so it only equals the true GWA at 8/8 coverage.
              Everyone stays &ldquo;Building&rdquo; until all 8 subjects have an attempt.
            </p>
            <div className="space-y-2">
              {readiness.map(u => <ReadinessCard key={u.userId} u={u} />)}
            </div>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Pending ({pending.length})
          </h2>
          {pending.length === 0 ? (
            <p className="text-gray-400 text-sm">No pending approvals.</p>
          ) : (
            <div className="space-y-2">
              {pending.map(p => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{p.full_name ?? '—'}</p>
                    <p className="text-xs text-gray-400">{p.email}</p>
                    <p className="text-xs text-gray-300 mt-0.5">Signed up {new Date(p.created_at).toLocaleDateString()}</p>
                  </div>
                  <button
                    onClick={() => approve(p.id)}
                    disabled={approving === p.id}
                    className="bg-teal-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-teal-700 disabled:opacity-50 transition-colors"
                  >
                    {approving === p.id ? 'Approving…' : 'Approve'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-4 text-xs text-blue-900 leading-relaxed">
          <p className="font-semibold mb-1">Reviewer access</p>
          <p><b>Tiers:</b> base = original app only · select = granted items via home cards · full = granted items + the reviewer cockpit · admin = everything.</p>
          <p className="mt-1"><b>Grants</b> are per item: check to share, uncheck to revoke (applies to select and full). New sign-ups default to base, so nothing is shared until you grant it.</p>
          <p className="mt-1 text-blue-700">If the controls error on save, run <code className="bg-blue-100 px-1 rounded">supabase/access-tiers.sql</code> in Supabase first.</p>
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
                <div key={p.id} className="bg-white rounded-xl border border-gray-200 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{p.full_name ?? '—'}</p>
                      <p className="text-xs text-gray-400">{p.email}</p>
                      <p className="text-xs text-gray-300 mt-0.5">Approved {p.approved_at ? new Date(p.approved_at).toLocaleDateString() : '—'}</p>
                    </div>
                    <span className="text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">{p.tier ?? 'base'}</span>
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
      </div>
    </div>
  )
}
