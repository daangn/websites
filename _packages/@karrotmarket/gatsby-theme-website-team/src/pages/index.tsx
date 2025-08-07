import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';
import { type HeadProps, type PageProps, graphql, navigate } from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';
import { SimpleReveal } from 'simple-reveal';

import JobsBannerSection from '../components/JobsBannerSection';
import LatestBlogSection from '../components/LatestBlogSection';
import _PageTitle from '../components/PageTitle';
import PrismicTeamContentsDataMainBodyBenefit from '../components/PrismicTeamContentsDataMainBodyBenefit';
import PrismicTeamContentsDataMainBodyFeaturedPostCarousel from '../components/PrismicTeamContentsDataMainBodyFeaturedPostCarousel';
import PrismicTeamContentsDataMainBodyHowWeWork from '../components/PrismicTeamContentsDataMainBodyHowWeWork';
import PrismicTeamContentsDataMainBodyIllustrationAndDescription from '../components/PrismicTeamContentsDataMainBodyIllustrationAndDescription';
import PrismicTeamContentsDataMainBodyKeyVisual from '../components/PrismicTeamContentsDataMainBodyKeyVisual';
import PrismicTeamContentsDataMainBodyMemberQuoteCarousel from '../components/PrismicTeamContentsDataMainBodyMemberQuoteCarousel';
import PrismicTeamContentsDataMainBodyTitleAndDescription from '../components/PrismicTeamContentsDataMainBodyTitleAndDescription';
import PrismicTeamContentsDataMainBodyTitleAndIllustration from '../components/PrismicTeamContentsDataMainBodyTitleAndIllustration';
import PrismicTeamContentsDataMainBodyWideBanner from '../components/PrismicTeamContentsDataMainBodyWideBanner';
import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import { isCanonicalUrl } from '../utils/common';

export const query = graphql`
  query TeamWebsite_IndexPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      _previewable
      data {
        main_page_meta_title
        main_page_meta_description
        main_page_meta_image {
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
        main_page_title {
          text
        }
        main_body {
          __typename
          ...PrismicTeamContentsDataMainBodyKeyVisual_data
          ...PrismicTeamContentsDataMainBodyMemberQuoteCarousel_data
          ...PrismicTeamContentsDataMainBodyTitleAndDescription_data
          ...PrismicTeamContentsDataMainBodyTitleAndIllustration_data
          ...PrismicTeamContentsDataMainBodyIllustrationAndDescription_data
          ...PrismicTeamContentsDataMainBodyWideBanner_data
          ...PrismicTeamContentsDataMainBodyHowWeWork_data
          ...PrismicTeamContentsDataMainBodyBenefit_data
          ...PrismicTeamContentsDataMainBodyFeaturedPostCarousel_data
        }
      }
    }
    ...LatestBlogPostList_query
  }
`;

const MainContainer = styled('main', {
  contentSpaceTop: true,
});

const TitleContainer = styled('div', {
  contentArea: true,
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(32),

  '@md': {
    marginBottom: rem(88),
  },
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(80),

  '@md': {
    gap: rem(160),
  },
});

type IndexPageProps = PageProps<GatsbyTypes.TeamWebsite_IndexPageQuery>;
const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const locale = data.site.siteMetadata.locale;

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const jid = url.searchParams.get('gh_jid');
    if (jid) {
      // "View Live" from Greenhouse
      navigate(`/jobs/${jid}/?from=greenhouse`, { replace: true });
    }
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <SimpleReveal
          render={({ ref, cn, style }) => (
            <PageTitle ref={ref} className={cn()} style={style}>
              {data.prismicTeamContents.data.main_page_title?.text}
            </PageTitle>
          )}
          duration={1000}
          delay={0}
          initialTransform="translateY(2rem)"
        />
      </TitleContainer>
      <Content>
        {data.prismicTeamContents.data.main_body?.filter(Boolean)?.map((data, i) =>
          // biome-ignore lint/style/noNonNullAssertion: intentional
          mapAbstractTypeWithDefault(data!, {
            PrismicTeamContentsDataMainBodyKeyVisual: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyKeyVisual key={i} data={data} locale={locale} />
            ),
            PrismicTeamContentsDataMainBodyMemberQuoteCarousel: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyMemberQuoteCarousel key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyTitleAndDescription: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyTitleAndDescription key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyTitleAndIllustration: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyTitleAndIllustration key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyIllustrationAndDescription: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyIllustrationAndDescription key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyWideBanner: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyWideBanner key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyHowWeWork: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyHowWeWork key={i} data={data} />
            ),
            PrismicTeamContentsDataMainBodyBenefit: (data) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyBenefit key={i} data={data} />
            ),
            // 임시 컴포넌트 for KR
            PrismicTeamContentsDataMainBodyFeaturedPostCarousel: (data) => (
              // <h2 key={i}>featured article 블로그 섹션</h2>
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional
              <PrismicTeamContentsDataMainBodyFeaturedPostCarousel key={i} data={data} />
            ),
            _: null,
          }),
        )}
        {/* kr에서만 사용하는 임시 섹션 */}
        {data.site.siteMetadata.locale === 'ko-kr' && (
          <>
            <LatestBlogSection data={data} />
            <JobsBannerSection />
          </>
        )}
      </Content>
    </MainContainer>
  );
};

export default withPrismicPreview(IndexPage);

type IndexPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_IndexPageQuery>;
export const Head: React.FC<IndexPageHeadProps> = ({ data, location }) => {
  const metaTitle = data.prismicTeamContents.data.main_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.main_page_meta_description;
  const metaImage =
    data.prismicTeamContents.data.main_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
      {(props) => (
        <>
          {!isCanonicalUrl(String(props.url)) && (
            <meta http-equiv="refresh" content="0; url=https://about.daangn.com/" />
          )}
          <DefaultLayoutHead
            {...props}
            location={location}
            data={data}
            image={
              metaImage && {
                url: new URL(
                  metaImage.src,
                  metaImage.src.startsWith('http') ? metaImage.src : props.url,
                ),
                width: metaImage.width,
                height: metaImage.height,
              }
            }
          />
          <link rel="canonical" href="https://about.daangn.com/" />
        </>
      )}
    </HeadSeo>
  );
};
