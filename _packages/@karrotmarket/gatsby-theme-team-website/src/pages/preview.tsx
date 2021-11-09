import * as React from 'react';
import { rem } from 'polished';
import { navigate } from '@reach/router';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import type { WithPrismicPreviewResolverProps } from 'gatsby-plugin-prismic-previews';
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews';
import { defaultRepositoryConfig } from '@karrotmarket/gatsby-theme-prismic/src/defaultRepositoryConfig';

import { ReactComponent as DaangniLoading } from '../assets/daangni_loading.svg';

type PreviewResolverPageProps = (
  & PageProps<GatsbyTypes.TeamWebsite_PreviewResolverPageQuery, GatsbyTypes.SitePageContext>
  & WithPrismicPreviewResolverProps
);

export const query = graphql`
  query TeamWebsite_PreviewResolverPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
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
        Loading preview
        {Array(count).fill('.')}
      </Description>
    </Container>
  );
};

export default withPrismicPreviewResolver(PreviewResolverPage, [
  defaultRepositoryConfig,
]);
