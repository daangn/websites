import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';

import Button from '~/components/Button';
import ArrowLink from '~/components/ArrowLink';
import JobPostContentSection from '~/components/JobPostContentSection';

type JobPostPageProps = PageProps<GatsbyTypes.JobPostPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query JobPostPage($id: String!) {
    ...DefaultLayout_query
    ...JobPostLayout_query
    jobPost(id: { eq: $id }) {
      applyPath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}/apply")
      content {
        ...JobPostContentSection_content
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
          to={data.jobPost.applyPath!}
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          지원하기
        </Button>
        <Button
          to="/jobs/faq/"
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          자주 묻는 질문
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
        목록으로 돌아가기
      </ArrowLink>
    </Container>
  );
};

export default JobPostPage;
