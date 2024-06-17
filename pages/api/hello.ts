import { NextResponse } from 'next/server'

export default function handler(req, res) {
    // const res = NextResponse.json({ hello: 'world' })
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=999')
    return res
}

// export const config = {
//     runtime: 'edge',
// }
