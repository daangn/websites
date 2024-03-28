import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
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
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630, toFormat: PNG, quality: 90) {
                src
                width
                height
              }
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
  return (
    <Container>
      {data.prismicBlogContent?.data?.featured_post && (
        <FeaturedPost data={data.prismicBlogContent.data.featured_post} />
      )}
      <CategoryAnchor id="#_filter" />
      <Navigation query={data} pageContext={pageContext.id} />
      <PostList data={data} />
    </Container>
  );
};

type BlogPageHeadProps = HeadProps<GatsbyTypes.BlogPageQuery>;

export const Head: React.FC<BlogPageHeadProps> = ({ data, location }) => {
  const { blog_page_meta_title, blog_page_meta_description, blog_page_og_image } =
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data.prismicBlogContent?.data as any;
  const metaImage = blog_page_og_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      location={location}
      title={blog_page_meta_title}
      description={blog_page_meta_description}
    >
      {(props) => [
        <OpenGraph
          key="og"
          og={{
            ...props,
            type: 'website',
            ...(metaImage && {
              images: [
                {
                  url: new URL(
                    metaImage.src,
                    metaImage.src.startsWith('http') ? metaImage.src : props.url,
                  ),
                  width: metaImage.width,
                  height: metaImage.height,
                },
              ],
            }),
          }}
        />,
        <TwitterCard
          key="twitter"
          card={{
            ...props,
            type: 'summary_large_image',
          }}
        />,
      ]}
    </HeadSeo>
  );
};

const Container = styled('div', {
  contentArea: true,
  marginTop: rem(36),

  '@sm': {
    marginTop: rem(40),
  },
});

const CategoryAnchor = styled('div', {
  position: 'absolute',
  bottom: '100%',
  height: rem(58),

  '@sm': {
    height: rem(68),
  },
});

export default BlogMainPage;
