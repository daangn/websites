import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';

import Layout from '@karrotmarket/gatsby-theme-website-global/src/components/Layout';
import FeaturedPost from '../components/FeaturedPost';
import PostList from '../components/PostList';

export const query = graphql`
  query BlogPage($locale: String) {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: $locale }) {
      ...DefaultLayout_data
    }
    prismicGlobalContents {
      data {
        blog_page_meta_description
        blog_page_meta_title
        blog_page_meta_image {
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
  }
`;

export default function BlogPage({ data }: PageProps<GatsbyTypes.BlogPageQuery>) {
  const featuredPost = data.allNoteContent.nodes[0];

  return (
    // rome-ignore lint/style/noNonNullAssertion: intentional
    <Layout data={data.prismicSiteNavigation!.data}>
      <Container>
        <FeaturedPost {...featuredPost} />
        <PostList data={data} />
      </Container>
    </Layout>
  );
}

type BlogPageHeadProps = HeadProps<GatsbyTypes.BlogPageQuery>;

export const Head: React.FC<BlogPageHeadProps> = ({ data, location }) => {
  const { blog_page_meta_title, blog_page_meta_description, blog_page_meta_image } =
    data.prismicGlobalContents?.data;
  const metaImage = blog_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      location={location}
      root
      title={blog_page_meta_title}
      description={blog_page_meta_description}
    >
      {(props) => [
        <OpenGraph
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
});
