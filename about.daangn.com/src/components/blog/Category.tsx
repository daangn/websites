import { vars } from '@seed-design/design-token';
import { Link, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type CategoryProps = {
  active: boolean;
  children?: React.ReactNode;
  category: GatsbyTypes.Category_categoryFragment;
  pageContext: string;
};

export const query = graphql`
  fragment Category_category on PostCategory {
    uid
    name
  }
`;

const Category: React.FC<CategoryProps> = ({ category, pageContext }) => {
  const path = category.uid === '*' ? '/blog/' : `/blog/category/${category.uid}`;
  const href = `${path}#_filter`;
  return (
    <Container id={category.uid} to={href} active={pageContext === category.uid}>
      {category.name}
    </Container>
  );
};

const Container = styled(Link, {
  padding: `${rem(12)} ${rem(18)}`,
  marginRight: rem(8),
  border: 'none',
  borderRadius: rem(40),
  lineHeight: rem(14),
  fontSize: '$body3',
  cursor: 'pointer',
  textDecoration: 'none',
  variants: {
    active: {
      true: {
        backgroundColor: vars.$scale.color.gray900,
        color: vars.$scale.color.gray00,
        fontWeight: 'bold',
      },
      false: {
        backgroundColor: vars.$scale.color.gray100,
        color: vars.$scale.color.gray900,
        '&:hover': {
          backgroundColor: vars.$scale.color.gray300,
          color: vars.$scale.color.gray700,
        },
      },
    },
  },

  '@media (min-width: 880px)': {
    marginRight: rem(10),
    padding: `${rem(14)} ${rem(20)}`,
    fontSize: '$subtitle4',
  },
});

export default Category;
