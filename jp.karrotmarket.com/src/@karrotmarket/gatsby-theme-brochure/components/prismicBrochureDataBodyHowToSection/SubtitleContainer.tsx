import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

const SubtitleContainer: React.FC = () => (
  <Container>
    <h5>カンタン</h5>
  </Container>
);

export const Container = styled('span', {
  display: 'inline-block',
  position: 'relative',
  fontWeight: 'bold',
  fontSize: rem(30),
  padding: '0 .75rem',
  marginBottom: rem(10),
  '::before': {
    display: 'block',
    content: '',
    width: '4px',
    height: '90%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: vars.$scale.color.carrot700,
    borderRadius: '2px',
    transform: 'rotate(-15deg)',
  },
  '::after': {
    display: 'block',
    content: '',
    width: '4px',
    height: '90%',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: vars.$scale.color.carrot700,
    borderRadius: '2px',
    transform: 'rotate(15deg)',
  },
});

export default SubtitleContainer;
