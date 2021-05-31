import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import _PageTitle from '~/components/PageTitle';
import PrismicTeamContentsDataMainBodyKeyVisual from '~/components/PrismicTeamContentsDataMainBodyKeyVisual';
import PrismicTeamContentsDataMainBodyMemberQuoteCarousel from '~/components/PrismicTeamContentsDataMainBodyMemberQuoteCarousel';
import PrismicTeamContentsDataMainBodyTitleAndDescription from '~/components/PrismicTeamContentsDataMainBodyTitleAndDescription';
import PrismicTeamContentsDataMainBodyTitleAndIllustration from '~/components/PrismicTeamContentsDataMainBodyTitleAndIllustration';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query IndexPage {
    ...DefaultLayout_query
    prismicTeamContents {
      _previewable
      data {
        main_page_title {
          text
        }
        main_body {
          __typename
          ...PrismicTeamContentsDataMainBodyKeyVisual_data
          ...PrismicTeamContentsDataMainBodyMemberQuoteCarousel_data
          ...PrismicTeamContentsDataMainBodyTitleAndDescription_data
          ...PrismicTeamContentsDataMainBodyTitleAndIllustration_data
        }
      }
    }
  }
`;

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(40),

  '@md': {
    marginBottom: rem(80),
  },
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(80),

  '@md': {
    gap: rem(160),
  },
});

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  required(data.prismicTeamContents);
  return (
    <>
      <PageTitle size={{ '@sm': 'sm' }}>
        {data.prismicTeamContents.data.main_page_title?.text}
      </PageTitle>
      <Content>
        {data.prismicTeamContents.data.main_body
          .map((data, i) => mapAbstractTypeWithDefault(data, {
            PrismicTeamContentsDataMainBodyKeyVisual: data => (
              <PrismicTeamContentsDataMainBodyKeyVisual
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyMemberQuoteCarousel: data => (
              <PrismicTeamContentsDataMainBodyMemberQuoteCarousel
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyTitleAndDescription: data => (
              <PrismicTeamContentsDataMainBodyTitleAndDescription
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataMainBodyTitleAndIllustration: data => (
              <PrismicTeamContentsDataMainBodyTitleAndIllustration
                key={i}
                data={data}
              />
            ),
            _: null,
          }))
        }
      </Content>
    </>
  );
};

export default withPrismicPreview(IndexPage, []);
