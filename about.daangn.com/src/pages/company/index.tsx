import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';
import FirstFold from '../../components/company/FirstFold';
import Statement from '../../components/company/Statement';
import UserStory from '../../components/company/UserStory';
import ProStory from '../../components/company/ProStory';
import Cartoon from '../../components/company/Cartoon';
import Numbers from '../../components/company/Numbers';
import Investors from '../../components/company/Investors';
import News from '../../components/company/News';

export const query = graphql`
  query CompanyPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query

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
      }
    }
  }
`;

type CompanyPageProps = PageProps<GatsbyTypes.CompanyPageQuery>;

const CompanyPage: React.FC<CompanyPageProps> = ({ data }) => {
  return (
    <Main>
      <FirstFold />
      <Statement />
      <UserStory />
      <ProStory />
      <Cartoon />
      <Numbers />
      <Investors />
      <News />
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
