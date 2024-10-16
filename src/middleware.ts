import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Sadece kök URL'sine gelen isteklerde yönlendirme yap
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Diğer sayfalara izin ver
  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // Sadece kök URL'si için middleware'i uygula
}
