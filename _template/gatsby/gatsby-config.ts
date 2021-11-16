import type { GatsbyConfig } from 'gatsby';

const siteUrl = new URL('https://www.example.com');

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: siteUrl.origin,
};

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
  ],
};

export default config;
