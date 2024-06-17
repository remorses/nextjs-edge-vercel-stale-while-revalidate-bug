export async function getServerSideProps(context) {
    context.res.headers.set(
        'Cache-Control',
        's-maxage=1, stale-while-revalidate=999',
    )

    return { props: {} }
}
export default function Page() {
    return 'hello'
}
