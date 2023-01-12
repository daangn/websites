import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

type CategoryProps = {
  active: boolean,
  children: React.ReactNode,
};

const Category: React.FC<CategoryProps> = ({ active, children }) => {
  return (
    <Container active={active}>
      {children}
    </Container>
  );
};

const Container = styled("div", {
  padding: `${rem(8)} ${rem(18)}`,
  marginRight: rem(10),
  border: `1px solid ${vars.$scale.color.gray600}`,
  borderRadius: rem(40),
  lineHeight: rem(14),
  fontSize: rem(14),
  cursor: "pointer",
  variants: {
    active: {
      true: {
        backgroundColor: vars.$scale.color.gray900,
        color: vars.$scale.color.gray00,
        borderColor: vars.$scale.color.gray900,
      },
      false: {
        backgroundColor: vars.$scale.color.gray00,
        '&:hover': {
          backgroundColor: vars.$scale.color.gray900,
          color: vars.$scale.color.gray00,
          borderColor: vars.$scale.color.gray900,
        },
      },
    },
  },
});

export default Category;
