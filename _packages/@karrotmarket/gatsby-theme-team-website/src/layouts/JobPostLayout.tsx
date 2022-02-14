import * as React from 'react';
import type { PageProps } from 'gatsby';
import { navigate } from 'gatsby';
import { rem } from 'polished';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import type { OverrideProps } from '@cometjs/core';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { useLocation } from '@reach/router';

import _PageTitle from '../components/PageTitle';
import logoPath from '../assets/logo.png';
import { ReactComponent as BackwardSvg } from '../assets/backwardOutlineM.svg';

import JobPostingJsonLd from './jobPostLayout/JobPostingJsonLd';
import generateProperties from './jobPostLayout/generateProperties';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

type JobPostLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.TeamWebSite_JobPostLayout_queryFragment>,
  {
    children: React.ReactNode,
  }
>;

export const query = graphql`
  fragment TeamWebsite_JobPostLayout_query on Query {
    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      _previewable
      data {
        jobs_page_meta_title
        jobs_page_meta_description
        jobs_page_meta_image {
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
        jobs_page_title {
          text
        }
      }
    }

    jobPost(id: { eq: $id }) {
      ...TeamWebsite_JobPostingJsonLd_jobPost
      id
      ghId
      title
      corporate
      employmentType
      priorExperience
      externalUrl
      # Avoid File System Route API
      # viewPath: gatsbyPath(filePath: "/jobs/{JobPost.ghId}")
      # applyPath: gatsbyPath(filePath: "/jobs/{JobPost.ghId}/apply")
    }
  }
`;

const Container = styled('div', {
  contentArea: true,
  maxWidth: rem(760),
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(16),
  variants: {
    size: {
      sm: {
        marginBottom: rem(24),
      },
    },
  },
});

const PreviousLink = styled(Link, {
  display: 'inline-block',
  color: '$gray900',
  width: rem(36),
  height: rem(36),
  cursor: 'pointer',
  marginBottom: rem(20),

  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },

  '@sm': {
    marginBottom: rem(36)
  },
})

const PropertyList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  paddingLeft: 0,
  fontSize: '$caption1',
  marginBottom: rem(40),

  '@sm': {
    fontSize: '$body2',
    marginBottom: rem(72),
  },
});

const Property = styled('li', {
  color: '$gray600',
  '& + &::before': {
    content: '"·"',
    display: 'inline-block',
    marginX: rem(12),
  },
});

const Tabs = styled('nav', {
  position: 'relative',
  display: 'flex',
  borderBottom: '1px solid $gray300',
  marginBottom: rem(40),

  '@sm': {
    marginBottom: rem(48),
  },
});

const TabItemList = styled('ul', {
  display: 'flex',
  gap: rem(32),
  listStyle: 'none',
  paddingLeft: 0,
});

const TabItem = styled('li', {
  position: 'relative',
  paddingY: rem(8),
  fontSize: '$subtitle3',
  fontWeight: 'bold',
});

const TabItemUnderline = styled(motion.div, {
  position: 'absolute',
  width: '100%',
  background: '$carrot500',
  height: rem(4),
  bottom: '-1px',
});

const TabLink = styled(motion(Link), {
  textDecoration: 'none',
  variants: {
    active: {
      true: {
        color: '$gray900',
      },
      false: {
        color: '$gray600',
      },
    },
  },
});

const JobPostLayout: React.FC<JobPostLayoutProps> = ({
  children,
  data: { jobPost, prismicTeamContents },
}) => {
  const messages = useTranslation();
  const siteOrigin = useSiteOrigin();
  const { pathname: currentPath } = useLocation();

  // Note: assertion 을 선호하긴 하는데...
  // Gatsby Cloud 환경에서 캐시를 좀 어그레시브 하게 쓰는지 자꾸 페이지가 넘어오네 -_-
  if (!jobPost) {
    return <>{children}</>;
  }

  if (!prismicTeamContents?.data) {
    return <>{children}</>;
  }

  const viewPath = `/jobs/${jobPost.ghId}/`;
  const applyPath = `/jobs/${jobPost.ghId}/apply/`;

  const metaTitle = `${jobPost.title} | ${prismicTeamContents.data.jobs_page_meta_title}`;
  const metaDescription = prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <Container>
      <GatsbySeo
        title={metaTitle}
        description={metaDescription}
        // Note: 이 페이지 그냥 삭제하는게 맞을지 외부 링크에 대한 안내를 따로 할지 모르겠다.
        // 당장 UI 디자인이 없으니 전자가 맞는것 같은데... 범용성 생각하면 후자가 맞는것도 같고
        noindex={Boolean(jobPost.externalUrl)}
        openGraph={{
          title: metaTitle,
          description: metaDescription,
          ...metaImage && {
            images: [{
              url: siteOrigin + metaImage.src,
              width: metaImage.width,
              height: metaImage.height,
            }],
          },
        }}
        twitter={{
          ...metaImage && {
            cardType: 'summary_large_image',
          },
        }}
      />

      <JobPostingJsonLd
        url={siteOrigin + currentPath}
        logoUrl={siteOrigin + logoPath}
        metaDescription={metaDescription}
        jobPost={jobPost}
      />

      <PreviousLink
        aria-label={messages.job_post_page__back_to_list}
        to="/jobs/"
        onClick={e => {
          if (window.history.state['fromList']) {
            e.preventDefault();
            navigate(-1);
          }
        }}
      >
        <BackwardSvg />
      </PreviousLink>

      <main>
        <PageTitle>{jobPost.title}</PageTitle>

        <PropertyList>
          {[...generateProperties(jobPost)].map(prop => (
            <Property key={prop}>
              {prop}
            </Property>
          ))}
        </PropertyList>

        <AnimateSharedLayout>
          {!jobPost.externalUrl&& (
            <Tabs>
              <TabItemList role="tablist">
                <TabItem key="jobpost-view">
                  <TabLink
                    to={viewPath}
                    active={currentPath === viewPath}
                    state={{ y: typeof window !== 'undefined' && window.scrollY }}
                  >
                    {messages.job_post_layout__tab_view}
                  </TabLink>
                  {currentPath === viewPath && (
                    <TabItemUnderline
                      layoutId="jobpost-tab-underline"
                      initial={false}
                    />
                  )}
                </TabItem>
                <TabItem key="jobpost-apply">
                  <TabLink
                    to={applyPath}
                    active={currentPath === applyPath}
                    state={{ y: typeof window !== 'undefined' && window.scrollY }}
                  >
                    {messages.job_post_layout__tab_apply}
                  </TabLink>
                  {currentPath === applyPath && (
                    <TabItemUnderline
                      layoutId="jobpost-tab-underline"
                      initial={false}
                    />
                  )}
                </TabItem>
              </TabItemList>
            </Tabs>
          )}
        </AnimateSharedLayout>
        {children}
      </main>
    </Container>
  );
};

export default JobPostLayout;
