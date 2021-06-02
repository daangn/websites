import React from "react";

import { em, rem } from "polished";
import { motion } from "framer-motion";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import Phone from "./Phone";
import Verify from "./phoneMockupVerify/Verify";
import Profile from "./phoneMockupVerify/Profile";
import Ratings from "./phoneMockupVerify/Ratings";

import { data } from "./phoneMockupVerify/_config";

const Header = styled("div", {
    fontWeight: "bold",
});

const FloatingContainer = styled(motion.div, {
    position: "absolute",
    bottom: em(26),
    right: 0,
    zIndex: 1,
    fontSize: rem(9.5),
    "@md": {
        fontSize: rem(16),
    },
});

const Wrapper = styled("div", {
    position: "relative",
    width: rem(288),
    "@md": {
        width: rem(490),
    },
});

const PhoneMockupVerify: React.FC = (props) => {
    return (
        <Wrapper>
            <Phone
                align="left"
                height={600}
                frameColor="orange"
                header={<Header>Vertify</Header>}
                fontSize={{ "@i": { fontSize: rem(7.5) }, "@md": { fontSize: rem(13) } }}
            >
                <Verify {...data.verify}></Verify>
            </Phone>
            <FloatingContainer>
                <Profile {...data.profile}></Profile>
                <Ratings ratings={data.ratings}></Ratings>
            </FloatingContainer>
        </Wrapper>
    );
};

export default PhoneMockupVerify;
