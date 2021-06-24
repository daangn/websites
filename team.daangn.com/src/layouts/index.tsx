import * as React from 'react';
import type { PageProps } from 'gatsby';
import useDarkMode from 'use-dark-mode';
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
  ':root': {
    colorSchema: 'light dark',
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
  // @See https://github.com/angeloashmore/gatsby-source-prismic/issues/397#issuecomment-867133145
  '#prismic-toolbar-v2': {
    visibility: 'hidden',
  },
});

const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
  children,
  ...props
}) => {
  useDarkMode(false, {
    classNameLight: 'light-theme',
    classNameDark: 'dark-theme',
  });

  globalStyles();

  const { pathname: path } = useLocation();

  if (path === '/') {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  if (/\/jobs\/faq\/?$/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  if (/\/jobs\/\d+\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        <JobPostLayout {...props}>
          {children}
        </JobPostLayout>
      </DefaultLayout>
    );
  }

  if (/\/jobs\/.+\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  if (/\/(jobs|preview|culture)\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  return <>{children}</>;
}

export default LayoutSwitch;
