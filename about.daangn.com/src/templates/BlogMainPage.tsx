import { type PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import React from 'react';

import FeaturedPost from '../components/blog/FeaturedPost';
import Navigation from '../components/blog/Navigation';
import PostList from '../components/blog/PostList';

export const query = graphql`
  query BlogPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    prismicBlogContent {
      data {
        ...FeaturedPost_blogContent
        blog_page_meta_title
        blog_page_meta_description
        blog_page_title {
          text
        }
        blog_page_og_image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    ...PostList_query
    ...Navigation_query
  }
`;

type BlogMainPageProps = PageProps<GatsbyTypes.BlogPageQuery>;

const BlogMainPage: React.FC<BlogMainPageProps> = ({ data, pageContext }) => {

  console.log("data ::", data);
  return (
    <Container>
      {data.prismicBlogContent?.data?.featured_post && (
        <FeaturedPost data={data.prismicBlogContent.data.featured_post} />
      )}
      <Navigation query={data} pageContext={pageContext.id} />
      <PostList data={data} />
    </Container>
  );
};

const Container = styled('div', {
  contentArea: true,
});

export default BlogMainPage;
