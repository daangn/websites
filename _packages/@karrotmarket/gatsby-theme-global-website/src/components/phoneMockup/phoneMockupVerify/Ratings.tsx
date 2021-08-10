import * as React from "react";
import { em } from "polished";
import { motion } from "framer-motion";

import { styled } from "../../../gatsby-theme-stitches/stitches.config";

import { Flex } from "../../Flex";
import { RatingType } from "./_type";

import { ReactComponent as GroupIcon } from "../../../icons/group.svg";

interface RatingProps {
  ratings: RatingType[];
}

const Ratings: React.FC<RatingProps> = ({ ratings }) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.5,
      }}
    >
      <Title>Feedback</Title>
      {ratings.map((rating, i) => (
        <Container>
          <Count>
            <GroupIcon width={em(21)} height={em(21)}></GroupIcon>
            <span>{rating.count}</span>
          </Count>

          <Comment>{rating.comment}</Comment>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  padding: em(24),
  background: "white",
  borderRadius: em(24),
  boxShadow: `${em(2)} ${em(6)} ${em(16)} ${em(8)} #00000010`,
  width: em(270),
  "*": {
    fontFamily: "$system",
  },
});

const Title = styled("div", {
  fontSize: em(18),
  fontWeight: "bold",
  marginRight: em(6),
  marginBottom: em(24),
});

const Container = styled("div", {
  display: "flex",
});

const Comment = styled("div", {
  display: "flex",
  position: "relative",
  fontSize: em(16),
  padding: `${em(12)} ${em(18)}`,
  marginBottom: em(14),
  color: "$gray900",
  background: "$gray100",
  borderRadius: `${em(2)}  ${em(100)} ${em(100)} ${em(100)} `,
});

const Count = styled("div", {
  width: em(56),
  display: "flex",
  alignItems: "flex-start",
  span: {
    fontSize: em(14),
    fontWeight: "bold",
    marginLeft: em(4),
  },
});

export default Ratings;
