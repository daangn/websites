import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { MAX_WIDTH } from './constants';
import { media } from './media.css';

export const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: `${MAX_WIDTH}px`,
  padding: '60px 0',
  '@media': {
    [media.medium]: {
      flexDirection: 'column',
    },
  },
});

export const title = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '42px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '58px',
  letterSpacing: '-0.6px',
  whiteSpace: 'pre-wrap',
  flex: 1,
  marginBottom: '40px',
  '@media': {
    [media.small]: {
      fontSize: '28px',
      lineHeight: '42px',
      marginBottom: '24px',
    },
  },
});

export const box = style({
  width: '570px',
  backgroundColor: '#F2F3F6',
  height: '368px',
  borderRadius: '16px',
  overflow: 'hidden',
  '@media': {
    [media.medium]: {
      width: '100%',
    },
    [media.small]: {
      padding: '40px 0',
      height: 'auto',
    },
  },
});

export const carouselContainer = style({
  display: 'flex',
  height: '100%',
  '@media': {
    [media.small]: {
      flexDirection: 'column',
    },
  },
});

export const grid = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
  flex: '0 0 100%',
  height: '100%',
});

export const gridRow = recipe({
  base: {
    display: 'flex',
    gap: '40px',
    '@media': {
      [media.small]: {
        flexDirection: 'column',
      },
    },
  },
  variants: {
    columnNumber: {
      two: ['two', {}],
      three: ['three', {}],
    },
  },
});

export const gridItem = style({
  width: '200px',
  height: '80px',
  position: 'relative',
  selectors: {
    '.three > &': {
      width: '120px',
    },
  },
});

export const gridItemImage = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'inline-block',
  width: '200px',
  height: '80px',
  backgroundSize: 'contain',
  backgroundPosition: '50% 50%',
});
