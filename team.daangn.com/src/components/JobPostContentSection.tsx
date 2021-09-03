import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type JobPostContentSectionProps = {
  content: GatsbyTypes.JobPostContentSection_contentFragment,
};

export const query = graphql`
  fragment JobPostContentSection_content on JobPostContentSection {
    title
    bodyHtml
  }
`;

const Container = styled('section', {
  '&:not(:last-child)': {
    marginBottom: rem(56),
  }
});

const Title = styled('h3', {
  marginBottom: rem(16),
});

const Body = styled('div', {
  typography: '$body2',
  '& ol': {
    paddingLeft: rem(24),
  },
  '& ul': {
    paddingLeft: rem(24),
  },
  '& li': {
    marginBottom: rem(8),
  },
});

const JobPostContentSection: React.FC<JobPostContentSectionProps> = ({
  content,
}) => {
  return (
    <Container>
      <Title>{content.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </Container>
  );
};

export default JobPostContentSection;
