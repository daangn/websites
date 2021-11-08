import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';

import Button from '../components/Button';
import ArrowLink from '../components/ArrowLink';
import JobPostContentSection from '../components/JobPostContentSection';

import messages from './jobPostPage/messages';

type JobPostPageProps = PageProps<GatsbyTypes.TeamWebsite_JobPostPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_JobPostPage(
    $id: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
    ...TeamWebsite_JobPostLayout_query
    jobPost(id: { eq: $id }) {
      # Avoid File System Route API
      ghId
      # applyPath: gatsbyPath(filePath: "/jobs/{JobPost.ghId}/apply")
      content {
        ...TeamWebsite_JobPostContentSection_content
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

const JobPostPage: React.FC<JobPostPageProps> = ({
  data,
}) => {
  const parseLink = useLinkParser();

  required(data.jobPost);

  if (data.jobPost.externalUrl) {
    return (
      <Container>
        <ContentWrapper>
          <strong>{messages.external_post_notice}</strong>
        </ContentWrapper>
        <Button
            type="primary"
            to={data.jobPost.externalUrl!}
            fullWidth={{ '@initial': true, '@sm': false }}
          >
            {messages.external_post_link}
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
          type="primary"
          to={`/jobs/${data.jobPost.ghId}/apply/`}
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          {messages.apply}
        </Button>
        <Button
          to="/jobs/faq/"
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          {messages.faq}
        </Button>
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
        {messages.back_to_list}
      </ArrowLink>
    </Container>
  );
};

export default JobPostPage;
