import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { rem } from 'polished';

import Layout from '~/components/Layout';
import PageTitle from '~/components/PageTitle';
import JobPostingList from '~/components/JobPostingList';

type JobsPageProps = PageProps<GatsbyTypes.JobsPageQuery>;

export const query = graphql`
  query JobsPage {
    allJobPost {
      ...JobPostingList_jobPosts
      nodes {
        pagePath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
      }
    }
  }
`;

const JobsPage: React.FC<JobsPageProps> = ({
  data,
}) => {
  return (
    <Layout>
      <PageTitle
        size={{ '@sm': 'sm' }}
        css={{
          marginBottom: rem(56),
        }}
      >
        {`당근마켓과 함께 할
        멋진 동료를 찾고 있어요!`}
      </PageTitle>
      <JobPostingList
        jobPosts={data.allJobPost}
      />
    </Layout>
  );
};

export default JobsPage;
