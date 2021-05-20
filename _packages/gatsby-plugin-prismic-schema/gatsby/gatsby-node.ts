import type { GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const gql = String.raw;

  actions.createTypes(gql`
    type PrismicLinkType {
      isBroken: Boolean!
      url: String!
      target: String!
      raw: JSON!
    }

    type PrismicImageDimensionsType {
      width: Int!
      height: Int!
    }

    type PrismicStructuredTextType {
      html: String!
      text: String!
      raw: JSON!
    }

    type PrismicGeoPointType {
      latitude: Float!
      longitude: Float!
    }
  `);
};
