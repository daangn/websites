import * as React from "react";

import { em, rem } from "polished";
import { motion } from "framer-motion";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import Phone from "./Phone";
import Header from "./phoneMockupHome/Header";

import { data } from "./phoneMockupHome/_data";
import Filters from "./phoneMockupHome/Filters";
import Articles from "./phoneMockupHome/Articles";

interface PhoneMockupHomeProps {
  inView?: boolean;
}

const PhoneMockupHome: React.FC<PhoneMockupHomeProps> = () => {
  return (
    <Wrapper>
      <Phone
        frameColor="green"
        containerWidth={450}
        width={330}
        height={530}
        headerSection={<Header region={data.region} />}
      >
        <Filters filters={data.filters} />
        <Articles articles={data.articles} />
      </Phone>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {});

export default React.memo(PhoneMockupHome);
