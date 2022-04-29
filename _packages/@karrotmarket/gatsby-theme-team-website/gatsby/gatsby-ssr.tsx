import React from 'react';
import type { GatsbySSR } from "gatsby"

const PreferColorSchemeScript = () => {
  const colorSchemeScript = `
    (function() {
      document.documentElement.dataset.seed = '';
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      function apply() {
        document.documentElement.dataset.seedScaleColor = mq.matches ? 'dark' : 'light';
      }
      apply();
      mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
    })();
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: colorSchemeScript }} />;
};

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<PreferColorSchemeScript key="prefer-color-scheme" />]);
};