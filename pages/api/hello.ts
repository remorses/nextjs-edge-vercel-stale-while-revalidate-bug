import { NextResponse } from 'next/server'

export default function handler(req) {
    const res = NextResponse.json({ hello: 'world' })
    res.headers.set('Cache-Control', 'public, s-maxage=1, stale-while-revalidate')
    return res
}

export const config = {
    runtime: 'edge',
}
