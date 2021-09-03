import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbySeo, FAQJsonLd } from 'gatsby-plugin-next-seo';
import { required } from '@cometjs/core';

import _PageTitle from '~/components/PageTitle';
import FaqAccordion from '~/components/FaqAccordion';

type FaqPageProps = PageProps<GatsbyTypes.FaqPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query FaqPage {
    ...DefaultLayout_query

    prismicTeamContents {
      _previewable
      data {
        jobs_page_meta_title
        jobs_page_meta_description
        twitter_site_handle
      }
    }

    prismicFaq(uid: { eq: "team.daangn.com" }) {
      _previewable
      data {
        ...FaqAccordion_faqData
        entries {
          question
          answer {
            text
          }
        }
      }
    }
  }
`;

const Container = styled('section', {
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
  required(data.prismicFaq?.data);

  return (
    <Container>
      <GatsbySeo
        title={`자주 묻는 질문 | ${data.prismicTeamContents.data.jobs_page_meta_title}`}
        twitter={data.prismicTeamContents.data.twitter_site_handle != null ? {
          cardType: 'summary',
          site: data.prismicTeamContents.data.twitter_site_handle,
        } : undefined}
      />
      <FAQJsonLd
        questions={data.prismicFaq.data.entries!.map(faq => ({
          question: faq!.question || '',
          answer: faq!.answer!.text || '',
        }))}
      />
      <PageTitle>
        자주 묻는 질문
      </PageTitle>
      <FaqAccordion faqData={data.prismicFaq.data} />
    </Container>
  );
};

export default FaqPage;
