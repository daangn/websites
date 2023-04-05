"use strict";

exports.__esModule = true;
exports.default = void 0;
var _linkResolver = require("@karrotmarket/gatsby-theme-post/src/@karrotmarket/gatsby-theme-prismic/linkResolver");
// @ts-ignore

const config = () => ({
  plugins: ['gatsby-theme-stitches', 'gatsby-plugin-svgr', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'placeholder',
      path: `${__dirname}/package.json`
    }
  }, {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: ['avif', 'webp', 'auto'],
        placeholder: 'dominantColor',
        quality: 80,
        breakpoints: [576, 768, 992, 1200, 1400, 1920],
        backgroundColor: 'transparent',
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {}
      }
    }
  }, 'gatsby-plugin-image', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-plugin-seed-design',
    options: {
      mode: 'light-only'
    }
  },
  // 커스텀 플러그인
  {
    resolve: '@karrotmarket/gatsby-theme-prismic',
    options: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      linkResolver: _linkResolver.linkResolver
    }
  }]
});
var _default = config;
exports.default = _default;