import React from 'react';
import type { GatsbySSR } from "gatsby"

const PreferColorSchemeScript = () => {
  const colorSchemeScript = `
    (function(w, d) {
      d.documentElement.dataset.seed = '';
      var mq = w.matchMedia('(prefers-color-scheme: dark)');
      function apply() {
        d.documentElement.dataset.seedScaleColor = mq.matches ? 'dark' : 'light';
      }
      apply();
      mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
    })(window, document);
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: colorSchemeScript }} />;
};

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<PreferColorSchemeScript key="prefer-color-scheme" />]);
};
