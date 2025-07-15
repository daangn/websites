import { style } from '@vanilla-extract/css';
import { MAX_WIDTH } from './constants';
import { media } from './media.css';

export const container = style({
  width: '100%',
  maxWidth: `${MAX_WIDTH}px`,
  padding: '60px 0 0',
});

export const heading = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '40px',
  '@media': {
    [media.medium]: {
      alignItems: 'flex-end',
    },
    [media.small]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '24px',
    },
  },
});

export const title = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '52px',
  letterSpacing: '-0.6px',
  '@media': {
    [media.medium]: {
      whiteSpace: 'pre-wrap',
    },
    [media.small]: {
      fontSize: '28px',
      lineHeight: '42px',
    },
  },
});

export const right = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
});

export const cards = style({
  overflow: 'hidden',
});

export const cardsContainer = style({
  display: 'flex',
});

export const newsCardGroup = style({
  flex: '0 0 100%',
  minWidth: 0,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '16px',
  marginRight: '16px',
  '@media': {
    [media.medium]: {
      gridTemplateColumns: '1fr',
      gap: '30px',
    },
  },
});

export const newsCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  cursor: 'pointer',
  textDecoration: 'none',
  '@media': {
    [media.medium]: {
      flexDirection: 'row',
      gap: '20px',
    },
    [media.small]: {
      flexDirection: 'column',
      gap: '16px',
    },
  },
});

export const newsCardImageContainer = style({
  width: '100%',
  position: 'relative',
  '@media': {
    [media.medium]: {
      width: '300px',
    },
    [media.small]: {
      width: '100%',
    },
  },
});

export const newsCardImageRatio = style({
  paddingBottom: '56.25%',
  borderRadius: '16px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
});

export const newsCardImage = style({
  // biome-ignore lint/suspicious/noExplicitAny: important
  position: 'absolute !important' as any,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const newsCardTitles = style({
  flex: 1,
});

export const newsCardTitle = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '28px',
  letterSpacing: '-0.06px',
  marginBottom: '4px',
  wordBreak: 'keep-all',
});

export const newsCardDate = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '20px',
});
