To reproduce:

```sh
# deploy application to vercel
curl -i https://nextjs-edge-vercel-stale-while-revalidate-bug.vercel.app/api/hello
curl -i https://nextjs-edge-vercel-stale-while-revalidate-bug.vercel.app/api/hello
# age: 10
# x-vercel-cache: STALE
curl -i https://nextjs-edge-vercel-stale-while-revalidate-bug.vercel.app/api/hello
# age: 20
# x-vercel-cache: STALE
# ...
curl -ihttps://nextjs-edge-vercel-stale-while-revalidate-bug.vercel.app/api/hello
# age: 100
# x-vercel-cache: STALE
# it will always return stale cache without revalidating
```


