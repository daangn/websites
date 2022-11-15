import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import { ReactComponent } from './illustration.svg';

const Illustration = styled(ReactComponent, {
  margin: '0 auto',
  width: rem(150),
});

export default Illustration;
