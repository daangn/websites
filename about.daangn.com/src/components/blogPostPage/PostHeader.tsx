import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type PostHeaderProps = {
  postHeader: GatsbyTypes.PostHeader_dataFragment;
};

export const query = graphql`
  fragment PostHeader_data on Post {
    title
    publishedAt
  }
`;

const PostHeader: React.FC<PostHeaderProps> = ({ postHeader }) => {
  return (
    <Header>
      <Title>{postHeader.title}</Title>
      <Wrapper>{postHeader.publishedAt}</Wrapper>
    </Header>
  );
};

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: rem(33),

  '@sm': {
    marginBottom: rem(66),
  },
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
