import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser, mapLink } from '@karrotmarket/gatsby-theme-website/src/link';
import { vars } from '@seed-design/design-token';

import JobPostSummary from './JobPostSummary';
import FadeInWhenVisible from './FadeInWhenVisible';
import EmptyPlaceholder from './jobPostList/EmptyPlaceholder';

type JobPostListProps = {
  jobPosts: GatsbyTypes.TeamWebsite_JobPostList_jobPostsFragment,
  className?: string,
  filterEmploymentType?: string,
  searchResults?: string[],
};

export const query = graphql`
  fragment TeamWebsite_JobPostList_jobPosts on JobPost {
    id
    ghId
    # Avoid File System Route API
    # pagePath: gatsbyPath(filePath: "/jobs/{JobPost.ghId}")
    externalUrl
    order
    departments {
      id
    }
    employmentType
    ...TeamWebsite_JobPostSummary_jobPost
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
    color: vars.$scale.color.gray600,
  },
});

const JobPostListItem = styled('li', {
  position: 'relative',
  display: 'block',
});

const JobPostList: React.FC<JobPostListProps> = ({
  jobPosts,
  className,
  filterEmploymentType = '',
  searchResults
}) => {
  const parseLink = useLinkParser();

  const orderedJobPosts = jobPosts 
    .sort((a, b) => b.order - a.order);

  const filteredJobPosts = orderedJobPosts
    .filter(jobPosts =>{
      if(!searchResults) return true;
      return searchResults.includes(jobPosts.id)
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
                : parseLink(`/jobs/${jobPost.ghId}/`);

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
        <EmptyPlaceholder link="/jobs/" />
      )}
    </Container>
  );
};

export default React.memo(JobPostList);
