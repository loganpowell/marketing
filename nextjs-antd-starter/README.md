#Next.js with AntD Starter

## Direction

- `git clone`
- `npm install`

## Notes References and Resources (for why this was such a pain to figure out):

- by default, the next build doesn't use a static relative path for directory access which is needed for a static site use [`assetPrefix`](https://github.com/zeit/next.js/issues/2759)  
  - See [this line of code](https://github.com/loganpowell/embeds/blob/master/nextjs-antd-starter/next.config.js#L48)
  - For more advanced usage see: [Dynamic `assetPrefix` docs](https://nextjs.org/docs#dynamic-assetprefix)
- There's [an issue](https://github.com/zeit/next.js/issues/6181) with using `.less` files that AntD relies on... just copy the [Example Repo from the Next Org](https://github.com/zeit/next.js/tree/canary/examples/with-ant-design-less)