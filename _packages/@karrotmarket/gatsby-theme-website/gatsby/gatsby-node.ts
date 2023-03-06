import { type GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
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
