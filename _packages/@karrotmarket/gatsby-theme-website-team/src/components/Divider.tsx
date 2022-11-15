import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

const Divider = styled('hr', {
  width: '100%',
  border: 'none',
  borderTop: `1px solid ${vars.$scale.color.gray400}`,
});

export default Divider;
