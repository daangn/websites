import { getCdnImage } from '@karrotmarket/gatsby-theme-prismic/image-utils';
import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type AuthorProps = {
  author: GatsbyTypes.Author_authorFragment;
};

export const query = graphql`
  fragment Author_author on MemberProfile {
    nickname
    image {
      alt
      gatsbyImageData(width: 50)
    }
    profileLink
    role
  }
`;

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Container
      css={{ cursor: author.profileLink ? 'pointer' : 'auto' }}
      onClick={() => {
        if (author.profileLink) {
          window.open(author.profileLink, '_blank');
        }
      }}
    >
      {author.image && (
        <AuthorImage 
          image={getCdnImage(author.image.gatsbyImageData)}
          alt={author.image.alt || ''} 
        />
      )}
      <AuthorInfo>
        <AuthorName>{author.nickname}</AuthorName>
        <p>{author.role}</p>
      </AuthorInfo>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: `${rem(56)} 0`,
});

const AuthorImage = styled(GatsbyImage, {
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
