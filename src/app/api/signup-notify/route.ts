import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient } from '@/lib/supabase-admin'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json()
    if (!userId) return NextResponse.json({ error: 'Missing userId' }, { status: 400 })

    const supabase = createAdminClient()

    // Fetch the newly created profile (trigger should have created it)
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('full_name, email, approval_token')
      .eq('user_id', userId)
      .single()

    if (error || !profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://wurl0-optometry-review-app.vercel.app'
    const approveUrl = `${appUrl}/api/approve?token=${profile.approval_token}`

    await resend.emails.send({
      from: 'OptoPrep <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      subject: `New sign-up: ${profile.full_name ?? profile.email}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 8px">New OptoPrep Sign-Up 👁️</h2>
          <p style="color:#555;margin:0 0 20px">Someone just created an account and is waiting for your approval.</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr>
              <td style="padding:8px 0;color:#888;font-size:14px">Name</td>
              <td style="padding:8px 0;font-size:14px;font-weight:600">${profile.full_name ?? '—'}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;font-size:14px">Email</td>
              <td style="padding:8px 0;font-size:14px">${profile.email}</td>
            </tr>
          </table>
          <a href="${approveUrl}"
            style="display:inline-block;background:#0d9488;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;font-size:15px">
            ✅ Approve Access
          </a>
          <p style="color:#aaa;font-size:12px;margin-top:20px">
            Or copy this link: ${approveUrl}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('signup-notify error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
