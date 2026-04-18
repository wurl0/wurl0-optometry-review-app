import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { SUBJECTS, COLOR_MAP } from '@/lib/subjects'

export default async function OlePrepPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

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

        {/* Subject cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {SUBJECTS.map(subject => {
            const c = COLOR_MAP[subject.color]
            return (
              <Link
                key={subject.slug}
                href={`/ole-prep/${subject.slug}`}
                className="block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-br ${c.gradient} px-5 py-4`}>
                  <span className="text-3xl">{subject.icon}</span>
                  <h2 className="text-base font-bold text-white mt-2 leading-tight">{subject.name}</h2>
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
      </main>
    </div>
  )
}
