'use client'
import { useState } from 'react'
import type { Readiness } from '@/lib/readiness'

// A copy-ready text snapshot of the readiness readout. Neutral wording because this page
// is a full-tier feature shared with other users (unlike the admin-only Daily Queue,
// which can say "for Lisa"). Built entirely from the readiness the server already
// computed, so it never reads or writes anything.

const EXAM = new Date(2026, 8, 28) // written OLE: Sep 28, 2026
const DAYMS = 86400000
const MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const VERDICT_LABEL: Record<Readiness['verdict'], string> = {
  READY: 'Board-ready',
  BORDERLINE: 'Borderline',
  NOT_READY: 'Not ready yet',
  BUILDING: 'Building picture',
}

function buildSnapshot(r: Readiness): string {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const dLeft = Math.max(0, Math.round((EXAM.getTime() - today.getTime()) / DAYMS))
  const pct = (v: number | null) => (v === null ? '—' : `${v}%`)
  const marginTxt = r.margin === null ? '' : ` (${r.margin >= 0 ? '+' : ''}${r.margin} vs 75)`
  const head =
    `FoqusLab Board Readiness — ${MO[today.getMonth()]} ${today.getDate()} · D-${dLeft}\n` +
    `Projected GWA: ${pct(r.projectedGwa)}${marginTxt} · Avg on tested: ${pct(r.gwa)}\n` +
    `Verdict: ${VERDICT_LABEL[r.verdict]} · Coverage: ${r.measuredCount}/8 subjects confirmed` +
    (r.mockGwa !== null ? `\nLatest mock: ${r.mockGwa}% (most exam-realistic)` : '')
  const rows = r.subjects
    .map(s => {
      const best = s.best === null ? '' : ` · best ${s.best}%`
      const wa = s.weakAreas.length ? ` · ${s.weakAreas.length} weak area${s.weakAreas.length > 1 ? 's' : ''}` : ''
      const prov = s.avg !== null && !s.confident ? ' · provisional' : ''
      return `${s.code} ${s.name} — ${s.weight}% · ${pct(s.avg)}${best}${wa}${prov}`
    })
    .join('\n')
  return `${head}\n\nPer subject (weight · avg · best):\n${rows}`
}

export default function ReadinessSnapshot({ r }: { r: Readiness }) {
  const [copied, setCopied] = useState(false)
  const text = buildSnapshot(r)

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard blocked; the text is visible below to copy by hand.
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-sm font-bold text-gray-800">Readiness snapshot</span>
        <div className="flex items-center gap-2">
          <span className={`text-xs text-teal-600 transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>Copied</span>
          <button
            onClick={copy}
            className="text-xs font-semibold rounded-lg px-3 py-1.5 bg-teal-600 text-white hover:bg-teal-700 transition-colors"
          >
            Copy snapshot
          </button>
        </div>
      </div>
      <pre className="text-[11px] leading-relaxed text-gray-600 bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap">
        {text}
      </pre>
    </div>
  )
}
