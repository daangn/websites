import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import Layout from '~/components/Layout';
import PageTitle from '~/components/PageTitle';
import Button from '~/components/Button';

type JobApplicationPageProps = PageProps<GatsbyTypes.JobApplicationPageQuery, GatsbyTypes.SitePageContext>;

const JobPostTitle = styled('p', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
});

const JobApplicationPage: React.FC<JobApplicationPageProps> = ({
  data,
}) => {
  if (!data.jobPost) {
    throw new Error(
      'pageContext에 jobPost 값이 주입되지 않았습니다!',
    );
  }

  return (
    <Layout>
      <PageTitle>지원하기</PageTitle>
      <JobPostTitle>
        {data.jobPost.title}
      </JobPostTitle>
      <Button as="button" fullWidget type="primary">
        동의 후 제출하기
      </Button>
    </Layout>
  );
};

export default JobApplicationPage;

export const query = graphql`
  query JobApplicationPage($id: String!) {
    jobPost(id: { eq: $id }) {
      title
    }
  }
`;
