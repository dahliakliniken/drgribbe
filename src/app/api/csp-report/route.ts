// app/api/csp-report/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the CSP violation (you might want to use a proper logging service)
    console.log('CSP Violation Report:', JSON.stringify(body, null, 2))

    return NextResponse.json(
      { message: 'CSP report received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing CSP report:', error)
    return NextResponse.json(
      { message: 'Error processing report' },
      { status: 500 }
    )
  }
}
