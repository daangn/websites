import * as React from 'react';
import type { PageProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Box = styled('div', {
  color: '$carrot500',
  backgroundColor: '$white',
});

const IndexPage: React.FC<PageProps> = ({
}) => {
  return (
    <Box>Hello, 당근페이!</Box>
  );
};

export default IndexPage;
