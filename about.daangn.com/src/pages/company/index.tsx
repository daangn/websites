import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import * as React from 'react';

import FullImageSection from '../../components/company/FullImageSection';
import HorizontalCard from '../../components/company/HorizontalCard';
import VerticalCard from '../../components/company/VerticalCard';
import SummaryCard from '../../components/company/SummaryCard';
import InvestorsSection from '../../components/company/InvestorsSection';
import PrSection from '../../components/company/PrSection';

export const query = graphql`
  query CompanyPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    ...PrPostList_query

    prismicCompanyContent {
      data {
        company_page_meta_description
        company_page_meta_title
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
            }
          }
          ... on PrismicCompanyContentDataBodySummaryCard {
            id
            slice_type
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
                html
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
    <main>
      {data.prismicCompanyContent?.data.body.map((slice) => {
        switch (slice.slice_type) {
          case 'full_image': {
            return (<FullImageSection slice={slice} key={slice.id} />)
          }
          case 'horizontal_card': {
            return (<HorizontalCard slice={slice} key={slice.id} />)
          }
          case 'vertical_card': {
            return (<VerticalCard slice={slice} key={slice.id} />)
          }
          case 'summary_card': {
            return (<SummaryCard slice={slice} key={slice.id} />)
          }
          case 'investors_section': {
            return (<InvestorsSection slice={slice} key={slice.id} />)
          }
          case 'pr_section': {
            return (<PrSection slice={slice} data={data} key={slice.id} />)
          }
          default:
            break;
        }
      })}
    </main>
  );
};

export default CompanyPage;

