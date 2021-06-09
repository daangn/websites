import type { GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const gql = String.raw;

  // Type assertions for Site Navigation contents
  actions.createTypes(gql`
    type PrismicSiteNavigation {
      data: PrismicSiteNavigationDataType!
    }

    type PrismicSiteNavigationDataType {
      header_entries: [PrismicSiteNavigationDataHeaderEntries!]!
      footer_entries: [PrismicSiteNavigationDataFooterEntries!]!
      sns_profiles: [PrismicSiteNavigationDataSnsProfiles!]!
    }
  `);
};
