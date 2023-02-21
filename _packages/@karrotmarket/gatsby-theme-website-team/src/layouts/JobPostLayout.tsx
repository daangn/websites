import * as React from 'react';
import { rem } from 'polished';
import { motion, LayoutGroup } from 'framer-motion';
import {
  graphql,
  navigate,
  Link,
  type PageProps,
} from 'gatsby';
import {
  HeadSeo,
} from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import {
  required,
  type OverrideProps,
} from '@cometjs/core';
import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import SeedIcon from '@karrotmarket/gatsby-theme-website-team/src/components/SeedIcon';
import { vars } from '@seed-design/design-token';

import logoPath from '../assets/logo.png';
import _PageTitle from '../components/PageTitle';
import { lookup } from '../utils/common';

import JobPostingJsonLd from './jobPostLayout/JobPostingJsonLd';
import generateProperties from './jobPostLayout/generateProperties';

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
  color: vars.$scale.color.gray900,
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
  color: vars.$scale.color.gray600,
  '& + &::before': {
    content: '"·"',
    display: 'inline-block',
    marginX: rem(12),
  },
});

const Tabs = styled('nav', {
  position: 'relative',
  display: 'flex',
  borderBottom: `1px solid ${vars.$scale.color.gray300}`,
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
  background: vars.$scale.color.carrot500,
  height: rem(4),
  bottom: '-1px',
});

const TabLink = styled(motion(Link), {
  textDecoration: 'none',
  variants: {
    active: {
      true: {
        color: vars.$scale.color.gray900,
      },
      false: {
        color: vars.$scale.color.gray600,
      },
    },
  },
});

type JobPostLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.TeamWebSite_JobPostLayout_queryFragment>,
  {
    children: React.ReactNode,
  }
>;
const JobPostLayout: React.FC<JobPostLayoutProps> = ({
  children,
  location: { pathname: currentPath },
  data: { jobPost, prismicTeamContents },
}) => {
  const messages = useTranslation();

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

  return (
    <Container>
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
        <SeedIcon name="icon_backward_regular" />
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

        <LayoutGroup>
          {!jobPost.externalUrl && (
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
        </LayoutGroup>
        {children}
      </main>
    </Container>
  );
};
export default JobPostLayout;

type JobPostLayoutHeadProps = {
  data: GatsbyTypes.TeamWebSite_JobPostLayout_queryFragment,
  location: {
    pathname: string,
  },
};
export const JobPostLayoutHead: React.FC<JobPostLayoutHeadProps> = ({
  location,
  data: { jobPost, prismicTeamContents },
}) => {
  required(jobPost);
  required(prismicTeamContents?.data);

  const messages = useTranslation();
  const corpName = lookup(jobPost.corporate, {
    'KARROT_MARKET': messages.job_post_layout__property_karrot_market,
    'KARROT_PAY': messages.job_post_layout__property_karrot_pay,
  });

  const metaTitle = `${jobPost.title} | ${prismicTeamContents.data.jobs_page_meta_title || corpName}`;
  const metaDescription = prismicTeamContents.data.jobs_page_meta_description;

  return (
    <HeadSeo
      location={location}
      title={metaTitle}
      description={metaDescription}
    >
      {({ url, description }) => [
        <JobPostingJsonLd
          key="jobposting-jsonld"
          jobPost={jobPost}
          url={url}
          description={description}
          logo={
            logoPath.startsWith('http')
              ? new URL(logoPath)
              : new URL(logoPath, url)
          }
        />,
      ]}
    </HeadSeo>
  );
};
