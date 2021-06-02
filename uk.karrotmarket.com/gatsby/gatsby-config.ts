import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
    siteUrl: "https://uk.karrotmarket.com/",
    siteName: "Karrot - Your Local Buying &amp; Selling Community for Verified Locals",
    description: "Karrot - the app for verified locals to buy &amp; sell. See what&#39;s for offer today!",
};

const config: GatsbyConfig = {
    flags: {
        FAST_DEV: true,
        QUERY_ON_DEMAND: true,
        LAZY_IMAGES: true,
        PARALLEL_SOURCING: true,
        DEV_SSR: false,
    },
    siteMetadata,
    plugins: [
        "gatsby-plugin-concurrent-mode",
        "gatsby-theme-stitches",
        "gatsby-plugin-svgr",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet-async",
        {
            resolve: "gatsby-plugin-module-resolver",
            options: {
                root: "./src",
                aliases: {
                    "@src": "./",
                },
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/layout/index.tsx"),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `icons`,
                path: `${__dirname}/src/icons`,
            },
        },
        {
            resolve: "gatsby-plugin-typegen",
            options: {
                outputPath: "src/__generated__/gatsby-types.d.ts",
                emitSchema: {
                    "src/__generated__/gatsby-schema.graphql": true,
                    "src/__generated__/gatsby-introspection.json": true,
                },
                emitPluginDocuments: {
                    "src/__generated__/gatsby-plugin-documents.graphql": true,
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: siteMetadata.siteName,
                start_url: "/",
                background_color: "#FFFFFF",
                icon: "src/assets/favicon.svg",
            },
        },
        {
            resolve: "gatsby-source-prismic",
            options: {
                repositoryName: "karrot",
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                prismicToolbar: process.env.NODE_ENV === "development",
                schemas: {
                    global_contents: require("./prismic/global_contents.json"),
                },
            },
        },
        "gatsby-plugin-prismic-schema",
    ],
};

export default config;
