import * as React from 'react';
import type { PageProps } from 'gatsby';
import { rem } from 'polished';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import type { OverrideProps } from '@cometjs/core';
import { required } from '@cometjs/core';
import { useLocation } from '@reach/router';

import _PageTitle from '~/components/PageTitle';

type JobPostLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.JobPostLayout_queryFragment>,
  {
    children: React.ReactNode,
  }
>;

export const query = graphql`
  fragment JobPostLayout_query on Query {
    jobPost(id: { eq: $id }) {
      id
      title
      chapter
      corporate
      employmentType
      priorExperience
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
  data: { jobPost },
}) => {
  required(jobPost);

  const { pathname: currentPath } = useLocation();

  const properties = [
    {
      KARROT_MARKET: '당근마켓',
      KARROT_PAY: '당근페이',
    }[jobPost.corporate],
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
