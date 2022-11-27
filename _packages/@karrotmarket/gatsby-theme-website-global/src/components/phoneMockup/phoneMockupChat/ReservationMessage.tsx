import * as React from "react";
import { em } from "polished";
import { motion } from "framer-motion";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

import { messageMotionOption } from "./_config";

import { ReactComponent as ReservationIcon } from "../../../icons/reservation-chat.svg";

const ReservationMessage: React.FC<{ children: string }> = ({ children }) => (
  <Wrapper {...messageMotionOption}>
    <IconContainer>
      <ReservationIcon width={em(19)} height={em(19)} />
    </IconContainer>
    <div
      dangerouslySetInnerHTML={{ __html: children }}
      style={{ textAlign: "left" }}
    />
  </Wrapper>
);

const Wrapper = styled(motion.div, {
  background: vars.$scale.color.gray100,
  padding: `${em(16)} ${em(18)}`,
  borderRadius: em(16),
  marginBottom: em(14),
  display: "flex",
  alignItems: "center",
  span: {
    textAlign: "left",
  },
});

const IconContainer = styled("div", {
  display: "flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  minWidth: em(32),
  maxWidth: em(32),
  minHeight: em(32),
  maxHeight: em(32),
  borderRadius: em(16),
  marginRight: em(12),
  background: vars.$semantic.color.paperBackground,
});

export default ReservationMessage;
