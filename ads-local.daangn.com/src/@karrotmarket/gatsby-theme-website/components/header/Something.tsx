import * as React from "react";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

import { ReactComponent as IconCall } from "~/image/icon_call.svg";
import { ReactComponent as Divider } from "~/image/divider.svg";

const QuestionInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  typography: "$body2",
  fontWeight: "bold",

  p: { marginLeft: 8 },
  mark: {
    backgroundColor: "transparent",
    color: vars.$semantic.color.primary,
    display: "none",
    "@md": {
      display: "inline",
    },
  },
});

const DisplayAdsGuide = styled('div', {
  display: 'flex',

  cursor: "pointer",

  "@md": {
    marginRight: rem(56),
  },
  span: {
    display: 'none',
    "@md": {
      display: 'inline-block'
    }
  }

})

const StyledDivider  = styled(Divider, {
  marginX: rem(10),

  "@md": {
    display: 'none'
  }
})

const TelLink = styled("a", {
  color: vars.$scale.color.gray900,
  textDecoration: "none",
});

const GotoDaangnBusinessButton = styled('button', {
  display: 'none',
  "@md": {
    display: 'inline-block',
    backgroundColor: vars.$semantic.color.primary,
    color: vars.$semantic.color.onPrimary,
    padding: rem(8),
    borderRadius: rem(4),
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: rem(14),
    lineHeight: rem(20),
    letterSpacing: rem(-0.2),
    textAlign: 'center',
    textDecoration: 'none',
    marginLeft: rem(8),
  },
});

const Something: React.FC = () => {
  return (
    <QuestionInfo>
      <DisplayAdsGuide>
        <p onClick={()=>document.getElementById("learn-more-section")!.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })}><span>광고</span>가이드</p>
      </DisplayAdsGuide>
      <StyledDivider />
      <IconCall />
      <TelLink href="tel://1644-9736">
        <p>
          광고문의 <mark>1644-9736</mark>
        </p>
      </TelLink>
      <GotoDaangnBusinessButton onClick={()=>{
        location.href='https://business.daangn.com/login'
      }}>
        광고주센터
      </GotoDaangnBusinessButton>
    </QuestionInfo>
  )
};

export default Something;
