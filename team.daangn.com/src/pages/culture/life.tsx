import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { required } from '@cometjs/core';
import { useLocation } from '@reach/router';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';

import _PageTitle from '~/components/PageTitle';
import PrismicTeamContentsDataLifeBodyLifeContent from '~/components/PrismicTeamContentsDataLifeBodyLifeContent';

type LifePageProps = PageProps<GatsbyTypes.LifePageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query LifePage {
    ...DefaultLayout_query
    prismicTeamContents {
      _previewable
      data {
        life_page_meta_title
        life_page_meta_description
        life_page_meta_image {
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630, toFormat: JPG) {
                src
                width
                height
              }
            }
          }
        }
        life_page_title {
          text
        }
        life_body {
          __typename
          ...PrismicTeamContentsDataLifeBodyLifeContent_data
        }
      }
    }
  }
`;

const Container = styled('div', {
  contentArea: true,

  maxWidth: rem(760),
  margin: '0 auto',
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(56),

  '@sm': {
    marginBottom: rem(120),
  },
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(64),
});

const LifePage: React.FC<LifePageProps> = ({
  data,
}) => {
  const location = useLocation();

  required(data.prismicTeamContents?.data?.life_body);

  const metaImage = data.prismicTeamContents.data.life_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <Container>
      <GatsbySeo
        title={data.prismicTeamContents.data.life_page_meta_title}
        description={data.prismicTeamContents.data.life_page_meta_description}
        openGraph={{
          title: data.prismicTeamContents.data.life_page_meta_title,
          description: data.prismicTeamContents.data.life_page_meta_description,
          ...metaImage && {
            images: [{
              url: location.origin + metaImage.src,
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
      <PageTitle>
        {data.prismicTeamContents.data.life_page_title?.text}
      </PageTitle>
      <Content>
        {data.prismicTeamContents.data.life_body.map((data, i) => mapAbstractTypeWithDefault(data!, {
          PrismicTeamContentsDataLifeBodyLifeContent: data => (
            <PrismicTeamContentsDataLifeBodyLifeContent
              key={i}
              data={data}
            />
          ),
          _: null,
        }))}
      </Content>
    </Container>
  );
};

export default LifePage;
