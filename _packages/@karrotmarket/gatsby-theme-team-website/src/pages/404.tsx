import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { mapLink, useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { required } from '@cometjs/core';
import DefaultLayout from '../layouts/DefaultLayout';
import ButtonLink from '../components/Button';

import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews';

import Illustration from '../templates/notFoundPage/Illustration';

type NotFoundPageProps = PageProps<GatsbyTypes.TeamWebsite_NotFoundPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_NotFoundPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        notfound_page_title {
          text
        }
        notfound_page_link_group {
          display_text
          link {
            url
          }
        }
      }
    }
  }
`;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: rem(56),
  margin: '0 auto',
  paddingX: rem(32),
});

const Title = styled('h1', {
  textAlign: 'center',
  fontSize: '$subtitle1',

  '@sm': {
    fontSize: '$heading3',
  },
});

const Control = styled('div', {
  display: 'flex',
  gap: rem(16),
  width: '100%',
  flexDirection: 'column',

  '@sm': {
    maxWidth: rem(500),
    flexDirection: 'row',
  },
});

const NotFoundPage: React.FC<NotFoundPageProps> = pageProps => {
  const { data } = pageProps;
  const parseLink = useLinkParser();

  required(data.prismicTeamContents?.data);

  return (
    <DefaultLayout {...pageProps}>
      <GatsbySeo noindex nofollow />
      <Container>
        <Title>
          {data.prismicTeamContents.data.notfound_page_title.text}
        </Title>
        <Illustration />
        <Control>
          {data.prismicTeamContents.data.notfound_page_link_group
            .map((entry, i) => {
              const link = parseLink(entry.link.url);
              return mapLink(link, {
                Internal: link => (
                  <ButtonLink
                    key={i}
                    to={link.pathname}
                    type={i === 0 ? 'primary' : 'default'}
                    fullWidth={{ initial: true, '@sm': false }}
                  >
                    {entry.display_text}
                  </ButtonLink>
                ),
                External: link => (
                  <ButtonLink
                    as="a"
                    target="_blank"
                    rel="external noopener"
                    key={i}
                    href={link.url.href}
                    type={i === 0 ? 'primary' : 'default'}
                    fullWidth={{ initial: true, '@sm': false }}
                  >
                    {entry.display_text}
                  </ButtonLink>
                ),
              });
            })
          }
        </Control>
      </Container>
    </DefaultLayout>
  );
};

export default withPrismicUnpublishedPreview(NotFoundPage);
