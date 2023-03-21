import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const FeatureGrid = styled('div', {
  $$maxCols: 2,
  $$maxColsPower: 4,

  display: 'grid',
  gap: rem(60),

  '@md': {
    rowGap: rem(80),
    columnGap: `calc(${rem(240 * 4)} / $$maxColsPower)`,
    gridTemplateColumns: 'repeat($$maxCols, 1fr)',
  },
});

export default FeatureGrid;
