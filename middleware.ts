import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || ''

    // 👇 Allow all social crawlers explicitly
    if (
        userAgent.includes('facebookexternalhit') ||
        userAgent.includes('Facebot') ||
        userAgent.includes('Twitterbot') ||
        userAgent.includes('WhatsApp') ||
        userAgent.includes('Instagram')
    ) {
        return NextResponse.next()
    }

    return NextResponse.next()
}