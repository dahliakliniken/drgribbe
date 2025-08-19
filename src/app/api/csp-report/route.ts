import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const ENABLED = process.env.CSP_REPORT_ENABLED === 'true'
const SAMPLE = Number(process.env.CSP_REPORT_SAMPLE_RATE ?? '0.05') // 5% default
const ONLY_PREVIEW = process.env.CSP_REPORT_ONLY_PREVIEW === 'true' // Only log for GTM Preview

function shouldLog(documentURL?: string) {
  if (process.env.NODE_ENV !== 'production') return true
  if (!ENABLED) return false
  if (ONLY_PREVIEW && documentURL) {
    const u = documentURL.toLowerCase()
    if (!(u.includes('gtm_preview') || u.includes('gtm_debug'))) return false
  }
  return Math.random() < SAMPLE
}

function maskUrl(u: unknown): string | undefined {
  if (typeof u !== 'string') return undefined
  // Remove query parameters and fragments from URLs for privacy
  return u.replace(/[?#].*$/, '')
}

export async function POST(request: NextRequest) {
  try {
    const ct = request.headers.get('content-type') || ''
    let raw: unknown

    if (
      ct.includes('application/reports+json') ||
      ct.includes('application/csp-report') ||
      ct.includes('application/json')
    ) {
      raw = await request.json().catch(() => undefined)
    } else {
      const text = await request.text().catch(() => '')
      try {
        raw = JSON.parse(text)
      } catch {
        raw = text
      }
    }

    type ReportBody = {
      effectiveDirective?: string
      'violated-directive'?: string
      violatedDirective?: string
      blockedURL?: string
      'blocked-uri'?: string
      blockedUri?: string
      documentURL?: string
      'document-uri'?: string
      sourceFile?: string
      lineNumber?: number
      columnNumber?: number
      [key: string]: unknown
    }
    type ReportEntry = {
      type?: string
      body?: ReportBody
      [key: string]: unknown
    }
    type LegacyEnvelope = {
      'csp-report': ReportBody
    }

    const isReportBody = (v: unknown): v is ReportBody =>
      typeof v === 'object' && v !== null
    const isReportEntry = (v: unknown): v is ReportEntry =>
      isReportBody(v) && ('type' in v || 'body' in v)
    const isLegacyEnvelope = (v: unknown): v is LegacyEnvelope =>
      isReportBody(v) && 'csp-report' in (v as Record<string, unknown>)

    let entries: (ReportEntry | ReportBody)[] = []
    if (Array.isArray(raw)) {
      entries = raw.filter(isReportBody)
    } else if (isLegacyEnvelope(raw)) {
      entries = [raw['csp-report']]
    } else if (isReportEntry(raw)) {
      entries = [raw]
    } else if (isReportBody(raw)) {
      entries = [raw]
    }

    if (entries.length > 0) {
      const now = new Date().toISOString()
      for (const e of entries) {
        const body: ReportBody =
          isReportEntry(e) && e.body && isReportBody(e.body)
            ? e.body
            : (e as ReportBody)
        const docUrl = (body.documentURL ?? body['document-uri']) as
          | string
          | undefined

        if (!shouldLog(docUrl)) continue

        const payload = {
          effectiveDirective:
            body.effectiveDirective ??
            body['violated-directive'] ??
            body.violatedDirective,
          blockedURL: maskUrl(
            body.blockedURL ?? body['blocked-uri'] ?? body.blockedUri
          ),
          documentURL: maskUrl(docUrl),
          sourceFile: maskUrl(body.sourceFile),
          lineNumber: body.lineNumber,
          columnNumber: body.columnNumber
        }
        console.warn('[CSP]', now, payload)
      }
    }

    return new NextResponse(null, { status: 204 })
  } catch (err) {
    console.error('CSP report error:', err)
    return NextResponse.json(
      { message: 'Error processing report' },
      { status: 500 }
    )
  }
}
