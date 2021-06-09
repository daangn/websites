import * as React from "react";

import { styled } from "../../../gatsby-theme-stitches/stitches.config";
import { motion } from "framer-motion";
import { em } from "polished";
import { messageMotionOption } from "./_config";

const Message = styled("div", {
  display: "flex",
  position: "relative",
  fontSize: em(18),
  padding: `${em(12)} ${em(22)}`,
  marginBottom: em(14),

  variants: {
    userType: {
      sender: {
        borderRadius: `${em(100)} ${em(2)} ${em(100)} ${em(100)} `,
        color: "white",
        background: "$carrot500",
      },
      receiver: {
        color: "$gray900",
        background: "$gray100",
        borderRadius: `${em(2)}  ${em(100)} ${em(100)} ${em(100)} `,
      },
    },
  },
});

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

interface UserMessageProps {
  userType?: "sender" | "receiver";
}

const UserMessage: React.FC<UserMessageProps> = ({ children, userType }) => (
  <Wrapper userType={userType} {...messageMotionOption}>
    <Message userType={userType}>{children}</Message>
  </Wrapper>
);

export default UserMessage;
