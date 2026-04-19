'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'

type Profile = {
  id: string
  full_name: string | null
  email: string | null
  approved: boolean
  approved_at: string | null
  created_at: string
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
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Admin Panel</h1>
        <p className="text-gray-500 text-sm mb-8">Manage OptoPrep sign-up approvals</p>

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

        <section>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Approved ({approved.length})
          </h2>
          {approved.length === 0 ? (
            <p className="text-gray-400 text-sm">No approved users yet.</p>
          ) : (
            <div className="space-y-2">
              {approved.map(p => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center justify-between opacity-70">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{p.full_name ?? '—'}</p>
                    <p className="text-xs text-gray-400">{p.email}</p>
                    <p className="text-xs text-gray-300 mt-0.5">Approved {p.approved_at ? new Date(p.approved_at).toLocaleDateString() : '—'}</p>
                  </div>
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">✓ Approved</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
