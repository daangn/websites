import { type GatsbySSR } from 'gatsby';

export { wrapRootElement } from '@karrotmarket/gatsby-theme-prismic/src/wrapRootElement';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: 'en-UK',
  });
};
