import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    let res = NextResponse.next()
    if (!req.nextUrl.pathname.startsWith('/api')) {
        res.headers.set('Cache-Control', 's-maxage=1, stale-while-revalidate')
    }
    return res
}
