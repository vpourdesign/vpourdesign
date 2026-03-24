import { NextResponse } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next();
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
