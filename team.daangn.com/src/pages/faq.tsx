import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { required } from '@cometjs/core';

import _PageTitle from '~/components/PageTitle';
import FaqAccordion from '~/components/FaqAccordion';

type FaqPageProps = PageProps<GatsbyTypes.FaqPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query FaqPage {
    ...DefaultLayout_query
    prismicFaq(uid: { eq: "team.daangn.com" }) {
      _previewable
      data {
        ...FaqAccordion_faqData
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
  required(data.prismicFaq);
  return (
    <Container>
      <PageTitle size={{ '@sm': 'sm' }}>
        자주 묻는 질문
      </PageTitle>
      <FaqAccordion faqData={data.prismicFaq.data} />
    </Container>
  );
};

export default FaqPage;
