import { type GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: 'ja-JP',
  });

  setHeadComponents([
    // FIXME: extract to a plugin
    <meta
      key="color-scheme"
      name="color-scheme"
      content="light dark"
    />,
  ]);
};
