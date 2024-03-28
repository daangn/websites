import { keyframes, styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';

type SpinnerProps = {
  className?: string;
};

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const dash = keyframes({
  '0%': {
    strokeDasharray: '1, 150',
    strokeDashoffset: '0',
  },
  '50%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-35',
  },
  '100%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-124',
  },
});

const Svg = styled('svg', {
  animation: `${rotate} 2s linear infinite`,
});

const Circle = styled('circle', {
  animation: `${dash} 1.5s ease-in-out infinite`,
});

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <Svg className={className} viewBox="0 0 50 50">
      <Circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Spinner;
