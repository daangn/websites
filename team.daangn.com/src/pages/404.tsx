import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { ReactComponent as DaangniEmbarrassed } from '~/assets/daangni_embarrassed.svg';
import DefaultLayout from '~/layouts/DefaultLayout';
import ButtonLink from '~/components/Button';

import { withPrismicUnpublishedPreview, componentResolverFromMap } from 'gatsby-plugin-prismic-previews';
import { defaultRepositoryConfig } from '@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig';
import { linkResolver } from '@karrotmarket/gatsby-theme-prismic/src/linkResolver';

import TeamsArticlePageTemplate from './jobs/article/{PrismicTeamsArticle.uid}';

type NotFoundPageProps = PageProps<GatsbyTypes.NotFoundPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query NotFoundPage {
    ...DefaultLayout_query
  }
`;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: rem(56),
  margin: '0 auto',
});

const Title = styled('h1', {
  fontSize: '$subtitle1',

  variants: {
    size: {
      sm: {
        fontSize: '$heading3',
      },
    },
  },
});

const Illustration = styled(DaangniEmbarrassed, {
  maxWidth: rem(500),
});

const Control = styled('div', {
  display: 'flex',
  gap: rem(16),
  width: '100%',
  flexDirection: 'column',

  variants: {
    wide: {
      true: {
        maxWidth: rem(500),
        flexDirection: 'row',
      },
    },
  },
});

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  ...pageProps
}) => {
  return (
    <DefaultLayout {...pageProps}>
      <GatsbySeo noindex nofollow />
      <Container>
        <Title size={{ '@sm': 'sm' }}>페이지를 찾을 수 없어요</Title>
        <Illustration />
        <Control wide={{ '@sm': true }}>
          <ButtonLink to="/culture/" fullWidth={{ '@sm': true }}>
            당근마켓 팀 문화 구경하기
          </ButtonLink>
          <ButtonLink to="/jobs/" type="primary" fullWidth={{ '@sm': true }}>
            당근마켓 지원하러가기
          </ButtonLink>
        </Control>
      </Container>
    </DefaultLayout>
  );
};

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    ...defaultRepositoryConfig,
    componentResolver: componentResolverFromMap({
      teams_article: TeamsArticlePageTemplate,
    }),
  },
]);
