import * as React from 'react';
import { em } from 'polished';
import { motion } from 'framer-motion';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import { messageMotionOption } from './_config';

interface UserMessageProps {
  userType?: 'sender' | 'receiver';
  children: React.ReactNode;
}

const UserMessage: React.FC<UserMessageProps> = ({ children, userType }) => (
  <Wrapper userType={userType} {...messageMotionOption}>
    <Message userType={userType}>{children}</Message>
  </Wrapper>
);

const Wrapper = styled(motion.div, {
  display: 'flex',
  variants: {
    userType: {
      sender: {
        justifyContent: 'flex-end',
      },
      receiver: {
        justifyContent: 'flex-start',
      },
    },
  },
});

const Message = styled('div', {
  display: 'flex',
  position: 'relative',
  fontSize: em(18),
  padding: `${em(12)} ${em(22)}`,
  marginBottom: em(14),

  variants: {
    userType: {
      sender: {
        borderRadius: `${em(100)} ${em(2)} ${em(100)} ${em(100)} `,
        color: vars.$scale.color.gray00,
        background: vars.$scale.color.carrot500,
      },
      receiver: {
        color: vars.$scale.color.gray900,
        background: vars.$scale.color.gray100,
        borderRadius: `${em(2)}  ${em(100)} ${em(100)} ${em(100)} `,
      },
    },
  },
});

export default UserMessage;
