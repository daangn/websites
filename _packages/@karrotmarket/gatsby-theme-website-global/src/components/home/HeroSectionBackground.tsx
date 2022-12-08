import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";

import { ReactComponent as HeroCeilingLightCableSvg } from "../../images/hero_ceiling_light_cable.svg";
import { ReactComponent as HeroCeilingLightSvg } from "../../images/hero_ceiling_light.svg";
import { ReactComponent as HeroChairSvg } from "../../images/hero_chair.svg";
import { ReactComponent as HeroPlantSvg } from "../../images/hero_plant.svg";
import { ReactComponent as HeroTableSvg } from "../../images/hero_table.svg";
import { ReactComponent as HeroPaintingSvg } from "../../images/hero_painting.svg";

const HeroSectionBackground: React.FC = (props) => {
  return (
    <ParallaxProvider>
      <Wrapper>
        <TopContianer>
          <HeroPainting y={[-50, 30]}>
            <HeroPaintingSvg></HeroPaintingSvg>
          </HeroPainting>
          <HeroCeilingLightContainer>
            <HeroCeilingLightCable>
              <HeroCeilingLightCableSvg></HeroCeilingLightCableSvg>
            </HeroCeilingLightCable>
            <HeroCeilingLight y={[-50, 32]}>
              <HeroCeilingLightSvg></HeroCeilingLightSvg>
            </HeroCeilingLight>
          </HeroCeilingLightContainer>
        </TopContianer>
        <BottomContainer>
          <BottomLeftContainer>
            <HeroPlant y={[-4, 10]}>
              <HeroPlantSvg></HeroPlantSvg>
            </HeroPlant>
            <HeroTable y={[-9, 15]}>
              <HeroTableSvg></HeroTableSvg>
            </HeroTable>
          </BottomLeftContainer>

          <HeroChair y={[-10, 20]}>
            <HeroChairSvg></HeroChairSvg>
          </HeroChair>
        </BottomContainer>
      </Wrapper>
    </ParallaxProvider>
  );
};

const Wrapper = styled("div", {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "visible",
  alignItems: "center",
  "@md": {
    alignItems: "flex-end",
    width: "$maxContent",
  },
});
const TopContianer = styled("div", {
  display: "flex",
  justifyContent: "center",
});
const BottomContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  flex: 1,
  transform: "translate(2%,24%)",
  "@md": {
    transform: "translate(0)",
  },
});
const BottomLeftContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
});

const HeroPainting = styled(Parallax, {
  transform: "translate(-90%,110%) scale(0.6)",

  "@md": {
    transform: "translate(10%,10%) ",

    marginTop: rem(120),
  },
});
const HeroCeilingLightContainer = styled(Parallax, {
  display: "none",

  "@md": {
    display: "block",

    marginLeft: rem(250),
    transform: "translateX(60%)",
  },
});
const HeroCeilingLight = styled(Parallax, {
  "@md": {
    transform: "translateY(-10%)",
  },
});
const HeroCeilingLightCable = styled(Parallax, {
  "@md": {
    transform: "translateX(50%)",
  },
});
const HeroPlant = styled(Parallax, {
  display: "none",
  "@md": {
    display: "block",
    transform: "translateY(2%)",
  },
});
const HeroTable = styled(Parallax, {
  transform: "translate(5%,5%) scale(0.5)",
  "@md": {
    transform: "translate(-50%,2%)",
  },
});
const HeroChair = styled(Parallax, {
  transform: "translateY(-3%) scale(0.5)",
  marginLeft: rem(80),

  "@md": {
    transform: "translate(55%,10%)",
    marginLeft: rem(60),
  },
});

export default HeroSectionBackground;
