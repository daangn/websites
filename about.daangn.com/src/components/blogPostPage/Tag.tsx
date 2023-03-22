import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Tag = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled('div', {
  width: 'fit-content',
  padding: `${rem(8)} ${rem(16)}`,
  border: 'none',
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray100,
  fontSize: '$body2',
});

export default Tag;
