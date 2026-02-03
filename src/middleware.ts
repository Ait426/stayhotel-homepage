/**
 * Next.js Middleware for Internationalization
 *
 * Custom middleware that handles locale detection and redirects
 * without depending on next-intl's config file.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['ko', 'en', 'ja', 'zh'];
const defaultLocale = 'ko';

function getLocale(request: NextRequest): string {
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2))
      .find((lang) => locales.includes(lang));
    if (preferredLocale) {
      return preferredLocale;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if path starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Set locale cookie for the current locale
    const locale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale);
    return response;
  }

  // Redirect to default locale if no locale in path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set('NEXT_LOCALE', locale);
  return response;
}

export const config = {
  matcher: [
    // Match all paths except:
    // - API routes
    // - Static files
    // - Images
    // - Favicon
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
