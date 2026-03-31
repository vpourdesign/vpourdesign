import { NextResponse } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request) {
  const url = request.nextUrl;
  const { pathname } = url;
  const hostname = request.headers.get('host') || '';

  // www → non-www redirect (301 permanent)
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(request.url);
    newUrl.host = hostname.replace('www.', '');
    return NextResponse.redirect(newUrl, 301);
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
