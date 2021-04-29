import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled, css } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import Layout from '~/components/Layout';
import FaqAccordian from '~/components/FaqAccordian';

type FaqPageProps = PageProps<GatsbyTypes.FaqPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query FaqPage {
    faq {
      ...FaqAccordian_faq
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

export default function FaqPage({
  data,
}: FaqPageProps) {
  if (!data.faq) {
    throw new Error(
      'faq 데이터가 주입되지 않았습니다. @karrotmarket/gatsby-transformer-faq 옵션이 올바른지 확인하세요!',
    );
  }

  return (
    <Layout>
      <Title size={{ '@sm': 'sm' }}>
        자주 묻는 질문
      </Title>
      <FaqAccordian faq={data.faq} />
    </Layout>
  );
}
