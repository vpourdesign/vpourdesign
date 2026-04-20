import { NextResponse } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request) {
  const url = request.nextUrl;
  const { pathname } = url;
  const hostname = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';

  // Canonical redirect — single 301, no chains
  // Handles: http://vpourdesign.com  http://www.vpourdesign.com  https://www.vpourdesign.com
  const isWww = hostname.startsWith('www.');
  const isHttp = proto === 'http';

  if (isWww || isHttp) {
    const canonicalHost = hostname.replace(/^www\./, '');
    const newUrl = new URL(request.url);
    newUrl.protocol = 'https:';
    newUrl.host = canonicalHost;
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  // Skip static files, API routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next();
  }

  // Rediriger les anciennes URLs Wix avec query string ?project=
  if (url.searchParams.has('project')) {
    const project = url.searchParams.get('project');
    if (project === 'probaclac') {
      return NextResponse.redirect(new URL('/projets/probaclac', request.url), 301);
    }
    return NextResponse.redirect(new URL('/projets', request.url), 301);
  }

  // Rediriger ?option=com_content (ancien Joomla)
  if (url.searchParams.has('option')) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  // Check if path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // For /en paths, let them through (handled by /en route group)
  // For all other paths, they're French by default — no redirect needed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|images|.*\\..*).*)'],
};
