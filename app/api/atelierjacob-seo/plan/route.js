import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { isAuthorized } from '@/lib/atelierjacob-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FICHIER = path.join(process.cwd(), 'content', 'atelierjacob', 'plan.html');

/**
 * Sert le plan SEO. Le HTML ne quitte jamais le serveur sans cookie valide —
 * il n'est ni dans le bundle client, ni dans /public.
 */
export async function GET(request) {
  if (!isAuthorized(request)) {
    return new NextResponse('Non autorisé', {
      status: 401,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  let html;
  try {
    html = fs.readFileSync(FICHIER, 'utf8');
  } catch (e) {
    console.error('Plan Ateliers Jacob introuvable :', FICHIER, e.message);
    return new NextResponse('Plan introuvable', { status: 500 });
  }

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
      'Cache-Control': 'private, no-store',
    },
  });
}
