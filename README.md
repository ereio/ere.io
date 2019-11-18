# ere.io
## my website

Stacks for ere.io so far:
```
1)  website: S3 Bucket w/ Dist -> Cloudfront -> Route 53
    mail: EC2 t2.small ($0.024/hr)

2)  website: Netlify -> Cloudflare DNS
    mail: GCP f1-micro ($0.016/hr)
```

Stack goals:
```
website: RPI4 -> IPFS -> Cloudflare (Free w/ hosted node)
mail: RPI4 -> Tunneler
Tunneller: Cloud Provider Micro -> Cloudflare
```

Most of what's holding me back is home network setup.