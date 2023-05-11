import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import Tag from './Tag';

type TagsProps = {
  data: GatsbyTypes.Tags_dataFragment;
};

export const query = graphql`
  fragment Tags_post on Post {
    tags
  }
`;

const TagList: React.FC<TagsProps> = ({ data }) => {
  return (
    <TagContainer>
      {data.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  );
};

const TagContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(12),
  width: '100%',

  /*
    Temporarily Applied Styles
  */
  padding: `0 ${rem(8)}`,
});

export default TagList;
