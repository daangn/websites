export { wrapRootElement } from '@karrotmarket/gatsby-theme-prismic/src/wrapRootElement';

export const onClientEntry = async () => {
  window.location.replace(
    `https://about.daangn.com${window.location.pathname}`
  );
};
