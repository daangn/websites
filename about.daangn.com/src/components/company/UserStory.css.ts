import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { MAX_WIDTH } from './constants';
import { media } from './media.css';

export const root = style({
  margin: '96px 0',
});

export const container = style({
  width: '100%',
  maxWidth: `${MAX_WIDTH}px`,
  height: '100vh',
  maxHeight: '680px',
  padding: '24px 0',
  display: 'flex',
  position: 'relative',
  gap: '24px',
  justifyContent: 'flex-end',
  boxSizing: 'border-box',
  '@media': {
    [media.medium]: {
      display: 'block',
      height: 'auto',
      maxHeight: 'none',
    },
  },
});

export const left = style({
  flex: 1,
  position: 'relative',
});

export const titles = style({
  fontFamily: 'Karrot Sans',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  position: 'absolute',
  left: 0,
  width: '100%',
  '@media': {
    [media.medium]: {
      gap: '4px',
      position: 'relative',
      top: 0,
    },
  },
});

export const subtitle = style({
  color: '#1A1C20',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '28px',
  letterSpacing: '-0.6px',
});

export const title = style({
  color: '#1A1C20',
  fontSize: '42px',
  fontWeight: '700',
  lineHeight: '58px',
  letterSpacing: '-0.6px',
  wordBreak: 'keep-all',
  '@media': {
    [media.small]: {
      fontSize: '28px',
      lineHeight: '42px',
    },
  },
});

export const centerText = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    gap: '12px',
    position: 'absolute',
    height: '100%',
    left: 0,
    opacity: 0,
    transform: 'translateY(48px)',
    width: '100%',
    maxWidth: '420px',
  },
  variants: {
    position: {
      first: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
});

export const centerTextTitle = style({
  color: '#1A1C20',
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '-0.6px',
  fontFamily: 'Karrot Sans',
});

export const centerTextDescription = style({
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '28px',
  letterSpacing: '-0.6px',
  wordBreak: 'keep-all',
});

export const videos = style({
  width: '570px',
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  '@media': {
    [media.medium]: {
      display: 'none',
    },
  },
});

export const videoContainer = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translateY(100%)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  },
  variants: {
    position: {
      first: {
        transform: 'translateY(0)',
      },
    },
  },
});

export const video = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const imageBottom = recipe({
  base: {
    display: 'none',
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: '32px',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
  },
  variants: {
    position: {
      first: {
        display: 'flex',
      },
    },
  },
});

export const imageLeftBadge = style({
  display: 'inline-flex',
  padding: '10px 20px',
  alignItems: 'center',
  gap: '6px',
  borderRadius: '99.65px',
  background: 'rgba(0, 0, 0, 0.30)',
  backdropFilter: 'blur(10px)',
  color: '#FFF',
  fontFamily: 'Karrot Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '26px',
  letterSpacing: '-0.6px',
  textDecoration: 'none',
});

export const imageRightButton = style([
  imageLeftBadge,
  {
    left: 'auto',
    right: '32px',
    cursor: 'pointer',
    transition: '200ms',
    ':hover': {
      background: '#1A1C20',
    },
    ':active': {
      background: 'rgba(26, 28, 32, 0.80)',
      transition: '0ms',
    },
  },
]);

export const userStoryCard = style({});

export const userStoryCardVideoContainer = style({
  width: '100%',
  position: 'relative',
  boxSizing: 'border-box',
  paddingBottom: '100%',
  '@media': {
    [media.small]: {
      height: '580px',
      paddingBottom: '0',
    },
  },
});

export const userStoryCardVideo = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const userStoryCardContent = style({
  padding: '32px 24px 80px',
  '@media': {
    [media.small]: {
      padding: '24px 24px 60px',
    },
  },
});

export const userStoryCardTitle = style({
  color: '#1A1C20',
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '-0.6px',
  marginBottom: '12px',

  '@media': {
    [media.small]: {
      fontSize: '20px',
      lineHeight: '30px',
      marginBottom: '8px',
    },
  },
});

export const userStoryCardDescription = style({
  color: '#1A1C20',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '-0.6px',
  marginBottom: '28px',
  '@media': {
    [media.small]: {
      fontSize: '14px',
      lineHeight: '24px',
      marginBottom: '26px',
    },
  },
});
