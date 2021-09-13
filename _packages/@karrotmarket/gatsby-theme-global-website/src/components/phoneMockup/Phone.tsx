import * as React from "react";
import { em, rem } from "polished";

import {
  MediaTypeMap,
  styled,
} from "../../gatsby-theme-stitches/config";

const BackIcon = () => (
  <svg
    width={em(26)}
    height={em(25)}
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.3111 5.73136C12.6301 5.41239 12.6301 4.89524 12.3111 4.57626C11.9922 4.25729 11.475 4.25729 11.156 4.57626L4.00925 11.7231C3.69028 12.042 3.69028 12.5592 4.00925 12.8782L11.156 20.0249C11.475 20.3439 11.9922 20.3439 12.3111 20.0249C12.6301 19.706 12.6301 19.1888 12.3111 18.8699L6.55867 13.1174H20.9223C21.3734 13.1174 21.7391 12.7517 21.7391 12.3006C21.7391 11.8495 21.3734 11.4838 20.9223 11.4838H6.55867L12.3111 5.73136Z"
      fill="#212124"
    />
  </svg>
);

interface FontSize {
  fontSize: string;
}

interface PhoneProps {
  frameColor?: "orange" | "green";
  header?: any;
  headerSection?: any;
  fontSize?: MediaTypeMap<FontSize>;
  height?: number;
  width?: number;
  containerWidth?: number;
  align?: "left" | "center";
}

const Phone: React.FC<PhoneProps> = ({
  frameColor,
  header,
  headerSection,
  fontSize,
  height,
  width,
  containerWidth,
  align,
  children,
}) => {
  return (
    <Wrapper
      css={{
        height: em(height || 500),
        width: em(containerWidth || 500),
        ...fontSize,
      }}
    >
      <PhoneFrame
        frameColor={frameColor}
        css={{
          height: em(height || 500),
          width: em(width || 376),
          margin: align !== "left" ? "0 auto" : 0,
        }}
      >
        {headerSection ? (
          headerSection
        ) : (
          <>
            <TopSection></TopSection>
            <HeaderSection>
              <BackIcon></BackIcon>
              <Header>{header}</Header>
            </HeaderSection>
          </>
        )}

        <Screen>{children}</Screen>
      </PhoneFrame>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  width: em(500),
  overflow: "hidden",
  "*": {
    fontFamily: "$system",
  },
  fontSize: rem(10),
  "@md": {
    fontSize: rem(16),
  },
});

const PhoneFrame = styled("div", {
  width: em(376),
  overflow: "hidden",
  borderRadius: `${em(54)} ${em(54)} 0 0`,
  position: "relative",
  background: "white",
  variants: {
    frameColor: {
      green: {
        border: `${em(8)} solid $green500`,
      },
      orange: {
        border: `${em(8)}  solid $carrot600`,
      },
    },
  },
});

const TopSection = styled("div", {
  height: em(10),
  zIndex: 1,
  width: "100%",
  position: "relative",
});

const HeaderSection = styled("div", {
  height: em(54),
  borderBottom: `${em(1)} solid $gray200`,
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: `0 ${em(20)}`,
  zIndex: 1,
  background: "white",
  borderTopLeftRadius: em(54),
  borderTopRightRadius: em(54),
});

const Header = styled("div", {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
});

const Screen = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

export default Phone;
