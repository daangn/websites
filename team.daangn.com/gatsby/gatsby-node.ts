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
      entries: [PrismicFaqEntriesGroupType!]!
    }
  `);

  // Type assertions for Site Navigation contents
  actions.createTypes(gql`
    type PrismicSiteNavigation {
      data: PrismicSiteNavigationDataType!
    }

    type PrismicSiteNavigationDataType {
      header_entries: [PrismicSiteNavigationHeaderEntriesGroupType!]!
      footer_entries: [PrismicSiteNavigationFooterEntriesGroupType!]!
      sns_profiles: [PrismicSiteNavigationSnsProfilesGroupType!]!
    }
  `);

  // Type assertions for Teams Contents
  actions.createTypes(gql`
    type PrismicTeamContents {
      data: PrismicTeamContentsDataType!
    }

    type PrismicTeamContentsDataType {
      main_body: [PrismicTeamContentsMainBodySlicesType!]!
      culture_body: [PrismicTeamContentsCultureBodySlicesType!]!
      life_body: [PrismicTeamContentsLifeBodySlicesType!]!
    }

    type PrismicTeamContentsMainBodyKeyVisualWithText {
      primary: PrismicTeamContentsMainBodyKeyVisualWithTextPrimaryType!
    }

    type PrismicTeamContentsMainBodySummaryAndDetail {
      primary: PrismicTeamContentsMainBodySummaryAndDetailPrimaryType!
    }

    type PrismicTeamContentsMainBodyParagraph {
      primary: PrismicTeamContentsMainBodyParagraphPrimaryType!
    }

    type PrismicTeamContentsMainBodySingleIllustration {
      primary: PrismicTeamContentsMainBodySingleIllustrationPrimaryType!
    }

    type PrismicTeamContentsMainBodyMemberQuoteCarousel {
      items: [PrismicTeamContentsMainBodyMemberQuoteCarouselItemType!]!
    }
  `);

  // Type assertions for Member Profiles
  actions.createTypes(gql`
    type PrismicMemberProfile {
      data: PrismicMemberProfileDataType!
    }
  `);
};
