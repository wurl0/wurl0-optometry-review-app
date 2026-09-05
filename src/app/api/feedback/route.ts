import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@/lib/supabase-server'

const resend = new Resend(process.env.RESEND_API_KEY)

// In-app feedback. The user is logged in (session cookie), so the sender identity comes from
// the auth user, never the body. Emails the message to the admin via the same Resend pipeline
// signup notifications use, with reply-to set to the sender so a reply reaches the student.

const CATEGORIES = new Set(['general', 'bug', 'content', 'request'])

function esc(s: string) {
  return s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c] as string))
}

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json().catch(() => null)
    const message = typeof body?.message === 'string' ? body.message.trim() : ''
    if (!message) return NextResponse.json({ error: 'Please write a message.' }, { status: 400 })
    if (message.length > 4000) return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
    const category = CATEGORIES.has(body?.category) ? body.category : 'general'

    const name = (user.user_metadata?.full_name as string) || ''
    const email = user.email ?? 'unknown'
    const who = name ? `${name} (${email})` : email

    await resend.emails.send({
      from: 'FoqusLab <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      replyTo: user.email ?? undefined,
      subject: `Feedback [${category}] from ${name || email}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 4px">FoqusLab feedback 👁️</h2>
          <p style="color:#666;font-size:13px;margin:0 0 16px">Category: <b>${esc(category)}</b> · From: ${esc(who)}</p>
          <div style="white-space:pre-wrap;background:#f4f6f9;border:1px solid #e0e4eb;border-radius:10px;padding:16px;font-size:15px;color:#141922;line-height:1.5">${esc(message)}</div>
          <p style="color:#aaa;font-size:12px;margin-top:16px">Reply to this email to respond to ${esc(email)}.</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('feedback error:', err)
    return NextResponse.json({ error: 'Could not send. Please try again.' }, { status: 500 })
  }
}
