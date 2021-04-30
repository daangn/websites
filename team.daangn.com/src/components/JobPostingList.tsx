import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphql } from 'gatsby';
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
      ...JobPostingListItem_jobPost
    }
  }
`;

const Container = styled(motion.ul, {
  listStyle: 'none',
  padding: 0,
});

const JobPostingList: React.FC<JobPostingListProps> = ({
  jobPosts,
}) => {
  return (
    <Container>
      <AnimatePresence initial={false}>
        {jobPosts.nodes.map(jobPost => (
          <FadeInWhenVisible key={jobPost.id}>
            <JobPostingListItem jobPost={jobPost} />
          </FadeInWhenVisible>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default JobPostingList;
