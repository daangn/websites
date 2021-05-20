import * as React from 'react';
import { rem } from 'polished';
import { navigate } from '@reach/router';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import type { WithPreviewResolverProps } from 'gatsby-source-prismic';
import { withPreviewResolver } from 'gatsby-source-prismic';

import { linkResolver } from '~/previewLinkResolver';

import { ReactComponent as DaangniLoading } from '~/assets/daangni_loading.svg';

type PreviewResolverPageProps = (
  & PageProps<GatsbyTypes.PreviewResolverPageQuery, GatsbyTypes.SitePageContext>
  & WithPreviewResolverProps
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
  maxWidth: rem(500),
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

const PreviewResolverPage: React.FC<PreviewResolverPageProps> = ({
  isPreview,
}) => {
  const [count, countUpToThree] = React.useReducer(c => (c % 4) + 1, 1);
  React.useEffect(() => {
    const interval = setInterval(countUpToThree, 1000);
    return () => void clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (isPreview === false) {
      navigate('/not-found/', { replace: true });
    }
  }, [isPreview]);

  if (!isPreview) {
    return null;
  }

  return (
    <Container>
      <Illustration />
      <Description>
        미리보기 로딩중이에요
        {Array(count).fill('.')}
      </Description>
    </Container>
  );
};

export default withPreviewResolver(PreviewResolverPage, {
  repositoryName: 'karrot',
  linkResolver,
});
