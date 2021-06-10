import * as React from "react";

import { styled } from "../../../gatsby-theme-stitches/stitches.config";
import { motion } from "framer-motion";
import { em } from "polished";
import { messageMotionOption } from "./_config";

const ReservationIcon = () => (
  <svg
    width={em(19)}
    height={em(19)}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8572 9.69764C13.0454 9.50936 13.0454 9.20409 12.8572 9.01581C12.6689 8.82752 12.3636 8.82752 12.1753 9.01581L8.65919 12.5319L7.07158 10.9443C6.88329 10.756 6.57803 10.756 6.38974 10.9443C6.20146 11.1326 6.20146 11.4379 6.38974 11.6262L8.31827 13.5547C8.50655 13.743 8.81182 13.743 9.0001 13.5547L12.8572 9.69764Z"
      fill="#FF7E36"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.73066 2.12476C6.99693 2.12476 7.21279 2.34061 7.21279 2.60689V3.08902H12.0341V2.60689C12.0341 2.34061 12.25 2.12476 12.5162 2.12476C12.7825 2.12476 12.9984 2.34061 12.9984 2.60689V3.08902H15.409C16.2078 3.08902 16.8554 3.73659 16.8554 4.53541V14.178C16.8554 15.5094 15.7761 16.5887 14.4448 16.5887H4.80214C3.47077 16.5887 2.39148 15.5094 2.39148 14.178V4.53541C2.39148 3.73659 3.03905 3.08902 3.83787 3.08902H6.24853V2.60689C6.24853 2.34061 6.46439 2.12476 6.73066 2.12476ZM6.24853 4.53541V4.05328H3.83787C3.5716 4.05328 3.35574 4.26914 3.35574 4.53541V5.98181H15.8912V4.53541C15.8912 4.26914 15.6753 4.05328 15.409 4.05328H12.9984V4.53541C12.9984 4.80169 12.7825 5.01754 12.5162 5.01754C12.25 5.01754 12.0341 4.80169 12.0341 4.53541V4.05328H7.21279V4.53541C7.21279 4.80169 6.99693 5.01754 6.73066 5.01754C6.46439 5.01754 6.24853 4.80169 6.24853 4.53541ZM3.35574 14.178V6.94607H15.8912V14.178C15.8912 14.9769 15.2436 15.6244 14.4448 15.6244H4.80214C4.00331 15.6244 3.35574 14.9769 3.35574 14.178Z"
      fill="#FF7E36"
    />
    <path
      d="M12.8572 9.69764C13.0454 9.50936 13.0454 9.20409 12.8572 9.01581C12.6689 8.82752 12.3636 8.82752 12.1753 9.01581L8.65919 12.5319L7.07158 10.9443C6.88329 10.756 6.57803 10.756 6.38974 10.9443C6.20146 11.1326 6.20146 11.4379 6.38974 11.6262L8.31827 13.5547C8.50655 13.743 8.81182 13.743 9.0001 13.5547L12.8572 9.69764Z"
      stroke="#FF7E36"
      strokeWidth="0.520702"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.73066 2.12476C6.99693 2.12476 7.21279 2.34061 7.21279 2.60689V3.08902H12.0341V2.60689C12.0341 2.34061 12.25 2.12476 12.5162 2.12476C12.7825 2.12476 12.9984 2.34061 12.9984 2.60689V3.08902H15.409C16.2078 3.08902 16.8554 3.73659 16.8554 4.53541V14.178C16.8554 15.5094 15.7761 16.5887 14.4448 16.5887H4.80214C3.47077 16.5887 2.39148 15.5094 2.39148 14.178V4.53541C2.39148 3.73659 3.03905 3.08902 3.83787 3.08902H6.24853V2.60689C6.24853 2.34061 6.46439 2.12476 6.73066 2.12476ZM6.24853 4.53541V4.05328H3.83787C3.5716 4.05328 3.35574 4.26914 3.35574 4.53541V5.98181H15.8912V4.53541C15.8912 4.26914 15.6753 4.05328 15.409 4.05328H12.9984V4.53541C12.9984 4.80169 12.7825 5.01754 12.5162 5.01754C12.25 5.01754 12.0341 4.80169 12.0341 4.53541V4.05328H7.21279V4.53541C7.21279 4.80169 6.99693 5.01754 6.73066 5.01754C6.46439 5.01754 6.24853 4.80169 6.24853 4.53541ZM3.35574 14.178V6.94607H15.8912V14.178C15.8912 14.9769 15.2436 15.6244 14.4448 15.6244H4.80214C4.00331 15.6244 3.35574 14.9769 3.35574 14.178Z"
      stroke="#FF7E36"
      strokeWidth="0.520702"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  background: "white",
});

const Wrapper = styled(motion.div, {
  background: "$gray100",
  padding: `${em(16)} ${em(18)}`,
  borderRadius: em(16),
  marginBottom: em(14),
  display: "flex",
  alignItems: "center",
  span: {
    textAlign: "left",
  },
});

const ReservationMessage: React.FC = ({ children }) => (
  <Wrapper {...messageMotionOption}>
    <IconContainer>
      <ReservationIcon />
    </IconContainer>
    <div
      dangerouslySetInnerHTML={{ __html: children as string }}
      style={{ textAlign: "left" }}
    />
  </Wrapper>
);

export default ReservationMessage;
