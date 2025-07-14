import { style } from '@vanilla-extract/css';
import { MAX_WIDTH } from './constants';
import { media } from './media.css';

export const container = style({
  width: '100%',
  maxWidth: `${MAX_WIDTH}px`,
  padding: '60px 0',
});

export const subtitle = style({
  color: '#1A1C20',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '28px',
  letterSpacing: '-0.6px',
  marginBottom: '8px',
  fontFamily: 'Karrot Sans',
  '@media': {
    [media.small]: {
      marginBottom: '4px',
    },
  },
});

export const grid = style({
  display: 'flex',
  width: '100%',
  '@media': {
    [media.medium]: {
      flexDirection: 'column',
    },
  },
});

export const title = style({
  color: '#1A1C20',
  fontSize: '42px',
  fontWeight: '700',
  lineHeight: '58px',
  letterSpacing: '-0.6px',
  fontFamily: 'Karrot Sans',
  whiteSpace: 'pre-wrap',
  flex: 1,
  marginBottom: '48px',
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
  flexDirection: 'column',
  gap: '20px',
});

const CARD_TRANSITION = 200;

export const card = style({
  boxShadow: 'inset 0 0 0 1px #EAEBEE',
  borderRadius: '16px',
  padding: '32px',
  display: 'flex',
  gap: '24px',
  maxWidth: '570px',
  transition: `box-shadow ${CARD_TRANSITION}ms`,
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover': {
    boxShadow: 'inset 0 0 0 2px #1A1C20',
  },
  '@media': {
    [media.medium]: {
      maxWidth: 'none',
      padding: '28px',
    },
    [media.small]: {
      flexDirection: 'column-reverse',
      padding: '24px',
      gap: '53px',
    },
  },
});

export const cardImage = style({
  width: '90px',
  height: '90px',
  borderRadius: '16px',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  overflow: 'hidden',
});

export const cardTitles = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const cardTitle = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '28px',
  letterSpacing: '-0.6px',
  wordBreak: 'keep-all',
});

export const cardCaption = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '-0.6px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const cardCaptionIcon = style({
  opacity: 0,
  transition: `${CARD_TRANSITION}ms`,
  transform: 'translateX(-4px)',
  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
});
