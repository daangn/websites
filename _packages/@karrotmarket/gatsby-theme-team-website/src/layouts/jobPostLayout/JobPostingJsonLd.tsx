import * as React from 'react';
import { graphql } from 'gatsby';
import { JobPostingJsonLd as Ld } from 'gatsby-plugin-head-seo/src/jsonld';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

import locations from './locations';

type JobPostingJsonLdProps = {
  url: URL,
  logo?: URL,
  description?: string,

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
  logo,
  description,
  jobPost,
}) => {
  const lookup = (key: string, source: unknown) =>
    (source as Record<string, string | undefined>)[key];

  const messages = useTranslation();

  return (
    <Ld
      jobPosting={{
        '@type': 'JobPosting',
        url: url.toString(),
        title: jobPost.title,
        // FIXME: jobPost 내용으로 대치? (HTML 지원 범위 확인 필요)
        description,
        datePosted: jobPost.datePosted || undefined,
        validThrough: jobPost.validThrough || undefined,
        industry: 'IT',
        employmentType: lookup(
          jobPost.employmentType,
          {
            FULL_TIME: 'FULL_TIME',
            CONTRACTOR: 'CONTRACTOR',
            INTERN: 'INTERN',
            ASSISTANT: 'PART_TIME',
            PART_TIME:'PART_TIME',
            FREE_LANCER:'FREE_LANCER',
            OTHER:'OTHER',
          },
        ),
        experienceRequirements: lookup(
          jobPost.priorExperience,
          {
            YES: undefined,
            NO: 'no requirements',
            WHATEVER: 'no requirements',
          },
        ),
        hiringOrganization: lookup(
          jobPost.corporate,
          {
            KARROT_MARKET: {
              '@type': 'Organization',
              name: messages.job_post_layout__property_karrot_market,
              url: 'https://www.daangn.com',
              logo,
            },
            KARROT_PAY: {
              '@type': 'Organization',
              name: messages.job_post_layout__property_karrot_pay,
              url: 'https://www.daangnpay.com',
              logo,
            },
          },
        ),
        jobLocation: locations.map(location => ({
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            ...location,
          },
        })),
      }}
    />
  );
};

export default JobPostingJsonLd;
