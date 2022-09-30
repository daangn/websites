import * as React from 'react';
import { type GatsbySSR } from 'gatsby';
import { type PluginOptions } from './types';

// FIXME: extract to a plugin
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

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setHeadComponents,
  setPreBodyComponents,
}, options) => {
  const pluginOptions = options as unknown as PluginOptions;

  setHtmlAttributes({
    lang: pluginOptions.locale,
    prefix: 'og: https://ogp.me/ns/website#',

    // @ts-ignore
    'data-seed': '',
  });

  setHeadComponents([
    <meta
      key="color-scheme"
      name="color-scheme"
      content="light dark"
    />,
  ]);

  setPreBodyComponents([
    <PreferColorSchemeScript key="prefer-color-scheme" />,
  ]);
};
