import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type JobPostContentOrderedListSectionProps = {
  content: GatsbyTypes.JobPostContentOrderedListSection_contentFragment,
};

export const query = graphql`
  fragment JobPostContentOrderedListSection_content on JobPostContentOrderedListSection {
    title
    items
  }
`;

const Container = styled('section', {
});

const Title = styled('h3', {
});

const List = styled('ol', {
});

const Item = styled('li', {
});

const JobPostContentOrderedListSection: React.FC<JobPostContentOrderedListSectionProps> = ({
  content,
}) => {
  return (
    <Container>
      <Title>
        {content.title}
      </Title>
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

export default JobPostContentOrderedListSection;
