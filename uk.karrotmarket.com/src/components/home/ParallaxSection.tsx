import React from "react";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { Html } from "@src/components/Html";
import { Flex } from "@src/components/Flex";
import { Space } from "@src/components/Space";

// @ts-ignore
import { ReactComponent as KarrotIcon } from "@src/icons/karrot.svg";

type ParallaxIconType = "Karrot";
const ParallaxIcon: { [key in ParallaxIconType]: React.FC } = {
    Karrot: KarrotIcon,
};

type ParallaxSectionProps = {
    content: GatsbyTypes.ParallaxSection_contentFragment;
};

export const query = graphql`
    fragment ParallaxSection_content on PrismicGlobalContentsDataBodyParallaxSection {
        primary {
            title {
                html
            }
            top_icon
            top_text {
                text
            }
            background_image {
                url
            }
        }
    }
`;

const Section = styled("section", {
    overflow: "hidden",
    height: "400px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@md": {
        height: "600px",
    },
});

const Container = styled("div", {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1,
    width: "$maxContent",
    margin: "0 auto",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
});

const TopText = styled("div", {
    fontSize: "$body1",
    "@md": {
        fontSize: "$subtitle3",
    },
});

const Background = styled("div", {
    height: "800px",
    width: "100%",
    backgroundPosition: "bottom 50% left 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "160%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@sm": {
        backgroundPosition: "bottom 30% left 50%",
    },
    "@md": {
        backgroundPosition: "bottom 20% left 50%",
        backgroundSize: "cover",
        height: "800px",
    },
});

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ content }) => {
    if (!content.primary) return <></>;

    const { title, top_icon, top_text, background_image } = content.primary;
    const TopIcon = ParallaxIcon[top_icon as ParallaxIconType];

    return (
        <ParallaxProvider>
            <Section>
                <Parallax y={[-25, 25]} styleInner={{ height: "100%" }} styleOuter={{ width: "100%" }}>
                    <Background css={{ backgroundImage: `url(${background_image?.url})` }}></Background>
                </Parallax>
                <Container>
                    <Flex rowCenterY>
                        <TopIcon></TopIcon>
                        <Space w={4}></Space>
                        <TopText>{top_text?.text}</TopText>
                    </Flex>
                    <Space h={12}></Space>
                    <Html html={title?.html as string}></Html>
                </Container>
            </Section>
        </ParallaxProvider>
    );
};

export default ParallaxSection;
