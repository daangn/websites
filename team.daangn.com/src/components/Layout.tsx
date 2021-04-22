import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { global } from 'gatsby-theme-stitches/src/stitches.config';

import Header from './layout/Header';

const globalStyles = global({
  '*': {
    margin: 0,
    fontFamily: 'inherit',
  },
  'body': {
    fontFamily: 'sans-serif',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased'
  },
  'body:lang(ko)': {
    wordBreak: 'keep-all',
  },
});

const Layout: React.FC = ({
  children,
}) => {
  globalStyles();

  const data = useStaticQuery<GatsbyTypes.LayoutStaticQuery>(graphql`
    query LayoutStatic {
      siteNavigation {
        ...Header_navigation
      }
    }
  `);

  if (!data.siteNavigation) {
    throw new Error('SiteNavigation 노드가 없습니다.');
  }

  return (
    <>
      <Header navigation={data.siteNavigation} />
      {children}
    </>
  );
}

export default Layout;
