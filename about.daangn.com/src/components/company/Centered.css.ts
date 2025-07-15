import { style } from '@vanilla-extract/css';
import { SIDE_MARGIN } from './constants';

export const container = style({
  margin: '0 auto',
  padding: `0 ${SIDE_MARGIN}px`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
