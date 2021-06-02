import React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { motion } from "framer-motion";
import { em } from "polished";

const Pin = () => (
    <svg width={em(32)} viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M25.3503 13.6301C25.3503 17.4857 23.2377 22.0803 17.9564 25.2491C13.9057 27.6795 12.675 32.643 12.675 32.643C12.675 32.643 11.4443 27.6795 7.39365 25.2491C2.1123 22.0803 -0.000244141 17.4857 -0.000244141 13.6301C-0.000244141 6.6298 5.67466 0.954895 12.675 0.954895C19.6753 0.954895 25.3503 6.6298 25.3503 13.6301Z"
            fill="#FF7E36"
        />
    </svg>
);

const Map = styled(motion.div, {
    height: em(260),
    width: "100%",
    position: "relative",
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
    background: "$carrot500",
    color: "white",
    width: "100%",
    height: em(50),
    borderRadius: em(6),
    border: "none",
    fontSize: em(16),
    fontWeight: "bold",
});
const BottomSection = styled(motion.div, {
    padding: em(20),
});

interface VerifyProps {
    mapImage: string;
    buttonText: string;
    location: string;
}

const Wrapper = styled("div", {});

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
                        <Pin></Pin>
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
                    {buttonText}
                </Button>
            </BottomSection>
        </Wrapper>
    );
};

export default Verify;
