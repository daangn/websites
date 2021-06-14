import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import JobPostSummary from './JobPostSummary';
import FadeInWhenVisible from './FadeInWhenVisible';

type JobPostListProps = {
  jobPosts: GatsbyTypes.JobPostList_jobPostsFragment,
  className?: string,
  filterChapter?: string,
  filterEmploymentType?: string,
};

export const query = graphql`
  fragment JobPostList_jobPosts on JobPostConnection {
    nodes {
      id
      pagePath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
      chapter
      employmentType
      ...JobPostSummary_jobPost
    }
  }
`;

const Container = styled(motion.ul, {
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
  jobPosts,
  className,
  filterChapter = '',
  filterEmploymentType = '',
}) => {
  return (
    <Container className={className}>
      <AnimatePresence initial={false}>
        {jobPosts.nodes
        .filter(jobPost => {
          if (filterChapter === '') return true;
          return jobPost.chapter === filterChapter;
        })
        .filter(jobPost => {
          if (filterEmploymentType === '') return true;
          return jobPost.employmentType === filterEmploymentType;
        })
        .map(jobPost => (
          <FadeInWhenVisible key={jobPost.id}>
            <JobPostListItem>
              <JobPostLink to={jobPost.pagePath!}>
                <JobPostSummary jobPost={jobPost} />
              </JobPostLink>
            </JobPostListItem>
          </FadeInWhenVisible>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default JobPostList;
