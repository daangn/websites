import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import FaqAccordion from '~/components/FaqAccordion';

type FaqPageProps = PageProps<GatsbyTypes.FaqPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query FaqPage {
    ...DefaultLayout_query
    prismicFaq(uid: { eq: "team.daangn.com" }) {
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
  if (!data.prismicFaq) {
    throw new Error('prismicFaq 컨텐츠 데이터가 제대로 주입되지 않았습니다.');
  }

  return (
    <>
      <Title size={{ '@sm': 'sm' }}>
        자주 묻는 질문
      </Title>
      <FaqAccordion faq={data.prismicFaq.data} />
    </>
  );
};

export default FaqPage;
