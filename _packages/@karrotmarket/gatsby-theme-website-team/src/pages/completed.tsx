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

import DefaultLayout from '../layouts/DefaultLayout';
import Illustration from '../templates/completedPage/Illustration';
import ButtonLink from '../components/Button';

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

const ButtonLinkGroup = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  gap: rem(16),
})

type CompletedPageProps = PageProps<GatsbyTypes.TeamWebsite_CompletedPageQuery>;
const CompletedPage: React.FC<CompletedPageProps> = pageProps => {
  const { data } = pageProps;
  const parseLink = useLinkParser();

  const messageContentsHtml =
    data.prismicTeamContents.data.completed_page_content?.html;

  return (
    <DefaultLayout {...pageProps}>
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

type CompletedPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_CompletedPageQuery>;
export const Head: React.FC<CompletedPageHeadProps> = () => {
  return (
    <>
      <Robots none />
    </>
  );
};
