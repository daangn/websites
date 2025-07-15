import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'inline-flex',
  padding: '10px 20px',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '999px',
  backgroundColor: '#1A1C20',
  color: '#fff',
  cursor: 'pointer',
  transition: '200ms',
  fontSize: '16px',
  fontWeight: '400',
  height: '50px',
  border: 0,
  boxSizing: 'border-box',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: '#434956',
  },
  ':active': {
    backgroundColor: '#555D6D',
    transition: '0ms',
  },
});
