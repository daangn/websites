import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '~/components/Layout';

type JobPostPageProps = PageProps<GatsbyTypes.JobPostPageQuery, GatsbyTypes.SitePageContext>;

function required(v: unknown): asserts v {
  if (!v) throw new Error('value is required');
}

const JobPostPage: React.FC<JobPostPageProps> = ({
  data,
}) => {
  required(data.jobPost);
  return (
    <Layout>
      <h1>{data.jobPost.title}</h1>
    </Layout>
  );
};

export default JobPostPage;

export const query = graphql`
  query JobPostPage($id: String!) {
    jobPost(id: { eq: $id }) {
      title
    }
  }
`
