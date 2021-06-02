import type { GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const gql = String.raw;

  actions.createTypes(gql`
    type PrismicLinkType {
      isBroken: Boolean!
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
