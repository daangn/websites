import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

type AuthorProps = {
  data: GatsbyTypes.Author_dataFragment;
};

export const query = graphql`
  fragment Author_blogPost on BlogPost {
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
});

const AuthorInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: rem(12),
  fontSize: '$body2',
});

const AuthorName = styled('h3', {
  marginBottom: rem(4),
  fontWeight: 600,
});

export default Author;
