import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';

import Layout from '~/components/Layout';

type JobsPageProps = PageProps<GatsbyTypes.JobsPageQuery>;

const JobsPage: React.FC<JobsPageProps> = ({
  data,
}) => {
  return (
    <Layout>
      <h1>공고 보기</h1>
      <ul>
        {data.allJobPost.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.pagePath!}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default JobsPage;

export const query = graphql`
  query JobsPage {
    allJobPost {
      nodes {
        id
        title
        pagePath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
      }
    }
  }
`;
