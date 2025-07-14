import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  padding: '7px',
  gap: '8px',
  borderRadius: '999px',
  border: '2px solid #EAEBEE',
});

export const button = style({
  // padding: '7px',
  borderRadius: '999px',
  transition: 'background-color 0.2s, color 0.2s',
  border: 0,
  display: 'flex',
  width: '32px',
  height: '32px',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  ':hover': {
    backgroundColor: '#EAEBEE',
  },
  ':active': {
    backgroundColor: '#1A1C20',
    transition: 'background-color 0s, color 0s',
    color: '#fff',
  },
});
