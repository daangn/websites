import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type PostHeaderProps = {
  postHeader: GatsbyTypes.PostHeader_dataFragment;
};

export const query = graphql`
  fragment PostHeader_data on BlogPost {
    title
    publishedAt
    category {
      name
      uid
    }
  }
`;

const PostHeader: React.FC<PostHeaderProps> = ({ postHeader }) => {
  return (
    <Header>
      <Title>{postHeader.title}</Title>
      <Wrapper>
        {postHeader.category.name} | {postHeader.publishedAt}
      </Wrapper>
    </Header>
  );
};

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: rem(66),
});

const Title = styled('h1', {
  fontSize: '$subtitle1',
  marginBottom: rem(12),

  '@md': {
    fontSize: '$heading4',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  color: vars.$scale.color.gray600,
});

export default PostHeader;
