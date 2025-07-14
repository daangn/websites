import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { GNB_HEIGHT, MAX_WIDTH } from './constants';
import { media } from './media.css';

export const root = style({
  padding: `calc(${GNB_HEIGHT}px + 80px) 0 200px`,
  display: 'flex',
  flexDirection: 'column',
  gap: '92px',
  '@media': {
    [media.medium]: {
      padding: `calc(${GNB_HEIGHT}px + 60px) 0 60px`,
    },
    [media.small]: {
      padding: `calc(${GNB_HEIGHT}px + 50px) 0 50px`,
    },
  },
});

export const container = style({
  width: '100%',
  maxWidth: MAX_WIDTH,
});

export const title = style({
  color: '#000',
  fontFamily: 'Karrot Sans',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '44px',
  letterSpacing: '-0.6px',
  wordBreak: 'keep-all',
  '@media': {
    [media.medium]: {
      fontSize: '24px',
      lineHeight: '38px',
    },
    [media.small]: {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
});

export const titleFrag = style({
  color: '#D1D3D8',
});

export const marquee = style({
  height: '400px',
  display: 'flex',
});

export const marqueeInner = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',
  alignItems: 'center',
});

export const card = recipe({
  base: {
    borderRadius: '16px',
    overflow: 'hidden',
  },
  variants: {
    type: {
      horizontal: {
        width: '400px',
        height: '248px',
      },
      vertical: {
        width: '275px',
        height: '400px',
      },
      square: {
        width: '315px',
        height: '315px',
      },
    },
  },
});
