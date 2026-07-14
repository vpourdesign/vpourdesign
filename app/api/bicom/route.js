import { NextResponse } from 'next/server';
import { BICOM_COOKIE, BICOM_MAX_AGE, sessionToken, safeEqual } from '@/lib/bicom-auth';

export const runtime = 'nodejs';

// POST { password } → dépose le cookie de session si le mot de passe est bon.
export async function POST(request) {
  let password = '';
  try {
    ({ password } = await request.json());
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const expected = process.env.BICOM_PASSWORD;
  if (!expected) {
    // Sans variable d'environnement, on refuse tout plutôt que d'ouvrir la page.
    console.error('BICOM_PASSWORD non configurée');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  if (!safeEqual(password, expected)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(BICOM_COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: BICOM_MAX_AGE,
  });
  return res;
}

// DELETE → déconnexion.
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(BICOM_COOKIE, '', { path: '/', maxAge: 0 });
  return res;
}
