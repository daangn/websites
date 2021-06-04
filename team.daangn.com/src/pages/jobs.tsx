import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import PageTitle from '~/components/PageTitle';
import JobPostList from '~/components/JobPostList';

type JobsPageProps = PageProps<GatsbyTypes.JobsPageQuery>;

export const query = graphql`
  query JobsPage {
    ...DefaultLayout_query
    allJobPost {
      ...JobPostList_jobPosts
    }
  }
`;

const Container = styled('section', {
  contentArea: true,
});

const JobsPage: React.FC<JobsPageProps> = ({
  data,
}) => {
  return (
    <Container>
      <PageTitle
        size={{ '@sm': 'sm' }}
        css={{
          marginBottom: rem(56),
        }}
      >
        {`당근마켓과 함께 할
        멋진 동료를 찾고 있어요!`}
      </PageTitle>
      <JobPostList
        jobPosts={data.allJobPost}
      />
    </Container>
  );
};

export default JobsPage;
