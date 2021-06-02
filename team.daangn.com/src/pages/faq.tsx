import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { required } from '@cometjs/core';

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

const Title = styled('h1', {
  fontSize: '$subtitle2',
  marginBottom: rem(80),

  variants: {
    size: {
      sm: {
        fontSize: '$heading3',
        marginBottom: rem(100),
      },
    },
  },
});

const FaqPage: React.FC<FaqPageProps> = ({
  data,
}) => {
  required(data.prismicFaq);
  return (
    <>
      <Title size={{ '@sm': 'sm' }}>
        자주 묻는 질문
      </Title>
      <FaqAccordion faqData={data.prismicFaq.data} />
    </>
  );
};

export default FaqPage;
