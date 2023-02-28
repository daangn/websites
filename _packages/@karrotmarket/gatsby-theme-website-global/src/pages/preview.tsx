import * as React from 'react';
import { type PageProps } from 'gatsby';
import { Robots } from 'gatsby-plugin-head-seo/src';
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews';
import { styled } from 'gatsby-theme-stitches/src/config';

const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const PreviewPage: React.FC<PageProps> = () => {
  return <Wrapper>preview loading</Wrapper>;
};

export default withPrismicPreviewResolver(PreviewPage);

export const Head: React.FC = () => {
  return <Robots none />;
};
