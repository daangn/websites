import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { MAX_WIDTH } from './constants';
import { media } from './media.css';

export const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: `${MAX_WIDTH}px`,
  padding: '60px 0',
  flexDirection: 'column',
});

export const title = style({
  color: '#1A1C20',
  fontFamily: '"Karrot Sans", sans-serif',
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

export const cards = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '30px',
  '@media': {
    [media.medium]: {
      flexDirection: 'column',
    },
  },
});

export const cardRatio = style({
  position: 'relative',
  flex: 1,
  height: '300px',
  '@media': {
    [media.medium]: {
      flex: 'auto',
    },
    [media.small]: {
      paddingBottom: '100%',
      height: 0,
    },
  },
});

export const card = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  padding: '40px',
  border: '1px solid #EAEBEE',
  borderRadius: '16px',
  boxSizing: 'border-box',
  '@media': {
    [media.small]: {
      padding: '24px',
    },
  },
});

export const cardTitle = style({
  fontFamily: '"Karrot Sans", sans-serif',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '40px',
  whiteSpace: 'pre-wrap',
  '@media': {
    [media.small]: {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
});

export const cardButton = style({
  position: 'absolute',
  bottom: '40px',
  left: '40px',
  '@media': {
    [media.small]: {
      position: 'relative',
      bottom: 'auto',
      left: 'auto',
      marginTop: '24px',
    },
  },
});

export const cardIllustration = style({
  position: 'absolute',
  bottom: '40px',
  right: '40px',
  '@media': {
    [media.small]: {
      bottom: '24px',
      right: '24px',
    },
  },
});

export const cardIllustrationImage = style({
  width: '120px',
  height: '120px',
  objectFit: 'cover',
});
