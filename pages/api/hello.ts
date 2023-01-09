import { NextResponse } from 'next/server'

export default function handler(req) {
    const res = NextResponse.json({ hello: 'world' })
    res.headers.set('Cache-Control', 's-maxage=1, stale-while-revalidate=2')
    return res
}

export const config = {
    runtime: 'edge',
}
