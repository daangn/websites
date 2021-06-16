import * as React from "react";
import { em } from "polished";
import { motion } from "framer-motion";

import { styled } from "../../../gatsby-theme-stitches/stitches.config";

import { messageMotionOption } from "./_config";

import { ReactComponent as PinIcon } from "../../../icons/location-pin.svg";

interface LocationMessageProps {
  buttonText: string;
  userType?: "sender" | "receiver";
  image?: string;
}

const LocationMessage: React.FC<LocationMessageProps> = ({
  buttonText,
  image,
  userType,
}) => {
  return (
    <Wrapper userType={userType} {...messageMotionOption}>
      <Container>
        <Image src={image} />
        <Button>{buttonText}</Button>
        <CenterContainer>
          <PinIcon width={em(46)} height={em(46)}></PinIcon>
        </CenterContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: "flex",
  variants: {
    userType: {
      sender: {
        justifyContent: "flex-end",
      },
      receiver: {
        justifyContent: "flex-start",
      },
    },
  },
});

const Container = styled("div", {
  border: `${em(1)} solid $gray200`,
  borderRadius: em(16),
  overflow: "hidden",
  marginBottom: em(14),
  position: "relative",
});
const Image = styled("img", {
  width: em(226),
  height: em(130),
  verticalAlign: "middle",
  objectFit: "cover",
});
const Button = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: em(42),
  width: "100%",
  fontSize: em(16),
  color: "$gray700",
});

const CenterContainer = styled("div", {
  position: "absolute",
  left: "50%",
  top: "40%",
  transform: "translate(-50%,-50%)",
});

export default LocationMessage;
