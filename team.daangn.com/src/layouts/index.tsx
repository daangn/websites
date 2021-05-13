import * as React from 'react';
import type { PageProps } from 'gatsby';
import { global } from 'gatsby-theme-stitches/src/stitches.config';
import { useLocation } from '@reach/router';
import type { OverrideProps } from '@cometjs/core';

import DefaultLayout from './DefaultLayout';
import JobPostLayout from './JobPostLayout';

type LayoutSwitchProps = OverrideProps<
  PageProps<any>,
  {
    children: React.ReactNode,
  }
>;

const globalStyles = global({
  '*': {
    margin: 0,
    fontFamily: 'inherit',
  },
  'body': {
    color: '$gray900',
    fontFamily: '$body',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased'
  },
  'body:lang(ko)': {
    wordBreak: 'keep-all',
  },
  'a': {
    color: '$carrot500',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    ':focus': {
      transition: 'outline-offset .25s ease',
      outlineOffset: '3px',
    },
  },
});

const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
  children,
  ...props
}) => {
  globalStyles();

  const { pathname: path } = useLocation();

  if (/dev-.*/.test(path)) {
    return <>{children}</>;
  }

  if (/\/jobs\/.+/.test(path)) {
    return (
      <DefaultLayout {...props}>
        <JobPostLayout {...props}>
          {children}
        </JobPostLayout>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout {...props}>
      {children}
    </DefaultLayout>
  );
}

export default LayoutSwitch;
