import * as React from 'react';
import { type PageProps } from 'gatsby';
import { globalCss } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import type { OverrideProps } from '@cometjs/core';
import '@seed-design/stylesheet/global.css';

import DefaultLayout from './DefaultLayout';
import JobPostLayout from './JobPostLayout';

type LayoutSwitchProps = OverrideProps<
  PageProps<unknown>,
  {
    children: React.ReactNode;
  }
>;

const globalStyles = globalCss({
  '*': {
    margin: 0,
  },
  ':root': {
    colorSchema: 'light dark',
  },
  body: {
    accentColor: vars.$semantic.color.primary,
    background: vars.$semantic.color.paperDefault,
    color: vars.$scale.color.gray900,
    fontFamily: '$system',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased',
  },
  'body:lang(ko)': {
    wordBreak: 'keep-all',
  },
  a: {
    color: vars.$scale.color.carrot500,
  },
  '@media (prefers-reduced-motion: no-preference)': {
    ':focus': {
      transition: 'outline-offset .25s ease',
      outlineOffset: '3px',
    },
  },
});

const LayoutSwitch: React.FC<LayoutSwitchProps> = ({ children, ...props }) => {
  globalStyles();

  if (/\/jobs\/\d+\/?/.test(props.location.pathname)) {
    return (
      <DefaultLayout {...props}>
        <JobPostLayout {...props}>{children}</JobPostLayout>
      </DefaultLayout>
    );
  }

  return <DefaultLayout {...props}>{children}</DefaultLayout>;
};

export default LayoutSwitch;
