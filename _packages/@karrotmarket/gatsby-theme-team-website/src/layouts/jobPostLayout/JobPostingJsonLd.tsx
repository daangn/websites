import * as React from 'react';
import { graphql } from 'gatsby';

import LinkedData from '../../components/JobPostingJsonLd';

import messages from '../../translations.json';
import locations from './locations';

type JobPostingJsonLdProps = {
  url: string,
  logoUrl?: string,
  metaDescription?: string,

  // FIXME: JobPost 타입 자체에 데이터 들어가야함
  // 컨텐츠 HTML 이라던가
  // Department 정보?
  jobPost: GatsbyTypes.TeamWebsite_JobPostingJsonLd_jobPostFragment,
};

export const query = graphql`
  fragment TeamWebsite_JobPostingJsonLd_jobPost on JobPost {
    title
    datePosted: updatedAt(formatString: "YYYY-MM-DD")
    validThrough(formatString: "YYYY-MM-DD")
    priorExperience
    corporate
  }
`;

const JobPostingJsonLd: React.FC<JobPostingJsonLdProps> = ({
  url,
  logoUrl,
  metaDescription,
  jobPost,
}) => {
  return (
    <LinkedData
      url={url}
      title={jobPost.title}
      description={metaDescription}
      datePosted={jobPost.datePosted || undefined}
      validThrough={jobPost.validThrough || undefined}
      industry="IT"
      employmentType={jobPost.employmentType}
      experienceRequirements={{
        YES: undefined,
        NO: 'no requirements',
        WHATEVER: 'no requirements',
      }[jobPost.priorExperience]}
      organization={{
        KARROT_MARKET: {
          name: messages.job_post_layout__property_karrot_market,
          url: "https://www.daangn.com",
          logoUrl,
        },
        KARROT_PAY: {
          name: messages.job_post_layout__property_karrot_pay,
          url: "https://www.daangnpay.com",
          logoUrl,
        },
      }[jobPost.corporate]}
      locations={locations}
    />
  );
};

export default JobPostingJsonLd;
