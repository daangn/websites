import React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { motion } from "framer-motion";
import { em } from "polished";
import { Space } from "@src/components/Space";

const Pin = () => (
    <svg width={em(32)} viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M25.3503 13.6301C25.3503 17.4857 23.2377 22.0803 17.9564 25.2491C13.9057 27.6795 12.675 32.643 12.675 32.643C12.675 32.643 11.4443 27.6795 7.39365 25.2491C2.1123 22.0803 -0.000244141 17.4857 -0.000244141 13.6301C-0.000244141 6.6298 5.67466 0.954895 12.675 0.954895C19.6753 0.954895 25.3503 6.6298 25.3503 13.6301Z"
            fill="#FF7E36"
        />
    </svg>
);

const Check = () => (
    <svg width={em(18)} height={em(14)} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5523 0.995684C16.8488 1.24278 16.8888 1.68348 16.6417 1.98L7.90567 12.4633C7.78701 12.6057 7.61664 12.6951 7.43204 12.7119C7.24745 12.7287 7.06375 12.6714 6.92135 12.5528L1.67971 8.18473C1.38319 7.93763 1.34313 7.49694 1.59023 7.20042C1.83733 6.9039 2.27802 6.86383 2.57454 7.11093L7.27929 11.0316L15.5679 1.08517C15.815 0.788646 16.2557 0.748583 16.5523 0.995684Z"
            fill="white"
            stroke="white"
            stroke-width="0.873607"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
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
                    <Check></Check>
                    <Space w={em(6)}></Space>
                    {buttonText}
                </Button>
            </BottomSection>
        </Wrapper>
    );
};

export default Verify;
