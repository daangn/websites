import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { required } from '@cometjs/core';
import { mapAbstractType } from '@cometjs/graphql-utils';

import Layout from '~/components/Layout';
import PageTitle from '~/components/PageTitle';
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

const ContentWrapper = styled('div', {
  display: 'grid',
});

const JobPostPage: React.FC<JobPostPageProps> = ({
  data,
}) => {
  required(data.jobPost);
  return (
    <Layout>
      <PageTitle>
        {data.jobPost.title}
      </PageTitle>
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
      <Button to={data.jobPost.applyPath!} type="primary">
        지원하기
      </Button>
      <Button to="/faq/">
        자주 묻는 질문
      </Button>
    </Layout>
  );
};

export default JobPostPage;
