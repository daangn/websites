import * as React from "react";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
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
    color: "$carrot500",
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
  color: "$black",
  textDecoration: "none",
});

const Something: React.FC = () => {
  return (
    <QuestionInfo>
      <DisplayAdsGuide>
        <p onClick={()=>document.getElementById("learn-more-section")!.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })}><span>지역광고</span>가이드</p>
      </DisplayAdsGuide>
      <StyledDivider />
      <IconCall />
      <TelLink href="tel://1644-9736">
        <p>
          광고문의 <mark>1644-9736</mark>
        </p>
      </TelLink>
    </QuestionInfo>
  )
};

export default Something;
