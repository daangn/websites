import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import FeaturedPost from '../components/blog/FeaturedPost';
import Navigation from '../components/blog/Navigation';
import PostList from '../components/blog/PostList';

export const query = graphql`
  query BlogPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    prismicAboutContent {
      data {
        ...FeaturedPost_aboutContent
        blog_page_meta_title
        blog_page_meta_description
        blog_page_title {
          text
        }
      }
    }
    ...PostList_query
    ...Navigation_query
  }
`;

type BlogMainPageProps = PageProps<GatsbyTypes.BlogPageQuery>;

const BlogMainPage: React.FC<BlogMainPageProps> = ({ data, pageContext }) => {
  return (
    <Container>
      {data.prismicAboutContent?.data?.featured_post && (
        <FeaturedPost data={data.prismicAboutContent.data.featured_post} />
      )}
      <Navigation query={data} pageContext={pageContext.id} />
      <PostList query={data} />
    </Container>
  );
};

const Container = styled('div', {
  contentArea: true,
});

export default BlogMainPage;
