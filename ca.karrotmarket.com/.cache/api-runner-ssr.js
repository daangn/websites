var plugins = [{
      name: 'gatsby-theme-stitches',
      plugin: require('/Users/lewis/Desktop/daangn/websites/node_modules/gatsby-theme-stitches/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/lewis/Desktop/daangn/websites/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-helmet-async',
      plugin: require('/Users/lewis/Desktop/daangn/websites/node_modules/gatsby-plugin-react-helmet-async/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-layout',
      plugin: require('/Users/lewis/Desktop/daangn/websites/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/lewis/Desktop/daangn/websites/_packages/@karrotmarket/gatsby-theme-global-website/src/layout/index.tsx"},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/lewis/Desktop/daangn/websites/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Karrot - Your Local Buying &amp; Selling Community for Verified Locals","start_url":"/","background_color":"#FFFFFF","icon":"src/assets/favicon.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"7dcc39f261bfd67ba48775b30250e407"},
    },{
      name: '@karrotmarket/gatsby-theme-prismic',
      plugin: require('/Users/lewis/Desktop/daangn/websites/_packages/@karrotmarket/gatsby-theme-prismic/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: '@karrotmarket/gatsby-theme-global-website',
      plugin: require('/Users/lewis/Desktop/daangn/websites/_packages/@karrotmarket/gatsby-theme-global-website/gatsby-ssr'),
      options: {"plugins":[],"lang":"en-ca","hot_articles_api":"https://ca.karrotmarket.com/hot_articles.json?limit=6"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
