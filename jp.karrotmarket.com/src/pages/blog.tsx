import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';

import Layout from '@karrotmarket/gatsby-theme-website-global/src/components/Layout';

import FeaturedPost from '../components/FeaturedPost';
import PostList from '../components/PostList';

export const query = graphql`
  query BlogPage($locale: String) {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: $locale }) {
      ...DefaultLayout_data
    }
    ...PostList_query
  }
`;

export default function BlogPage({ data }: PageProps<GatsbyTypes.BlogPageQuery>) {
  const featuredPost = data.allNote.nodes[0];

  return (
    <Layout data={data.prismicSiteNavigation!.data}>
      <Container>
        <FeaturedPost {...featuredPost} />
        <PostList data={data} />
      </Container>
    </Layout>
  );
}

const Container = styled('div', {
  contentArea: true,
});
