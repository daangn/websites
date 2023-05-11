import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Tag = ({ children }: { children: string }) => {
  return <Container>#{children}</Container>;
};

const Container = styled('div', {
  width: 'fit-content',
  border: 'none',
  borderRadius: rem(40),
  color: vars.$scale.color.gray600,
  fontSize: '$body2',

  /*
    Temporarily Disabled Styles
  */
  // padding: `${rem(8)} ${rem(16)}`,
  // backgroundColor: vars.$scale.color.gray100,
});

export default Tag;
