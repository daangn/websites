import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby';
import * as React from 'react'
import type { OverrideProps } from '@cometjs/core';

type JobPostLayoutProps = OverrideProps<
  PageProps<GatsbyTypes.TeamWebsite_JobsLayout_queryFragment>,
  {
    children: React.ReactNode,
  }
>;

export const query = graphql`
  fragment TeamWebsite_JobsLayout_query on Query {
    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        jobs_page_top_banner_left {
          url
        }
        jobs_page_gap_between_top_banners
        jobs_page_top_banner_right {
          url
        }
      }
    }
  }
`

const JobsLayout: React.FC<JobPostLayoutProps> = ({ data, children }) => {
  console.log(data)

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default JobsLayout
