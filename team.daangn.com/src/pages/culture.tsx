import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import _PageTitle from '~/components/PageTitle';
import Divider from '~/components/Divider';
import PrismicTeamContentsDataCultureBodyKeyVisual from '~/components/PrismicTeamContentsDataCultureBodyKeyVisual';
import PrismicTeamContentsDataCultureBodyHowWeWork from '~/components/PrismicTeamContentsDataCultureBodyHowWeWork';
import PrismicTeamContentsDataCultureBodyBenefit from '~/components/PrismicTeamContentsDataCultureBodyBenefit';
import PrismicTeamContentsDataCultureBodyIllustrationAndDescription from '~/components/PrismicTeamContentsDataCultureBodyIllustrationAndDescription';

type CulturePageProps = PageProps<GatsbyTypes.CulturePageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query CulturePage {
    ...DefaultLayout_query
    prismicTeamContents {
      _previewable
      data {
        culture_page_meta_title
        culture_page_meta_description
        culture_page_meta_image {
          localFile {
            childImageSharp {
              fixed(
                width: 1200
                height: 630
                toFormat: PNG
                quality: 90
              ) {
                src
                width
                height
              }
            }
          }
        }
        culture_page_title {
          text
        }
        culture_body {
          __typename
          ...PrismicTeamContentsDataCultureBodyKeyVisual_data
          ...PrismicTeamContentsDataCultureBodyHowWeWork_data
          ...PrismicTeamContentsDataCultureBodyBenefit_data
          ...PrismicTeamContentsDataCultureBodyIllustrationAndDescription_data
        }
      }
    }
  }
`;

const TitleContainer = styled('div', {
  contentArea: true,
});

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

const CulturePage: React.FC<CulturePageProps> = ({
  data,
}) => {
  const siteOrigin = useSiteOrigin();

  required(data.prismicTeamContents?.data?.culture_body);

  const metaImage = data.prismicTeamContents.data.culture_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <>
      <GatsbySeo
        title={data.prismicTeamContents.data.culture_page_meta_title}
        description={data.prismicTeamContents.data.culture_page_meta_description}
        openGraph={{
          title: data.prismicTeamContents.data.culture_page_meta_title,
          description: data.prismicTeamContents.data.culture_page_meta_description,
          ...metaImage && {
            images: [{
              url: siteOrigin + metaImage.src,
              width: metaImage.width,
              height: metaImage.height,
            }],
          },
        }}
        twitter={{
          ...metaImage && {
            cardType: 'summary_large_image',
          },
        }}
      />
      <TitleContainer>
        <PageTitle>
          {data.prismicTeamContents.data.culture_page_title?.text}
        </PageTitle>
      </TitleContainer>
      <Content>
        {data.prismicTeamContents.data.culture_body
          .map((data, i) => mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataCultureBodyKeyVisual: data => (
              <PrismicTeamContentsDataCultureBodyKeyVisual
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyHowWeWork: data => (
              <PrismicTeamContentsDataCultureBodyHowWeWork
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyBenefit: data => (
              <PrismicTeamContentsDataCultureBodyBenefit
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyIllustrationAndDescription: data => (
              <PrismicTeamContentsDataCultureBodyIllustrationAndDescription
                key={i}
                data={data}
              />
            ),
            PrismicTeamContentsDataCultureBodyDivider: (
              <Divider key={i} />
            ),
            _: null,
          }))}
      </Content>
    </>
  );
};

export default withPrismicPreview(CulturePage, []);
