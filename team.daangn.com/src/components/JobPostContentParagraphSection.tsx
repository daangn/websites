import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

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
});

const Title = styled('h3', {
});

const Paragraph = styled('p', {
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
