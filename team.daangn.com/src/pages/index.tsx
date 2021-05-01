import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '~/components/Layout';
import PageTitle from '~/components/PageTitle';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query IndexPage {
    __typename
  }
`;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <Layout>
      <PageTitle size={{ '@sm': 'sm' }}>
        {`이웃과 더 가까워지는
        따듯한 세상을 만들어요.`}
      </PageTitle>
    </Layout>
  );
};

export default IndexPage;
