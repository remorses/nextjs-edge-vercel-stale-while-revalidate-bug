export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        's-maxage=1, stale-while-revalidate=999',
    )

    return { props: {} }
}
export default function Page() {
    return 'hello'
}
