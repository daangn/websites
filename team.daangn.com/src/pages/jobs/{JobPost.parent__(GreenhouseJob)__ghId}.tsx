import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { mapAbstractType } from '@cometjs/graphql-utils';

import Layout from '~/components/Layout';
import _PageTitle from '~/components/PageTitle';
import Button from '~/components/Button';
import JobPostContentUnorderedListSection from '~/components/JobPostContentUnorderedListSection';
import JobPostContentOrderedListSection from '~/components/JobPostContentOrderedListSection';
import JobPostContentParagraphSection from '~/components/JobPostContentParagraphSection';

type JobPostPageProps = PageProps<GatsbyTypes.JobPostPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query JobPostPage($id: String!) {
    jobPost(id: { eq: $id }) {
      id
      title
      employmentType
      applyPath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}/apply")
      # ...JobPostContentSection_jobPost
      content {
        __typename
        ...JobPostContentUnorderedListSection_content
        ...JobPostContentOrderedListSection_content
        ...JobPostContentParagraphSection_content
      }
    }
  }
`;

const Container = styled('div', {
  variants: {
    layout: {
      sidebar: {
        display: 'grid',
        gridTemplate: `
          "content content content sidebar" auto
          "content content content apply"   auto
          "content content content faq"     auto
          "content content content ."       auto /
          1fr      1fr     1fr     1fr
        `,
      },
    },
  },
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(36),
  variants: {
    size: {
      sm: {
        marginBottom: rem(80),
      },
    },
  },
});

const PropertyTable = styled('aside', {
  gridArea: 'sidebar',
  height: rem(100),
  marginBottom: rem(50),
  variants: {
    layout: {
      sidebar: {
        position: 'sticky',
        top: '20vh',
        marginBottom: rem(30),
      },
    },
  },
});

const PropertyTableTitle = styled('p', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
  marginBottom: rem(24),
});

const PropertyList = styled('dl', {
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  fontSize: '$body2',
  '> *': {
    borderTop: '1px solid $gray200',
    paddingY: rem(24),
  },
});

const PropertyKey = styled('dt', {
  color: '$gray900',
  fontWeight: 'bold',
});

const PropertyValue = styled('dd', {
  color: '$gray700',
  paddingLeft: rem(16),
});

const ContentWrapper = styled('div', {
  gridArea: 'content',
});

const ApplyButtonWrapper = styled('div', {
  gridArea: 'apply',
  position: 'sticky',
  bottom: 0,
  paddingY: rem(16),
  background: 'white',
  variants: {
    layout: {
      sidebar: {
        bottom: 'unset',
        top: `calc(20vh + ${rem(100 + 30)})`,
      },
    },
  },
});

const ApplyLink = styled(Button, {
  width: '100%',
});

const FaqLink = styled(Button, {
  width: '100%',
  variants: {
    layout: {
      sidebar: {
        position: 'sticky',
        top: `calc(20vh + ${rem(100 + 30 + 60 + 16*2)})`,
      },
    },
  },
});

const JobPostPage: React.FC<JobPostPageProps> = ({
  data,
}) => {
  required(data.jobPost);
  return (
    <Layout>
      <PageTitle size={{ '@sm': 'sm' }}>
        {data.jobPost.title}
      </PageTitle>
      <Container layout={{ '@md': 'sidebar' }}>
        <PropertyTable layout={{ '@md': 'sidebar' }}>
          <PropertyTableTitle>
            커뮤니케이션
          </PropertyTableTitle>
          <PropertyList>
            <PropertyKey>고용형태</PropertyKey>
            <PropertyValue>
              {{
                'FULL_TIME': '정규직',
                'CONTRACTOR': '계약직',
                'INTERN': '인턴',
              }[data.jobPost.employmentType]}
            </PropertyValue>
          </PropertyList>
        </PropertyTable>
        <ContentWrapper>
          {data.jobPost.content.map((content, i) => mapAbstractType(content, {
            JobPostContentParagraphSection: content => (
              <JobPostContentParagraphSection key={i} content={content} />
            ),
            JobPostContentOrderedListSection: content => (
              <JobPostContentOrderedListSection key={i} content={content} />
            ),
            JobPostContentUnorderedListSection: content => (
              <JobPostContentUnorderedListSection key={i} content={content} />
            ),
          }))}
        </ContentWrapper>
        <ApplyButtonWrapper layout={{ '@md': 'sidebar' }}>
          <ApplyLink to={data.jobPost.applyPath!} type="primary">
            지원하기
          </ApplyLink>
        </ApplyButtonWrapper>
        <FaqLink to="/faq/" layout={{ '@md': 'sidebar' }}>
          자주 묻는 질문
        </FaqLink>
      </Container>
    </Layout>
  );
};

export default JobPostPage;
