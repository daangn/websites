import { style } from '@vanilla-extract/css';
import { MAX_WIDTH } from './constants';
import { media } from './media.css';

export const container = style({
  gap: '120px',
  padding: '60px 0',
  width: '100%',
});

export const title = style({
  width: '100%',
  maxWidth: `${MAX_WIDTH}px`,
  color: '#1A1C20',
  fontFamily: 'Karrot Sans',
  fontSize: '42px',
  fontWeight: '700',
  lineHeight: '58px',
  letterSpacing: '-0.6px',
  whiteSpace: 'pre-wrap',
  marginBottom: '40px',
  '@media': {
    [media.small]: {
      fontSize: '28px',
      lineHeight: '42px',
      marginBottom: '24px',
    },
  },
});

export const videoContainer = style({
  height: '100vh',
  maxHeight: '700px',
  position: 'relative',
});

export const video = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const buttonContainer = style({
  position: 'absolute',
  bottom: '60px',
  left: '50%',
  transform: 'translateX(-50%)',
  opacity: 0,
  transition: 'opacity 0.25s',
});
