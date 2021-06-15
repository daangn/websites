import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { mapAbstractType } from '@cometjs/graphql-utils';

import Button from '~/components/Button';
import JobPostContentUnorderedListSection from '~/components/JobPostContentUnorderedListSection';
import JobPostContentOrderedListSection from '~/components/JobPostContentOrderedListSection';
import JobPostContentParagraphSection from '~/components/JobPostContentParagraphSection';

type JobPostPageProps = PageProps<GatsbyTypes.JobPostPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query JobPostPage($id: String!) {
    ...DefaultLayout_query
    ...JobPostLayout_query
    jobPost(id: { eq: $id }) {
      applyPath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}/apply")
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
});

const ContentWrapper = styled('article', {
  gridArea: 'content',
});

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: rem(20),

  variants: {
    layout: {
      column: {
        flexDirection: 'row',
      },
    },
  },
});

const JobPostPage: React.FC<JobPostPageProps> = ({
  data,
}) => {
  required(data.jobPost);
  return (
    <Container>
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
      <ButtonContainer layout={{ '@sm': 'column' }}>
        <Button to={data.jobPost.applyPath!} type="primary">
          지원하기
        </Button>
        <Button to="/jobs/faq/">
          자주 묻는 질문
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default JobPostPage;
