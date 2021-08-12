import * as React from 'react';
import { rem } from 'polished';
import { navigate } from '@reach/router';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import type { WithPrismicPreviewResolverProps } from 'gatsby-plugin-prismic-previews';
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews';
import { defaultRepositoryConfig } from '@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig';

import { ReactComponent as DaangniLoading } from '~/assets/daangni_loading.svg';

type PreviewResolverPageProps = (
  & PageProps<GatsbyTypes.PreviewResolverPageQuery, GatsbyTypes.SitePageContext>
  & WithPrismicPreviewResolverProps
);

export const query = graphql`
  query PreviewResolverPage {
    ...DefaultLayout_query
  }
`;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: rem(56),
  margin: '0 auto',
});

const Illustration = styled(DaangniLoading, {
  maxWidth: rem(300),
  marginLeft: rem(-50),
});

const Description = styled('p', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
  textAlign: 'center',

  variants: {
    size: {
      sm: {
        fontSize: '$subtitle1',
      },
    },
  },
});

const Note = styled('p', {
  fontSize: '$caption1',
  color: '$gray400',
});

const PreviewResolverPage: React.FC<PreviewResolverPageProps> = ({
  isPrismicPreview,
}) => {
  const [count, countUpToThree] = React.useReducer(c => (c % 4) + 1, 1);
  React.useEffect(() => {
    const interval = setInterval(countUpToThree, 1000);
    return () => void clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (isPrismicPreview === false) {
      navigate('/not-found/', { replace: true });
    }
  }, [isPrismicPreview]);

  return (
    <Container>
      <Illustration />
      <Description>
        미리보기 로딩중이에요
        {Array(count).fill('.')}
      </Description>
      <Note>
        라이브러리 베타버전이라 버그가 있어서 프리뷰가 동작을 안해요 ㅠㅠ
      </Note>
    </Container>
  );
};

export default withPrismicPreviewResolver(PreviewResolverPage, [
  defaultRepositoryConfig,
]);
