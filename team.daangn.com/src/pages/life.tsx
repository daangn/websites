import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { required } from '@cometjs/core';
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
  required(data.prismicTeamContents);
  return (
    <Container>
      <PageTitle size={{ '@sm': 'sm' }}>
        {data.prismicTeamContents.data.life_page_title?.text}
      </PageTitle>
      <Content>
        {data.prismicTeamContents.data.life_body.map((data, i) => mapAbstractTypeWithDefault(data, {
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
