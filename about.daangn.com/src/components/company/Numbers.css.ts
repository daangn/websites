import { style } from '@vanilla-extract/css';
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

export const titles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  marginBottom: '40px',
  '@media': {
    [media.small]: {
      gap: '8px',
    },
  },
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
  '@media': {
    [media.small]: {
      fontSize: '28px',
      lineHeight: '42px',
    },
  },
});

export const subtitle = style({
  color: '#ADB1BA',
  fontFamily: '"Karrot Sans", sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '-0.6px',
});

export const embla = style({
  width: '570px',
  maskImage:
    'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 5%, rgba(0, 0, 0, 1.0) 95%, transparent 100%)',
  overflow: 'hidden',
  '@media': {
    [media.medium]: {
      maskImage: 'none',
      width: '100%',
    },
  },
});

export const emblaContainer = style({
  display: 'flex',
  '@media': {
    [media.medium]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
    },
    [media.small]: {
      gridTemplateColumns: '1fr',
      gap: '0',
      borderTop: '1px solid #EAEBEE',
    },
  },
});

export const cardContainer = style({
  width: '374px',
  flex: '0 0 374px',
  minWidth: 0,
  marginRight: '30px',
  '@media': {
    [media.medium]: {
      width: 'auto',
      marginRight: '0',
    },
  },
});

export const card = style({
  paddingBottom: '100%',
  position: 'relative',
  borderRadius: '16px',
  '@media': {
    [media.medium]: {
      paddingBottom: '0',
      height: '170px',
    },
    [media.small]: {
      backgroundColor: 'transparent !important',
      borderBottom: '1px solid #EAEBEE',
      borderRadius: '0',
      height: '170px',
    },
  },
});

export const cardTitle = style({
  position: 'absolute',
  top: '36px',
  left: '36px',
  color: '#1A1C20',
  fontFamily: '"Karrot Sans", sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '28px',
  letterSpacing: '-0.6px',
  '@media': {
    [media.medium]: {
      top: '24px',
      left: '24px',
    },
    [media.small]: {
      fontSize: '16px',
      lineHeight: '24px',
      bottom: '36px',
      left: '0px',
      top: 'auto',
      fontWeight: '400',
    },
  },
});

export const cardNumber = style({
  position: 'absolute',
  bottom: '36px',
  left: '36px',
  color: '#1A1C20',
  fontFamily: '"Karrot Sans", sans-serif',
  fontSize: '60px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '100px',
  letterSpacing: '-0.6px',
  '@media': {
    [media.medium]: {
      fontSize: '47px',
      lineHeight: '74px',
      left: '24px',
      bottom: '24px',
    },
    [media.small]: {
      fontSize: '42px',
      lineHeight: '68px',
      left: '0px',
      top: '36px',
      bottom: 'auto',
    },
  },
});

export const cardNumberOverlay = style({
  position: 'absolute',
  top: '0',
  right: '0',
  width: '100%',
  height: '100%',
  textAlign: 'right',
});

export const cardNumberPlaceholder = style({
  opacity: 0,
});
