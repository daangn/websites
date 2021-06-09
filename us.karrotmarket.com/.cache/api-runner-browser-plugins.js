module.exports = [{
      plugin: require('../../node_modules/gatsby-plugin-concurrent-mode/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-react-helmet-async/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/lewis/Desktop/daangn/websites/_packages/@karrotmarket/gatsby-theme-global-website/src/layout/index.tsx"},
    },{
      plugin: require('../../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Karrot - Your Local Buying &amp; Selling Community for Verified Locals","start_url":"/","background_color":"#FFFFFF","icon":"src/assets/favicon.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"7dcc39f261bfd67ba48775b30250e407"},
    },{
      plugin: require('../../_packages/@karrotmarket/gatsby-theme-prismic/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../_packages/@karrotmarket/gatsby-theme-global-website/gatsby-browser.js'),
      options: {"plugins":[],"lang":"en-gb","hot_articles_api":"https://ca.karrotmarket.com/hot_articles.json?limit=6"},
    }]
