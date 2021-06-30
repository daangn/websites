import * as React from "react";
import { LogoJsonLd } from "gatsby-plugin-next-seo";
import logoUrl from '../assets/logo.png';

const JsonLd: React.FC = () => {
  return (
    <LogoJsonLd
      key="metadata"
      url="https://www.daangnpay.com"
      logo={new URL('https://daangnpay.com/') + logoUrl}
    />
  );
};

export default JsonLd;
