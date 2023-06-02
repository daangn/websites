import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import FullImageSection from '../../components/culture/FullImageSection';
import ListCardSection from '../../components/culture/ListCardSection';
import BlogListSection from '../../components/culture/BlogListSection';
import CarouselSection from '../../components/culture/CarouselSection';

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
              card_description {
                html
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
        }
      }
    }
  }
`;

type CulturePageProps = PageProps<GatsbyTypes.CulturePageQuery>;

const CulturePage: React.FC<CulturePageProps> = ({ data }) => {
  return (
    <main>
      {data.prismicCultureContent?.data.body.map((slice) => {
        switch (slice.slice_type) {
          case 'full_image': {
            return (
              <FullImageSection slice={slice} key={slice.id} />
            )
          }
          case 'list_card': {
            return (
              <ListCardSection slice={slice} key={slice.id} />
            )
          }
          case 'blog_list_section': {
            return (
              <BlogListSection slice={slice} data={data} key={slice.id} />
            )
          }
          case 'carousel': {
            return (
              <CarouselSection slice={slice} key={slice.id} />
            )
          }
          default:
            break;
        }
      })}
    </main>
  );
};

export default CulturePage;
