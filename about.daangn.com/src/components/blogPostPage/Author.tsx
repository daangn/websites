import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type AuthorProps = {
  data: GatsbyTypes.Author_postFragment;
};

export const query = graphql`
  fragment Author_post on Post {
    author {
      nickname
      image {
        publicURL
      }
      role
    }
  }
`;

const Author: React.FC<AuthorProps> = ({ data }) => {
  if (!data) {
    return null
  }
  
  return (
    <Container>
      {data.image?.publicURL && <AuthorImage src={data.image.publicURL} />}
      <AuthorInfo>
        <AuthorName>{data.nickname}</AuthorName>
        <p>{data.role}</p>
      </AuthorInfo>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: `${rem(56)} 0`,
});

const AuthorImage = styled('img', {
  width: rem(50),
  height: rem(50),
  borderRadius: '50%',
  border: `1px solid ${vars.$scale.color.gray100}`,
});

const AuthorInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: rem(12),
  fontSize: '$body2',
});

const AuthorName = styled('h3', {
  marginBottom: rem(4),
  fontWeight: 700,
});

export default Author;
