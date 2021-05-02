import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import JobPostingListItem from './JobPostingListItem';
import FadeInWhenVisible from './FadeInWhenVisible';

type JobPostingListProps = {
  jobPosts: GatsbyTypes.JobPostingList_jobPostsFragment,
};

export const query = graphql`
  fragment JobPostingList_jobPosts on JobPostConnection {
    nodes {
      id
      pagePath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
      ...JobPostingListItem_jobPost
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

const JobPostingList: React.FC<JobPostingListProps> = ({
  jobPosts,
}) => {
  return (
    <Container>
      <AnimatePresence initial={false}>
        {jobPosts.nodes.map(jobPost => (
          <FadeInWhenVisible key={jobPost.id}>
            <JobPostLink to={jobPost.pagePath}>
              <JobPostingListItem jobPost={jobPost} />
            </JobPostLink>
          </FadeInWhenVisible>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default JobPostingList;
