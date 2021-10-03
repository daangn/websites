import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import DefaultLayout from '~/layouts/DefaultLayout';
import ButtonLink from '~/components/Button';

type CompletedPageProps = PageProps<GatsbyTypes.CompletedPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query CompletedPage {
    prismicTeamContents {
      data {
        completed_page_illustration {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 150)
            }
          }
        }
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
    ...DefaultLayout_query
  }
`;

const Container = styled('div', {
  contentArea: true,
  display: 'grid',
  gap: rem(24),
  alignItems: 'center',
  justifyContent: 'center',
});

const Illustration = styled(GatsbyImage, {
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

const CompletedPage: React.FC<CompletedPageProps> = ({ ...pageProps }) => {
  const illustration =
    pageProps.data.prismicTeamContents?.data?.completed_page_illustration;
  const illustrationImage =
    illustration?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(illustration?.localFile?.childImageSharp?.gatsbyImageData);
  const messageContentsHtml =
    pageProps.data.prismicTeamContents?.data?.completed_page_message?.html;
  const contractHtml =
    pageProps.data.prismicTeamContents?.data?.completed_page_contact?.html;
  const LinkItems = pageProps.data.prismicTeamContents?.data?.completed_body;
  
  return (
    <DefaultLayout {...pageProps}>
      <GatsbySeo noindex nofollow />
      <Container>
        {illustration && illustrationImage && illustration.alt && (
          <Illustration image={illustrationImage} alt={illustration.alt} />
        )}
        {/* <Illustration /> */}
        <MessageContainer>
          <Message dangerouslySetInnerHTML={{ __html: messageContentsHtml }} />
          <Contact>
            <span>채용문의:</span>
            <div dangerouslySetInnerHTML={{ __html: contractHtml }} />
          </Contact>
        </MessageContainer>
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
      </Container>
    </DefaultLayout>
  );
};

export default CompletedPage;
