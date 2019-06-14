/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const fetch = require('isomorphic-unfetch')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './theme/antd-custom.less'), 'utf8')
)

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
  
  /* 
  by default, the next build doesn't use a static relative path for directory access 
  which is needed for a static site
  use `assetPrefix` to add it (as per: https://github.com/zeit/next.js/issues/2759)
  For more advanced usage see: https://nextjs.org/docs#dynamic-assetprefix
  */

  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '.',

  // route configuration
  exportPathMap: () => ({'/': { page: '/'}})
})

