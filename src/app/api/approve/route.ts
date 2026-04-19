import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://wurl0-optometry-review-app.vercel.app'

  if (!token) {
    return NextResponse.redirect(new URL('/login', appUrl))
  }

  const supabase = createAdminClient()

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, full_name, email, approved')
    .eq('approval_token', token)
    .single()

  if (error || !profile) {
    return new NextResponse(errorPage('Invalid or expired approval link.'), {
      headers: { 'Content-Type': 'text/html' },
      status: 400,
    })
  }

  if (profile.approved) {
    return new NextResponse(successPage(profile.full_name ?? profile.email, true), {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  const { error: updateError } = await supabase
    .from('profiles')
    .update({ approved: true, approved_at: new Date().toISOString() })
    .eq('id', profile.id)

  if (updateError) {
    return new NextResponse(errorPage('Failed to approve user. Try the admin panel.'), {
      headers: { 'Content-Type': 'text/html' },
      status: 500,
    })
  }

  return new NextResponse(successPage(profile.full_name ?? profile.email, false), {
    headers: { 'Content-Type': 'text/html' },
  })
}

function successPage(name: string, alreadyApproved: boolean) {
  const message = alreadyApproved
    ? `${name} was already approved.`
    : `${name} has been approved and can now access OptoPrep.`
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Approved</title>
    <style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f0fdf4}
    .card{background:#fff;border-radius:16px;padding:40px;max-width:400px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,.08)}
    h2{color:#0d9488;margin:0 0 12px}p{color:#555;margin:0 0 24px}a{color:#0d9488;font-weight:600}</style>
    </head><body><div class="card">
    <div style="font-size:48px;margin-bottom:16px">✅</div>
    <h2>Access Granted</h2>
    <p>${message}</p>
    <a href="/">Go to OptoPrep →</a>
    </div></body></html>`
}

function errorPage(message: string) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title>
    <style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#fef2f2}
    .card{background:#fff;border-radius:16px;padding:40px;max-width:400px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,.08)}
    h2{color:#dc2626;margin:0 0 12px}p{color:#555}</style>
    </head><body><div class="card">
    <div style="font-size:48px;margin-bottom:16px">⚠️</div>
    <h2>Approval Failed</h2>
    <p>${message}</p>
    </div></body></html>`
}
