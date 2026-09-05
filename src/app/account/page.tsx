'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-client'

export default function AccountPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setName(user.user_metadata?.full_name ?? '')
      setEmail(user.email ?? '')
      setLoading(false)
    }
    load()
  }, [router])

  async function save(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true); setMsg(''); setError('')
    const res = await fetch('/api/account/name', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
    const json = await res.json()
    setSaving(false)
    if (json.error) { setError(json.error); return }
    setName(json.name)
    setMsg('Saved')
    // Refresh the server components (home greeting reads from auth metadata).
    router.refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Account</h1>
          <Link href="/" className="text-sm text-[#3B54FF] hover:underline font-medium">← Home</Link>
        </div>

        <form onSubmit={save} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <input
              type="text" value={name} onChange={e => setName(e.target.value)} required maxLength={80}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B54FF] focus:border-transparent"
              placeholder="Juan dela Cruz"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email" value={email} disabled
              className="w-full border border-gray-200 bg-gray-50 text-gray-500 rounded-lg px-3 py-2 text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">Email can&apos;t be changed here.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit" disabled={saving}
              className="bg-[#3B54FF] text-white rounded-lg py-2.5 px-5 text-sm font-semibold hover:bg-[#3145E0] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Saving…' : 'Save changes'}
            </button>
            {msg && <span className="text-sm text-gray-500">{msg}</span>}
          </div>
        </form>
      </div>
    </div>
  )
}
