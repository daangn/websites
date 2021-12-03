import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo, FAQJsonLd } from 'gatsby-plugin-next-seo';
import { required } from '@cometjs/core';

import _PageTitle from '../components/PageTitle';
import FaqAccordion from '../components/FaqAccordion';

type FaqPageProps = PageProps<GatsbyTypes.TeamWebsite_FaqPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_FaqPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        twitter_site_handle

        faq_page_meta_title
        faq_page_meta_description
        faq_page_title {
          text
        }

        ...TeamWebsite_FaqAccordion_faqData
        faq_entries {
          question
          answer {
            text
          }
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,
  maxWidth: rem(760),
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(80),

  '@sm': {
    marginBottom: rem(100),
  },
});

const FaqPage: React.FC<FaqPageProps> = ({
  data,
}) => {
  required(data.prismicTeamContents?.data);

  return (
    <Container>
      <GatsbySeo
        title={data.prismicTeamContents.data.faq_page_meta_title}
        description={data.prismicTeamContents.data.faq_page_meta_description}
        twitter={data.prismicTeamContents.data.twitter_site_handle != null ? {
          cardType: 'summary',
          site: data.prismicTeamContents.data.twitter_site_handle,
        } : undefined}
      />
      <FAQJsonLd
        questions={data.prismicTeamContents.data.faq_entries!.map(faq => ({
          question: faq!.question || '',
          answer: faq!.answer!.text || '',
        }))}
      />
      <PageTitle>
        {data.prismicTeamContents.data.faq_page_title.text}
      </PageTitle>
      <FaqAccordion data={data.prismicTeamContents.data} />
    </Container>
  );
};

export default FaqPage;
