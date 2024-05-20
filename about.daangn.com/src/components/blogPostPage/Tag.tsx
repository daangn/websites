import { vars } from '@seed-design/design-token';
import { Link as _Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Tag = ({ children }: { children: string }) => {
  return <Link to={`/blog/?q=${children}#_filter`}>{children}</Link>;
};

const Link = styled(_Link, {
  width: 'fit-content',
  border: 'none',
  borderRadius: rem(40),
  color: vars.$scale.color.gray600,
  fontSize: '$body2',

  '&::before': {
    content: '#',
  },

  /*
    Temporarily Disabled Styles
  */
  // padding: `${rem(8)} ${rem(16)}`,
  // backgroundColor: vars.$scale.color.gray100,
});

export default Tag;
