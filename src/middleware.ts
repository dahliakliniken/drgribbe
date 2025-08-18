import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.facebook.com https://cookie-script.com https://*.cookie-script.com https://pagead2.googlesyndication.com;
    style-src 'self' 'unsafe-inline' https://cookie-script.com https://*.cookie-script.com;
    font-src 'self' https://js.stripe.com;
    img-src 'self' blob: data: https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://www.facebook.com/privacy_sandbox/pixel/register https://cookie-script.com https://pagead2.googlesyndication.com;
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.facebook.com https://graph.facebook.com https://cookie-script.com https://pagead2.googlesyndication.com;
    frame-src 'self' https://app.meridiq.com https://www.google.com https://*.google.com https://www.googletagmanager.com https://www.facebook.com https://cookie-script.com https://vercel.live;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    report-uri /api/csp-report;
    report-to default;
    upgrade-insecure-requests;
  `
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    }
  ]
}
