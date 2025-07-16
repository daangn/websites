import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { FIRST_FOLD_STORY_HEIGHT, MAX_WIDTH, SIDE_MARGIN } from './constants';
import { media } from './media.css';

const DYNAMIC_PADDING_SIDE = `max(calc((100vw - ${MAX_WIDTH}px) / 2), ${SIDE_MARGIN}px)`;

// export const TITLE_TOP = 178;
export const TITLE_MAX_HEIGHT = 168;
export const CARD_BORDER_RADIUS = 30;
export const CARD_TEXT_BOTTOM_PADDING = 24;

export const container = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
});

export const pinSpacing = style({
  height: `calc(${FIRST_FOLD_STORY_HEIGHT}px + 100vh)`,
});

export const relative = style({
  position: 'relative',
});

export const outerTitleContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  paddingLeft: DYNAMIC_PADDING_SIDE,
  paddingRight: DYNAMIC_PADDING_SIDE,
  width: '100vw',
  paddingTop: '178px',
  boxSizing: 'border-box',
  '@media': {
    [media.medium]: {
      paddingTop: '128px',
    },
    [media.small]: {
      paddingTop: '118px',
      whiteSpace: 'pre-wrap',
    },
  },
});

export const outerTitle = style({
  fontSize: '64px',
  lineHeight: '84px',
  fontWeight: '700',
  fontFamily: '"Karrot Sans", sans-serif',
  wordBreak: 'keep-all',
  '@media': {
    [media.medium]: {
      fontSize: '52px',
      lineHeight: '74px',
      textAlign: 'center',
    },
    [media.small]: {
      fontSize: '36px',
      lineHeight: '52px',
      textAlign: 'center',
    },
  },
});

export const innerTitleContainer = style([outerTitleContainer]);
export const innerTitle = recipe({
  base: [
    outerTitle,
    {
      color: '#fff',
      width: '100%',
    },
  ],
  variants: {
    position: {
      absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
    hidden: {
      true: {
        opacity: 0,
      },
    },
    whiteSpace: {
      preWrap: {
        whiteSpace: 'pre-wrap',
      },
    },
  },
});

export const card = style({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,

  // gsap onload시 opacity: 1로 변경됨
  opacity: 0,
});

export const video = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
