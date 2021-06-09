import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

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
  marginBottom: rem(56),
});

const Title = styled('h3', {
  marginBottom: rem(16),
});

const List = styled('ul', {
  paddingLeft: rem(24),
});

const Item = styled('li', {
  typography: '$body2',
  marginBottom: rem(8),
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
