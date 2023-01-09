import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    let res = await NextResponse.next(req)
    if (!req.nextUrl.pathname.startsWith('/api')) {
        res.headers.set('Cache-Control', 's-maxage=1, stale-while-revalidate')
    }
    return res
}
