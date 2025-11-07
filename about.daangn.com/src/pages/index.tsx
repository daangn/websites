import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';
import { useWindowScroll } from 'react-use';
import Cartoon from '../components/company/Cartoon';
import FirstFold from '../components/company/FirstFold';
import Investors from '../components/company/Investors';
import News from '../components/company/News';
import Numbers from '../components/company/Numbers';
import ProStory from '../components/company/ProStory';
import Statement from '../components/company/Statement';
import UserStory from '../components/company/UserStory';
import { FIRST_FOLD_STORY_HEIGHT } from '../components/company/constants';
import WorkingCulture from '../components/company/WorkingCulture';

export const query = graphql`
  query CompanyPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    ...TeamWebsite_FirstFold_query
    ...TeamWebsite_Statement_query
    ...TeamWebsite_UserStory_query
    ...TeamWebsite_ProStory_query
    ...TeamWebsite_Cartoon_query
    ...TeamWebsite_Numbers_query
    ...TeamWebsite_Investors_query
    ...TeamWebsite_WorkingCulture_query
    ...TeamWebsite_News_query

    prismicVisionPage {
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
  const { y } = useWindowScroll();

  const isFirstFoldStarted = y > FIRST_FOLD_STORY_HEIGHT / 2;
  const isFirstFoldEnded = y > FIRST_FOLD_STORY_HEIGHT;

  React.useEffect(() => {
    if (isFirstFoldEnded) {
      document.documentElement.style.setProperty('--header-background', 'rgba(255, 255, 255, 0.9)');
      document.documentElement.style.setProperty('--header-color', 'var(--header-color)');
      document.documentElement.style.setProperty(
        '--header-hover-color',
        'var(--header-hover-color)',
      );
      document.documentElement.style.setProperty('--header-backdrop-filter', 'blur(16px)');
    } else if (isFirstFoldStarted) {
      document.documentElement.style.setProperty('--header-background', 'transparent');
      document.documentElement.style.setProperty('--header-color', '#fff');
      document.documentElement.style.setProperty(
        '--header-hover-color',
        'rgba(255, 255, 255, 0.7)',
      );
      document.documentElement.style.setProperty('--header-backdrop-filter', 'blur(0px)');
    } else {
      document.documentElement.style.setProperty('--header-background', 'rgba(255, 255, 255, 0)');
      document.documentElement.style.setProperty('--header-backdrop-filter', 'blur(0px)');
      document.documentElement.style.removeProperty('--header-color');
      document.documentElement.style.removeProperty('--header-hover-color');
    }
  }, [isFirstFoldStarted, isFirstFoldEnded]);

  return (
    <Main>
      <FirstFold query={data} />
      <Statement query={data} />
      <UserStory query={data} />
      <ProStory query={data} />
      <Cartoon query={data} />
      <Numbers query={data} />
      <Investors query={data} />
      <WorkingCulture query={data} />
      <News query={data} />
    </Main>
  );
};

const Main = styled('main', {
  contentSpaceTop: true,
});

export default CompanyPage;

type CompanyPageHeadProps = HeadProps<GatsbyTypes.CompanyPageQuery>;

export const Head: React.FC<CompanyPageHeadProps> = ({ data, location }) => {
  const metaTitle = data?.prismicVisionPage?.data.company_page_meta_title || '';
  const metaDescription = data?.prismicVisionPage?.data.company_page_meta_description || '';
  const metaImage =
    data?.prismicVisionPage?.data.company_page_og_image?.localFile?.childImageSharp?.fixed;

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
        <link
          rel="stylesheet"
          href="https://assets.krrt.io/daangn/branding-assets/0.0.2/typography/fonts/KarrotSans.css"
        />,
      ]}
    </HeadSeo>
  );
};
