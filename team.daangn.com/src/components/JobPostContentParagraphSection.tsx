import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

type JobPostContentParagraphSectionProps = {
  content: GatsbyTypes.JobPostContentParagraphSection_contentFragment,
};

export const query = graphql`
  fragment JobPostContentParagraphSection_content on JobPostContentParagraphSection {
    title
    paragraph
  }
`;

const Container = styled('section', {
  marginBottom: rem(56),
});

const Title = styled('h3', {
  marginBottom: rem(16),
});

const Paragraph = styled('p', {
  typography: '$body2',
});

const JobPostContentParagraphSection: React.FC<JobPostContentParagraphSectionProps> = ({
  content,
}) => {
  return (
    <Container>
      <Title>{content.title}</Title>
      <Paragraph>
        {content.paragraph}
      </Paragraph>
    </Container>
  );
};

export default JobPostContentParagraphSection;
