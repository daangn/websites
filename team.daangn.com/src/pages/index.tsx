import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import PageTitle from '~/components/PageTitle';
import PrismicTeamContentsMainBodyKeyVisualWithText from '~/components/PrismicTeamContentsMainBodyKeyVisualWithText';
import PrismicTeamContentsMainBodyParagraph from '~/components/PrismicTeamContentsMainBodyParagraph';
import PrismicTeamContentsMainBodySingleIllustration from '~/components/PrismicTeamContentsMainBodySingleIllustration';
import PrismicTeamContentsMainBodySummaryAndDetail from '~/components/PrismicTeamContentsMainBodySummaryAndDetail';
import PrismicTeamContentsMainBodyMemberQuoteCarousel from '~/components/PrismicTeamContentsMainBodyMemberQuoteCarousel';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query IndexPage {
    ...DefaultLayout_query
    prismicTeamContents {
      data {
        main_page_title {
          text
        }
        main_body {
          __typename
          ...PrismicTeamContentsMainBodyKeyVisualWithText_data
          ...PrismicTeamContentsMainBodyParagraph_data
          ...PrismicTeamContentsMainBodySingleIllustration_data
          ...PrismicTeamContentsMainBodySummaryAndDetail_data
          ...PrismicTeamContentsMainBodyMemberQuoteCarousel_data
        }
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  required(data.prismicTeamContents);
  return (
    <>
      <PageTitle size={{ '@sm': 'sm' }}>
        {data.prismicTeamContents.data.main_page_title?.text}
      </PageTitle>
      {data.prismicTeamContents.data.main_body
        .map((section, i) => mapAbstractTypeWithDefault(section, {
          PrismicTeamContentsMainBodyKeyVisualWithText: section => (
            <PrismicTeamContentsMainBodyKeyVisualWithText
              key={i}
              data={section}
            />
          ),
          PrismicTeamContentsMainBodyParagraph: section => (
            <PrismicTeamContentsMainBodyParagraph
              key={i}
              data={section}
            />
          ),
          PrismicTeamContentsMainBodySingleIllustration: section => (
            <PrismicTeamContentsMainBodySingleIllustration
              key={i}
              data={section}
            />
          ),
          PrismicTeamContentsMainBodySummaryAndDetail: section => (
            <PrismicTeamContentsMainBodySummaryAndDetail
              key={i}
              data={section}
            />
          ),
          PrismicTeamContentsMainBodyMemberQuoteCarousel: section => (
            <PrismicTeamContentsMainBodyMemberQuoteCarousel
              key={i}
              data={section}
            />
          ),
          _: null,
        }))
      }
    </>
  );
};

export default withPreview(IndexPage);
