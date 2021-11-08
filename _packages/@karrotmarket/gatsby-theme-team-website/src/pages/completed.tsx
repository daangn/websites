import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { ReactComponent as DaangniThanks } from '../assets/daangni_thanks.svg';
import DefaultLayout from '../layouts/DefaultLayout';
import ButtonLink from '../components/Button';

type CompletedPageProps = PageProps<GatsbyTypes.TeamWebsite_CompletedPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_CompletedPage {
    ...TeamWebsite_DefaultLayout_query
    prismicTeamContents {
      data {
        completed_page_message {
          html
        }
        completed_page_contact {
          html
        }
        completed_body {
          ... on PrismicTeamContentsDataCompletedBodyButtonlink {
            id
            primary {
              link_button_highlight
              completed_page_link_display_title {
                html
              }
              link_button_src {
                url
              }
            }
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

const CompletedPage: React.FC<CompletedPageProps> = ({ ...pageProps }) => {
  const messageContentsHtml =
    pageProps.data.prismicTeamContents?.data?.completed_page_message?.html;
  const contractHtml =
    pageProps.data.prismicTeamContents?.data?.completed_page_contact?.html;
  const LinkItems = pageProps.data.prismicTeamContents?.data?.completed_body;
  
  return (
    <DefaultLayout {...pageProps}>
      <GatsbySeo noindex nofollow />
      <Container>
        <Illustration />
        <MessageContainer>
          <Message dangerouslySetInnerHTML={{ __html: messageContentsHtml }} />
          <Contact>
            <span>채용문의:</span>
            <div dangerouslySetInnerHTML={{ __html: contractHtml }} />
          </Contact>
        </MessageContainer>
        <ButtonLinkGroup>
          {LinkItems?.map(
            (link) =>
              link?.primary?.link_button_src?.url &&
              link?.primary?.completed_page_link_display_title && (
                <ButtonLink
                  key={link?.id}
                  to={link?.primary?.link_button_src.url}
                  type={link?.primary.link_button_highlight ? 'primary' : 'default'}
                  fullWidth={{ '@sm': true }}
                  dangerouslySetInnerHTML={{
                    __html: link?.primary?.completed_page_link_display_title.html,
                  }}
                />
              )
          )}
        </ButtonLinkGroup>
      </Container>
    </DefaultLayout>
  );
};

export default CompletedPage;
