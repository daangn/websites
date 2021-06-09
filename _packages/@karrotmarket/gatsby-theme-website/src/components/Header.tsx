import * as React from "react";
import { graphql, Link } from "gatsby";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import NavigationMenu from "./header/NavigationMenu";
import { ReactComponent as LogoSvg } from "./header/logo.svg";

type HeaderProps = {
  className?: string;
  navigationData: GatsbyTypes.Header_navigationDataFragment;
  transparent?: boolean;
  placer?: boolean;
  sns?: boolean;
};

export const query = graphql`
  fragment Header_navigationData on PrismicSiteNavigationDataType {
    ...NavigationMenu_data
  }
`;

const Container = styled("header", {
  position: "fixed",
  top: 0,
  background: "#fff",
  width: "100%",
  height: rem(58),
  zIndex: 2,
  transition: "background 0.3s",

  "@sm": {
    height: rem(68),
  },

  variants: {
    transparent: {
      true: {
        background: "transparent",
      },
    },
  },
});

const Placer = styled("div", {
  height: rem(58),

  "@sm": {
    height: rem(68),
  },
});

const Content = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  paddingX: rem(24),

  "@sm": {
    contentArea: true,
  },
});

const HomeLink = styled(Link, {
  display: "inline-block",
  lineHeight: 0,
});

const Logo = styled(LogoSvg, {
  height: rem(26),

  "@sm": {
    height: rem(32),
  },
});

const Header: React.FC<HeaderProps> = ({
  className,
  navigationData,
  transparent,
  placer = true,
  sns,
}) => {
  return (
    <div className={className}>
      {placer && <Placer />}
      <Container transparent={transparent}>
        <Content>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
          <NavigationMenu
            controlId="navigation-menu"
            data={navigationData}
            sns={sns}
          />
        </Content>
      </Container>
    </div>
  );
};

export default Header;
