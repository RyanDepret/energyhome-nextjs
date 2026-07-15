import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request) {
  const { pathname } = request.nextUrl
  
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/fr', request.url))
  }
  
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}