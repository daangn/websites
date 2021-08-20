import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { Condition } from '@cometjs/core';
import { useLinkParser, mapLink } from '@karrotmarket/gatsby-theme-website/src/link';

import JobPostSummary from './JobPostSummary';
import FadeInWhenVisible from './FadeInWhenVisible';
import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';

type JobPostListProps = {
  jobs: GatsbyTypes.JobPostList_jobPostsFragment,
  className?: string,
  filterChapter?: string,
  filterEmploymentType?: string,
};

export const query = graphql`
  fragment JobPostList_jobs on GreenhouseJobConnection {
    nodes {
      childJobPost {
        id
        pagePath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
        externalUrl
        chapter
        order
        employmentType
        ...JobPostSummary_jobPost
      }
    }
  }
`;

const Container = styled('div', {
  display: 'grid',
});

const List = styled(motion.ul, {
  listStyle: 'none',
  padding: 0,
});

const JobPostLink = styled(Link, {
  display: 'block',
  color: 'inherit',
  transition: 'color .3s',
  textDecoration: 'none',
  '&:hover': {
    color: '$gray600',
  },
});

const JobPostListItem = styled('li', {
  position: 'relative',
  display: 'block',
});

const JobPostList: React.FC<JobPostListProps> = ({
  jobs,
  className,
  filterChapter = '',
  filterEmploymentType = '',
}) => {
  const parseLink = useLinkParser();

  const jobPosts = jobs.nodes
    .map(job => job.childJobPost)
    .filter(Condition.isTruthy);

  const orderedJobPosts = jobPosts 
    .sort((a, b) => b.order - a.order);

  const filteredJobPosts = orderedJobPosts
    .filter(jobPost => {
      if (filterChapter === '') return true;
      return jobPost.chapter === filterChapter;
    })
    .filter(jobPost => {
      if (filterEmploymentType === '') return true;
      return jobPost.employmentType === filterEmploymentType;
    });

  return (
    <Container className={className}>
      {filteredJobPosts.length > 0 ? (
        <List>
          <AnimatePresence initial={false}>
            {filteredJobPosts.map(jobPost => {
              const link = jobPost.externalUrl
                ? parseLink(jobPost.externalUrl)
                : parseLink(jobPost.pagePath!);

              return (
                <FadeInWhenVisible key={jobPost.id}>
                  <JobPostListItem>
                    {mapLink(link, {
                      Internal: link => (
                        <JobPostLink to={link.pathname} state={{ fromList: true }}>
                          <JobPostSummary jobPost={jobPost} />
                        </JobPostLink>
                      ),
                      External: link => (
                        <JobPostLink as="a"
                          href={link.url.href}
                          target="_blank"
                          rel="external noopener"
                        >
                          <JobPostSummary jobPost={jobPost} />
                        </JobPostLink>
                      ),
                    })}
                  </JobPostListItem>
                </FadeInWhenVisible>
              )
            })}
          </AnimatePresence>
        </List>
      ) : (
        <EmptyPlaceholder />
      )}
    </Container>
  );
};

export default React.memo(JobPostList);
