import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { isAuthorized } from '@/lib/bicom-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FICHIER = path.join(process.cwd(), 'content', 'bicom', 'grille.html');

/**
 * Sert la grille tarifaire. Le HTML ne quitte jamais le serveur sans cookie valide —
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
    console.error('Grille BICOM introuvable :', FICHIER, e.message);
    return new NextResponse('Grille introuvable', { status: 500 });
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
