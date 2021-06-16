import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  plugins: [
    "gatsby-theme-stitches",
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["avif", "webp", "auto"],
          placeholder: "dominantColor",
          quality: 80,
          breakpoints: [576, 768, 992, 1200, 1400, 1920],
          backgroundColor: "transparent",
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    `gatsby-plugin-preload-fonts`,
    "gatsby-plugin-react-helmet-async",
    "@karrotmarket/gatsby-theme-prismic",
    "@karrotmarket/gatsby-theme-website",
  ],
};

export default config;
