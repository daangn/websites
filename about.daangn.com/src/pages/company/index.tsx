import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';

import FullImageSection from '../../components/company/FullImageSection';
import HorizontalCard from '../../components/company/HorizontalCard';
import VerticalCard from '../../components/company/VerticalCard';
import SummaryCard from '../../components/company/SummaryCard';
import InvestorsSection from '../../components/company/InvestorsSection';
import PrSection from '../../components/company/PrSection';
import TempHeroSection from '../../components/company/TempHeroSection';

export const query = graphql`
  query CompanyPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    ...PrPostList_query

    prismicCompanyContent {
      data {
        company_page_meta_description
        company_page_meta_title
        company_page_og_image {
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
          ... on PrismicCompanyContentDataBodyFullImage {
            id
            slice_type
            primary {
              full_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              text {
                html
              }
            }
          }
          ... on PrismicCompanyContentDataBodyHorizontalCard {
            id
            primary {
              description
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                alt
              }
              image_mobile {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                alt
              }
              title {
                html
              }
            }
            slice_type
          }
          ... on PrismicCompanyContentDataBodyVerticalCard {
            id
            slice_type
            primary {
              description
              title {
                html
              }
              full_width_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              image_mobile {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicCompanyContentDataBodySummaryCard {
            id
            slice_type
            primary {
              title {
                text
              }
            }
            items {
              summary_text
              graphic_image {
                alt
                localFile {
                  publicURL
                }
              }
            }
          }
          ... on PrismicCompanyContentDataBodyInvestorsSection {
            id
            slice_type
            primary {
              title {
                text
              }
            }
            items {
              image {
                alt
                localFile {
                  publicURL
                }
              }
            }
          }
          ... on PrismicCompanyContentDataBodyPrSection {
            id
            slice_type
            primary {
              section_title {
                text
                richText
                html
              }
              background_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

type CompanyPageProps = PageProps<GatsbyTypes.CompanyPageQuery>;

const CompanyPage: React.FC<CompanyPageProps> = ({ data }) => {
  return (
    <Main>
      {data.prismicCompanyContent?.data.body.map((slice) => {
        switch (slice.slice_type) {
          case 'full_image': {
            return <TempHeroSection slice={slice} key={slice.id} />;
            // return <FullImageSection slice={slice} key={slice.id} />;
          }
          case 'horizontal_card': {
            return <HorizontalCard slice={slice} key={slice.id} />;
          }
          case 'vertical_card': {
            return <VerticalCard slice={slice} key={slice.id} />;
          }
          case 'summary_card': {
            return <SummaryCard slice={slice} key={slice.id} />;
          }
          case 'investors_section': {
            return <InvestorsSection slice={slice} key={slice.id} />;
          }
          case 'pr_section': {
            return <PrSection slice={slice} data={data} key={slice.id} />;
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

export default CompanyPage;

type CompanyPageHeadProps = HeadProps<GatsbyTypes.CompanyPageQuery>;

export const Head: React.FC<CompanyPageHeadProps> = ({ data, location }) => {
  const metaTitle = data?.prismicCompanyContent?.data.company_page_meta_title || '';
  const metaDescription = data?.prismicCompanyContent?.data.company_page_meta_description || '';
  const metaImage =
    data?.prismicCompanyContent?.data.company_page_og_image?.localFile?.childImageSharp?.fixed;

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
