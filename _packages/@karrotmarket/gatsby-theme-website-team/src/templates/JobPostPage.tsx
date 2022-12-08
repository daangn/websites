import * as React from 'react';
import {
  graphql,
  navigate,
  type PageProps,
  type HeadProps,
} from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import { JobPostLayoutHead } from '../layouts/JobPostLayout';
import Button from '../components/Button';
import ArrowLink from '../components/ArrowLink';
import JobPostContentSection from '../components/JobPostContentSection';
import { lookup } from '../utils/common';

export const query = graphql`
  query TeamWebsite_JobPostPage(
    $id: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
    ...TeamWebsite_JobPostLayout_query

    jobPost(id: { eq: $id }) {
      corporate
      # Avoid File System Route API
      ghId
      # applyPath: gatsbyPath(filePath: "/jobs/{JobPost.ghId}/apply")
      content {
        ...TeamWebsite_JobPostContentSection_content
      }
    }

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        enable_faq_page
        faq_page_entries {
          faq_page {
            uid
          }
        }
      }
    }
  }
`;

const Container = styled('div', {
  display: 'grid',
  gap: rem(56),
});

const ContentWrapper = styled('article', {
});

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: rem(20),

  '@sm': {
    flexDirection: 'row',
  },
});

type JobPostPageProps = PageProps<GatsbyTypes.TeamWebsite_JobPostPageQuery>;
const JobPostPage: React.FC<JobPostPageProps> = ({
  data,
}) => {
  required(data.jobPost);

  const parseLink = useLinkParser();
  const messages = useTranslation();

  if (data.jobPost.externalUrl) {
    return (
      <Container>
        <ContentWrapper>
          <strong>{messages.job_post_page__external_post_notice}</strong>
        </ContentWrapper>
        <Button
            variant="primary"
            to={data.jobPost.externalUrl!}
            fullWidth={{ '@initial': true, '@sm': false }}
          >
            {messages.job_post_page__external_post_link}
          </Button>
      </Container>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        {data.jobPost.content.map((content, i) => (
          <JobPostContentSection key={i} content={content} />
        ))}
      </ContentWrapper>
      <ButtonContainer>
        <Button
          variant="primary"
          to={`/jobs/${data.jobPost.ghId}/apply/`}
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          {messages.job_post_layout__tab_apply}
        </Button>
        {data.prismicTeamContents.data.enable_faq_page && (
          <Button
            to={`/faq/`}
            fullWidth={{ '@initial': true, '@sm': false }}
          >
            {messages.job_post_page__faq}
          </Button>
        )}
      </ButtonContainer>
      <ArrowLink
        link={parseLink('/jobs/')}
        direction="backward"
        onClick={e => {
          if (window.history.state['fromList']) {
            e.preventDefault();
            navigate(-1);
          }
        }}
      >
        {messages.job_post_page__back_to_list}
      </ArrowLink>
    </Container>
  );
};

export default JobPostPage;

type JobPostPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_JobPostPageQuery>;
export const Head: React.FC<JobPostPageHeadProps> = ({
  location,
  data,
  data: { jobPost, prismicTeamContents },
}) => {
  required(jobPost);
  required(prismicTeamContents);

  const messages = useTranslation();
  const corpName = lookup(jobPost.corporate, {
    'KARROT_MARKET': messages.job_post_layout__property_karrot_market,
    'KARROT_PAY': messages.job_post_layout__property_karrot_pay,
  });

  const metaTitle = `${jobPost.title} | ${prismicTeamContents.data.jobs_page_meta_title || corpName}`;
  const metaDescription = prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      root={false}
      location={location}
      title={metaTitle}
      description={metaDescription}
    >
      {props => [
        <DefaultLayoutHead
          {...props}
          location={location}
          data={data}
          image={metaImage && {
            url: new URL(
              metaImage.src,
              metaImage.src.startsWith('http')
                ? metaImage.src
                : props.url,
            ),
            width: metaImage.width,
            height: metaImage.height,
          }}
        />,
        <JobPostLayoutHead
          {...props}
          location={location}
          data={data}
        />,
      ]}
    </HeadSeo>
  )
};
