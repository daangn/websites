import { type GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: 'ko',
  });

  setHeadComponents([
    <meta
      key="formmat-detection-telephone"
      name="format-detection"
      content="telephone=no"
    />,
    <meta
      key="formmat-detection-date"
      name="format-detection"
      content="date=no"
    />,
    <meta
      key="format-detection-address"
      name="format-detection"
      content="address=no"
    />,
    <meta
      key="format-detection-email"
      name="format-detection"
      content="email=no"
    />,

    <script
      key="appsflyer-install"
      dangerouslySetInnerHTML={{
        __html: `
          !function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){(t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com?"+(c.length0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "64959823-d2af-41ee-8ac1-5733d0000b6c"}})
AF('banners', 'showBanner')
        `
      }}
    />,
  ]);
};
