import { mapLink, useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { Robots } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import ButtonLink from '../components/Button';
import DefaultLayout from '../layouts/DefaultLayout';
import Illustration from '../templates/completedPage/Illustration';

export const query = graphql`
  query TeamWebsite_CompletedPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        completed_page_content {
          html
        }
        completed_page_link_group {
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
  contentArea: true,
  contentSpaceTop: true,
  display: 'grid',
  gap: rem(24),
  alignItems: 'center',
  justifyContent: 'center',
});

const MessageContainer = styled('div', {
  textAlign: 'center',
});

const Message = styled('div', {
  whiteSpace: 'pre-line',
  typography: '$body2',
});

const ButtonLinkGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: rem(16),
});

type CompletedPageProps = PageProps<GatsbyTypes.TeamWebsite_CompletedPageQuery>;
const CompletedPage: React.FC<CompletedPageProps> = (pageProps) => {
  const { data } = pageProps;
  const parseLink = useLinkParser();

  const messageContentsHtml = data.prismicTeamContents.data.completed_page_content?.html;

  return (
    <DefaultLayout {...pageProps}>
      <Container>
        <Illustration />
        <MessageContainer>
          <Message dangerouslySetInnerHTML={{ __html: messageContentsHtml }} />
        </MessageContainer>
        <ButtonLinkGroup>
          {data.prismicTeamContents.data.completed_page_link_group.map((entry, i) => {
            const link = parseLink(entry.link.url);
            return mapLink(link, {
              Internal: (link) => (
                <ButtonLink
                  // biome-ignore lint/suspicious/noArrayIndexKey: it's ok here
                  key={i}
                  to={link.pathname}
                  type={i === 0 ? 'primary' : 'default'}
                  css={{ width: '60%', minWidth: rem(240) }}
                  fullWidth={{ initial: true, '@sm': false }}
                >
                  {entry.display_text}
                </ButtonLink>
              ),
              External: (link) => (
                <ButtonLink
                  // biome-ignore lint/suspicious/noArrayIndexKey: it's ok here
                  key={i}
                  as="a"
                  target="_blank"
                  rel="external noopener"
                  href={link.url.href}
                  type={i === 0 ? 'primary' : 'default'}
                  css={{ width: '60%', minWidth: rem(240) }}
                >
                  {entry.display_text}
                </ButtonLink>
              ),
            });
          })}
        </ButtonLinkGroup>
      </Container>
    </DefaultLayout>
  );
};

export default CompletedPage;

type CompletedPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_CompletedPageQuery>;
export const Head: React.FC<CompletedPageHeadProps> = () => {
  return (
    <>
      <Robots none />
    </>
  );
};
