import * as React from 'react';
import type { PageProps } from 'gatsby';
import { navigate } from 'gatsby';
import { rem } from 'polished';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import type { OverrideProps } from '@cometjs/core';
import { required } from '@cometjs/core';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { useLocation } from '@reach/router';

import _PageTitle from '~/components/PageTitle';
import JobPostingJsonLd from '~/components/JobPostingJsonLd';
import logoPath from '~/assets/logo.png';
import backwardSvgUrl from '~/assets/backwardOutlineM.svg';

type JobPostLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.JobPostLayout_queryFragment>,
  {
    children: React.ReactNode,
  }
>;

export const query = graphql`
  fragment JobPostLayout_query on Query {
    prismicTeamContents {
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
      id
      title
      chapter
      corporate
      employmentType
      priorExperience
      datePosted: updatedAt(formatString: "YYYY-MM-DD", locale: "ko")
      validThrough(formatString: "YYYY-MM-DD", locale: "ko")
      viewPath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
      applyPath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}/apply")
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
  marginBottom: rem(20),

  display: 'inline-block',
  width: rem(36),
  height: rem(36),
  background: `url(${backwardSvgUrl})`,
  cursor: 'pointer',

  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },

  variants: {
    size: {
      sm: {
        marginBottom: rem(36)
      },
    },
  },
})

const PropertyList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  paddingLeft: 0,
  fontSize: '$caption1',
  marginBottom: rem(40),

  variants: {
    size: {
      sm: {
        fontSize: '$body2',
        marginBottom: rem(72),
      },
    },
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

  variants: {
    size: {
      sm: {
        marginBottom: rem(48),
      },
    },
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
  const siteOrigin = useSiteOrigin();
  const { pathname: currentPath } = useLocation();

  required(jobPost);
  required(prismicTeamContents?.data);

  const metaTitle = `${jobPost.title} | ${prismicTeamContents.data.jobs_page_meta_title}`;
  const metaDescription = prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  const corporate = jobPost.corporate || 'KARROT_MARKET';
  const logoUrl = siteOrigin + logoPath;

  const properties = [
    {
      KARROT_MARKET: '당근마켓',
      KARROT_PAY: '당근페이',
    }[corporate],
    jobPost.chapter,
    {
      FULL_TIME: '정규직',
      CONTRACTOR: '계약직',
      INTERN: '인턴',
    }[jobPost.employmentType],
    {
      YES: '경력',
      NO: '신입',
      WHATEVER: '경력/신입',
    }[jobPost.priorExperience],
  ].filter(Boolean) as string[];

  return (
    <Container>
      <GatsbySeo
        title={metaTitle}
        description={metaDescription}
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
        title={jobPost.title}
        description={metaDescription}
        datePosted={jobPost.datePosted || undefined}
        validThrough={jobPost.validThrough || undefined}
        industry="IT, 컨텐츠"
        employmentType={jobPost.employmentType}
        experienceRequirements={{
          YES: '경력',
          NO: '신입',
          WHATEVER: ['경력', '신입'],
        }[jobPost.priorExperience]}
        organization={{
          KARROT_MARKET: {
            name: '당근마켓',
            url: 'https://www.daangn.com',
            logoUrl,
          },
          KARROT_PAY: {
            name: '당근페이',
            url: 'https://www.daangnpay.com',
            logoUrl,
          },
        }[corporate]}
        locations={[
          {
            postalCode: '06611',
            addressLocality: '서초구',
            addressRegion: '서울특별시',
            addressCountry: '대한민국',
            streetAddress: '강남대로 465, 교보타워 11층',
          }
        ]}
      />
      <PreviousLink 
        aria-label="목록으로 돌아가기"
        to="/jobs/"
        size={{ '@sm': 'sm' }} 
        onClick={(e) => {
          if (window.history.state['fromList']) {
            e.preventDefault();
            navigate(-1);
          }
        }} 
      />
      <PageTitle size={{ '@sm': 'sm' }}>
        {jobPost.title}
      </PageTitle>
      <PropertyList size={{ '@sm': 'sm' }}>
        {properties.map(prop => (
          <Property key={prop}>
            {prop}
          </Property>
        ))}
      </PropertyList>
      <AnimateSharedLayout>
        <Tabs size={{ '@sm': 'sm' }}>
          <TabItemList role="tablist">
            <TabItem key="jobpost-view">
              <TabLink
                to={jobPost.viewPath!}
                active={currentPath === jobPost.viewPath!}
                state={{ y: typeof window !== 'undefined' && window.scrollY }}
              >
                영입정보
              </TabLink>
              {currentPath === jobPost.viewPath && (
                <TabItemUnderline
                  layoutId="jobpost-tab-underline"
                  initial={false}
                />
              )}
            </TabItem>
            <TabItem key="jobpost-apply">
              <TabLink
                to={jobPost.applyPath!}
                active={currentPath === jobPost.applyPath}
                state={{ y: typeof window !== 'undefined' && window.scrollY }}
              >
                지원하기
              </TabLink>
              {currentPath === jobPost.applyPath && (
                <TabItemUnderline
                  layoutId="jobpost-tab-underline"
                  initial={false}
                />
              )}
            </TabItem>
          </TabItemList>
        </Tabs>
      </AnimateSharedLayout>
      {children}
    </Container>
  );
};

export default JobPostLayout;
