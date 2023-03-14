import { vars } from '@seed-design/design-token';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type CategoryProps = {
  active: boolean;
  children?: React.ReactNode;
  category: GatsbyTypes.Category_dataFragment;
  pageContext: string;
};

export const query = graphql`
  fragment Category_category on PostCategory {
    uid
    name
  }
`;

const Category: React.FC<CategoryProps> = ({ category, pageContext }) => {
  const handleCategoryClick = (e) => {
    if (e.target.id === '*') {
      navigate('/blog/');
      return;
    }

    navigate(`/blog/category/${e.target.id}/`);
  };

  return (
    <Container
      id={category.uid}
      onClick={handleCategoryClick}
      active={pageContext === category.uid}
    >
      {category.name}
    </Container>
  );
};

const Container = styled('div', {
  padding: `${rem(8)} ${rem(16)}`,
  marginRight: rem(4),
  border: 'none',
  borderRadius: rem(40),
  lineHeight: rem(14),
  fontSize: '$caption3',
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
        color: vars.$scale.color.gray700,
        '&:hover': {
          backgroundColor: vars.$scale.color.gray900,
          color: vars.$scale.color.gray00,
          fontWeight: 'bold',
        },
      },
    },
  },

  '@media (min-width: 880px)': {
    marginRight: rem(10),
    padding: `${rem(10)} ${rem(20)}`,
    fontSize: '$body2',
  },
});

export default Category;
