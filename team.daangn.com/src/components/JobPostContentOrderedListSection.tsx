import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

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
  marginBottom: rem(56),
});

const Title = styled('h3', {
  marginBottom: rem(16),
});

const List = styled('ol', {
  paddingLeft: rem(24),
});

const Item = styled('li', {
  fontSize: '$body2',
  marginBottom: rem(8),
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
