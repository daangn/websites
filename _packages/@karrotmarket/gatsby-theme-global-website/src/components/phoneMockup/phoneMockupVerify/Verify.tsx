import * as React from "react";
import { em } from "polished";
import { motion } from "framer-motion";
import { styled } from "../../../gatsby-theme-stitches/stitches.config";

import { Space } from "../../Space";

import { ReactComponent as PinIcon } from "../../../icons/pin.svg";
import { ReactComponent as CheckIcon } from "../../../icons/check.svg";

interface VerifyProps {
  mapImage: string;
  buttonText: string;
  location: string;
}

const Verify: React.FC<VerifyProps> = ({ mapImage, buttonText, location }) => {
  return (
    <Wrapper>
      <Map
        css={{
          backgroundImage: `url(${mapImage})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,

          duration: 1,
        }}
      >
        <CenterContainer>
          <Range
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              bounce: 0.3,
            }}
          ></Range>
        </CenterContainer>
        <CenterContainer>
          <PinContainer
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <PinIcon width={em(32)}></PinIcon>
          </PinContainer>
        </CenterContainer>
      </Map>
      <BottomSection>
        <LocationText
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          Current Location: <b>{location}</b>
        </LocationText>
        <Button
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
        >
          <CheckIcon width={em(18)} height={em(14)}></CheckIcon>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled("div", {});

const Map = styled(motion.div, {
  height: em(260),
  width: "100%",
  position: "relative",
  backgroundSize: "cover",
});
const CenterContainer = styled("div", {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
});
const Range = styled(motion.div, {
  background: "$carrot500",
  opacity: 0.15,
  width: em(160),
  height: em(160),
  borderRadius: em(80),
});
const PinContainer = styled(motion.div, {});
const LocationText = styled(motion.div, {
  fontSize: em(16),
  marginBottom: em(30),
  textAlign: "left",
});
const Button = styled(motion.button, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$carrot500",
  color: "white",
  width: "100%",
  height: em(50),
  borderRadius: em(6),
  border: "none",
  fontSize: em(16),
  fontWeight: "bold",
});
const ButtonText = styled(motion.div, {
  marginLeft: em(6),
});
const BottomSection = styled(motion.div, {
  padding: em(20),
});

export default Verify;
