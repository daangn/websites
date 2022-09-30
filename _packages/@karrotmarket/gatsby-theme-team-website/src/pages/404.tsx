import * as React from 'react';
import { rem } from 'polished';
import {
  graphql,
  type PageProps,
  type HeadProps,
} from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { Robots } from 'gatsby-plugin-head-seo/src';
import { mapLink, useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { required } from '@cometjs/core';
import ButtonLink from '../components/Button';

import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews';

import Illustration from '../templates/notFoundPage/Illustration';


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

const Container = styled('main', {
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

type NotFoundPageProps = PageProps<GatsbyTypes.TeamWebsite_NotFoundPageQuery>;
const NotFoundPage: React.FC<NotFoundPageProps> = ({
  data,
}) => {
  required(data.prismicTeamContents?.data);

  const parseLink = useLinkParser();

  return (
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
  );
};

export default withPrismicUnpublishedPreview(NotFoundPage);

type NotFoundPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_NotFoundPageQuery>;
export const Head: React.FC<NotFoundPageHeadProps> = () => {
  return (
    <>
      <Robots none />
    </>
  );
};
