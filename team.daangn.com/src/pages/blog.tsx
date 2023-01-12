import React from "react";
import { rem } from "polished";
import { graphql, type PageProps } from 'gatsby';
import { styled } from "gatsby-theme-stitches/src/config";
import FeaturedPost from "../components/blog/FeaturedPost";
import Navigation from "../components/blog/Navigation";
import PostList from "../components/blog/PostList";

export const query = graphql`
  query BlogPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    allBlogPost {
      nodes {
        slug
        title
        summary
        thumbnailImage {
          publicURL
        }
        category {
          name
          uid
        }
      }
    }
    allBlogCategory {
      nodes {
        name
        uid
      }
    }
  }
`;

type BlogPageProps = PageProps<GatsbyTypes.BlogPageQuery>;

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <>
      <PageTitleContainer>
        <FeaturedTitle>Team Blog</FeaturedTitle>
        <FeaturedTitle>당근팀의 생각을 공유해요</FeaturedTitle>
      </PageTitleContainer>
      <FeaturedPost data={data.allBlogPost.nodes[0]} />
      <Navigation categories={data.allBlogCategory.nodes} />
      <PostList data={data.allBlogPost.nodes} />
    </>
  )
};

const PageTitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  blogContentArea: true,
  marginBottom: rem(20),
});

const FeaturedTitle = styled("h1", {
  marginBottom: rem(8),
});

export default BlogPage;
