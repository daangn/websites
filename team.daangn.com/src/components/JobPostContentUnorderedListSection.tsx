import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type JobPostContentUnorderedListSectionProps = {
  content: GatsbyTypes.JobPostContentUnorderedListSection_contentFragment,
};

export const query = graphql`
  fragment JobPostContentUnorderedListSection_content on JobPostContentUnorderedListSection {
    title
    items
  }
`;

const Container = styled('section', {
});

const Title = styled('h3', {
});

const List = styled('ul', {
});

const Item = styled('li', {
});

const JobPostContentUnorderedListSection: React.FC<JobPostContentUnorderedListSectionProps> = ({
  content,
}) => {
  return (
    <Container>
      <Title>{content.title}</Title>
      <List>
        {content.items.map((item, i) => (
          <Item key={i}>
            {item}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default JobPostContentUnorderedListSection;
