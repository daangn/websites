import type { GatsbyNode } from 'gatsby';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-react-jsx'),
    options: {
      runtime: 'automatic',
    },
  });

  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-polished'),
    options: {},
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const gql = String.raw;

  // FIXME
  // see https://github.com/angeloashmore/gatsby-source-prismic/issues/382
  actions.createTypes(gql`
    type PrismicImageFixedType {
      base64: String
      width: Int
      height: Int
      src: String
      srcSet: String
      srcWebp: String
      srcSetWebp: String
    }

    type PrismicImageFluidType {
      base64: String
      aspectRatio: Float
      src: String
      srcSet: String
      srcWebp: String
      srcSetWebp: String
      sizes: String
    }
  `);

  // Type assertions for Site metadata
  actions.createTypes(gql`
    type Query {
      site: Site!
    }

    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      siteUrl: String!
    }
  `);

  // Type assertions for FAQ contents
  actions.createTypes(gql`
    type PrismicFaq {
      data: PrismicFaqDataType!
    }

    type PrismicFaqDataType {
      entries: [PrismicFaqDataEntries!]!
    }
  `);

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

  // Type assertions for Teams Contents
  actions.createTypes(gql`
    type PrismicTeamContents {
      data: PrismicTeamContentsDataType!
    }

    type PrismicTeamContentsDataType {
      main_body: [PrismicTeamContentsDataMainBodySlicesType!]!
      culture_body: [PrismicTeamContentsDataCultureBodySlicesType!]!
      life_body: [PrismicTeamContentsDataLifeBodySlicesType!]!
    }

    # Avoid conflict
    # type PrismicTeamContentsDataMainBodyKeyVisual {
    #   primary: PrismicTeamContentsDataMainBodyKeyVisualPrimary!
    # }

    type PrismicTeamContentsDataMainBodyMemberQuoteCarousel {
      items: [PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem!]!
    }

    type PrismicTeamContentsDataLifeBodyLifeContent {
    #  primary: PrismicTeamContentsDataLifeBodyLifeContentPrimary! 
      items: [PrismicTeamContentsDataLifeBodyLifeContentItem!]!
    }
  `);

  // Type assertions for Member Profiles
  actions.createTypes(gql`
    type PrismicMemberProfile {
      data: PrismicMemberProfileDataType!
    }
  `);
};
