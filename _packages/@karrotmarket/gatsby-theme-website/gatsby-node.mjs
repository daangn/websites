// @ts-check

/**
 * @typedef {import('gatsby').GatsbyNode} GatsbyNode
 */

/**
 * @type {GatsbyNode['createSchemaCustomization']}
 */
export const createSchemaCustomization = ({ actions }) => {
  const gql = String.raw;

  actions.createTypes(gql`
    type Site {
      siteMetadata: SiteSiteMetadata!
    }

    type SiteSiteMetadata {
      siteUrl: String!
      title: String!
      description: String!
    }
  `);
};
