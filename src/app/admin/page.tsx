'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SUBJECTS, ITEMS } from '@/lib/reviewer-manifest'

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
