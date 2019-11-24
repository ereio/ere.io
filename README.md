# ere.io

## my website - note i'm using this readme for drafting for a bit

#### things that are here:
- the website
- blog (ere.io/blog)
- my email (taylor@ere.io)

Stacks for ere.io so far:
```
1)  website: S3 Bucket w/ Dist -> Cloudfront -> Route 53 + Lambda@edge
    mail: EC2 t2.small ($0.024/hr)
```
- way too complicated to serve static assets / JAMStack for the website
- JS bundles wouldn't be as bad because implicit index.html wouldn't be a problem
- EC2's are also really expensive for personal use, they must be cheaper at scale

```
2)  website: Netlify -> Cloudflare DNS
    mail: GCP f1-micro/g1-small ($0.016/hr / $0.019/hr)
```

- GCP blocks port 25 for mail and suggests SendGrid or GSuite -_-

```
3)  website: Netlify -> Cloudflare DNS
    mail: Digital Ocean standard.1GB/1CPU ($0.007/hr / $5/mo)
```
- working well so far :D

Goals:
```
website: RPI4 -> IPFS -> Cloudflare (Free w/ hosted node)
mail: RPI4 -> Tunneler or current
tunneler: Cloud Provider -> Cloudflare

```

Most of what's holding me back is home network setup.