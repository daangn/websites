import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import FullImageSection from '../../components/culture/FullImageSection';
import ListCardSection from '../../components/culture/ListCardSection';
import BlogListSection from '../../components/culture/BlogListSection';
import CarouselSection from '../../components/culture/CarouselSection';
import TempHeroSection from '../../components/culture/TempHeroSection';
import FullWidthImageSection from '../../components/culture/FullWidthImageSection';

export const query = graphql`
  query CulturePage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    ...BlogPostList_query

    prismicCultureContent {
      data {
        culture_page_meta_title
        culture_page_meta_description
        culture_page_title {
          text
        }
        culture_page_og_image {
          localFile {
            childImageSharp {
              fixed(
                width: 1200
                height: 630
                toFormat: PNG
                quality: 90
              ) {
                src
                width
                height
              }
            }
          }
        }
        body {
          ... on PrismicCultureContentDataBodyCarousel {
            id
            slice_type
            primary {
              carousel_section_title
            }
            items {
              carousel_card_title
              carousel_card_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 620, height: 470)
                  }
                }
              }
              carousel_card_description {
                html
              }
            }
          }
          ... on PrismicCultureContentDataBodyFullImage {
            id
            slice_type
            primary {
              full_image_text {
                richText
                text
              }
              full_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicCultureContentDataBodyListCard {
            id
            slice_type
            primary {
              list_card_title
            }
            items {
              card_title
              card_summary
              card_description {
                text
              }
              card_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicCultureContentDataBodyBlogListSection {
            id
            slice_type
            primary {
              blog_list_title
            }
          }
          ... on PrismicCultureContentDataBodyFullWidthImage {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              description {
                html
              }
            }
          }
        }
      }
    }
  }
`;

type CulturePageProps = PageProps<GatsbyTypes.CulturePageQuery>;

const CulturePage: React.FC<CulturePageProps> = ({ data }) => {
  return (
    <Main>
      {data.prismicCultureContent?.data.body.map((slice) => {
        switch (slice.slice_type) {
          case 'full_image': {
            return <TempHeroSection slice={slice} key={slice.id} />;
          }
          case 'full_width_image': {
            return <FullWidthImageSection slice={slice} key={slice.id} />;
          }
          case 'list_card': {
            return <ListCardSection slice={slice} key={slice.id} />;
          }
          case 'blog_list_section': {
            return <BlogListSection slice={slice} data={data} key={slice.id} />;
          }
          case 'carousel': {
            return <CarouselSection slice={slice} key={slice.id} />;
          }
          default:
            break;
        }
      })}
    </Main>
  );
};

const Main = styled('main', {
  contentSpaceTop: true,
});

export default CulturePage;

type CulturePageHeadProps = HeadProps<GatsbyTypes.CulturePageQuery>;

export const Head: React.FC<CulturePageHeadProps> = ({ data, location }) => {
  const metaTitle = data?.prismicCultureContent?.data.culture_page_meta_title || '';
  const metaDescription = data?.prismicCultureContent?.data.culture_page_meta_description || '';
  const metaImage =
    data?.prismicCultureContent?.data.culture_page_og_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
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
