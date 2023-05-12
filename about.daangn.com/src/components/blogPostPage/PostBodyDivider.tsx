import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

import DotDivider from './DotDivider';

type PostBodyDividerProps = {
  slice: GatsbyTypes.PostDivider;
};

const PostBodyDivider: React.FC<PostBodyDividerProps> = ({ slice }) => {
  return (
    <Container>
      {slice.fullWidthLineDivider && <FullWidthLineDivider />}
      {slice.lineDivider && <LineDivider />}
      {slice.dotDivider && <DotDivider />}
    </Container>
  );
};

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  margin: `${rem(16)} 0`,
  textAlign: 'center',

  '@md': {
    margin: `${rem(36)} 0`,
  },
});

const FullWidthLineDivider = styled('hr', {
  width: '100%',
  border: 'none',
  borderTop: `1px solid ${vars.$scale.color.gray400}`,
});

const LineDivider = styled('hr', {
  width: '33%',
  border: 'none',
  borderTop: `2px solid ${vars.$scale.color.gray400}`,
});

export default PostBodyDivider;
