import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { mapLink, useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { required } from '@cometjs/core';

import { ReactComponent as DaangniThanks } from '../assets/daangni_thanks.svg';
import DefaultLayout from '../layouts/DefaultLayout';
import ButtonLink from '../components/Button';

type CompletedPageProps = PageProps<GatsbyTypes.TeamWebsite_CompletedPageQuery, GatsbyTypes.SitePageContext>;

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

const Container = styled('div', {
  contentArea: true,
  display: 'grid',
  gap: rem(24),
  alignItems: 'center',
  justifyContent: 'center',
});

const Illustration = styled(DaangniThanks, {
  margin: '0 auto',
  width: rem(150),
});

const MessageContainer = styled('div', {
  textAlign: 'center',
});

const Message = styled('div', {
  whiteSpace: 'pre-line',
  typography: '$body2',
});

const Contact = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  '& > span:first-child': {
    marginRight: rem(5),
  },
});

const ButtonLinkGroup = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  gap: rem(16),
})

const CompletedPage: React.FC<CompletedPageProps> = pageProps => {
  const { data } = pageProps;
  const parseLink = useLinkParser();

  required(data.prismicTeamContents?.data);

  const messageContentsHtml =
    data.prismicTeamContents.data.completed_page_content?.html;

  return (
    <DefaultLayout {...pageProps}>
      <GatsbySeo noindex nofollow />
      <Container>
        <Illustration />
        <MessageContainer>
          <Message dangerouslySetInnerHTML={{ __html: messageContentsHtml }} />
        </MessageContainer>
        <ButtonLinkGroup>
          {data.prismicTeamContents.data.completed_page_link_group
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
        </ButtonLinkGroup>
      </Container>
    </DefaultLayout>
  );
};

export default CompletedPage;
