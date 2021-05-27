import * as React from 'react';
import type { PageProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Text = styled('div', {
  color: '$carrot500',
});

const IndexPage: React.FC<PageProps> = ({
}) => {
  return (
    <Text>Hello World!</Text>
  );
};

export default IndexPage;
