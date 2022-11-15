import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import { ReactComponent } from './illustration.svg';

const Illustration = styled(ReactComponent, {
  maxWidth: rem(500),
});

export default Illustration;
