import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import Layout from '@karrotmarket/gatsby-theme-website-global/src/components/Layout';
import { vars } from '@seed-design/design-token';

export { Head } from '@karrotmarket/gatsby-theme-website-global/src/pages/404';

export const query = graphql`
  query NotFoundPageQuery {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: "ja-jp" }) {
      _previewable
      ...DefaultLayout_data
    }
  }
`;

type NotFoundPageProps = PageProps<GatsbyTypes.NotFoundPageQueryQuery>;
const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
  if (!data.prismicSiteNavigation?.data) throw new Error('No data');

  return (
    <Layout data={data.prismicSiteNavigation.data}>
      <Wrapper>
        <Title>申し訳ありません。</Title>
        <Text>
          お探しのページが見つかりません。
          <br />
          URLが間違って入力されているか、
          <br />
          URLが変更または削除されて使用できなくなっています。
          <br />
          <br />
          入力されたページのURLが間違っていないかもう一度確認してください。
        </Text>
        <Button href="/">ホームに戻る</Button>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled('div', {
  height: '70vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled('h2', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$heading5',
  '@md': {
    fontSize: '$heading3',
  },
});

const Text = styled('p', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: '$system',
  marginTop: 24,
  fontSize: '$body2',
  lineHeight: '160%',
  '@md': {
    marginTop: 36,
    fontSize: '$body1',
  },
});

const Button = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.$semantic.color.primary,
  textDecoration: 'none',
  marginTop: 24,
  fontSize: '$body1',
  '@md': {
    marginTop: 46,
    fontSize: '$body1',
  },

  '&:hover': {
    color: vars.$semantic.color.primaryHover,
  },
});

export default NotFoundPage;
