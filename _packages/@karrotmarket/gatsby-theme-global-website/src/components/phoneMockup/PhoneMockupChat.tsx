import * as React from "react";

import { em, rem } from "polished";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "../../gatsby-theme-stitches/stitches.config";

import Phone from "./Phone";
import Item from "./phoneMockupChat/Item";
import Header from "./phoneMockupChat/Header";
import UserMessage from "./phoneMockupChat/UserMessage";
import LocationMessage from "./phoneMockupChat/LocationMessage";
import ReservationMessage from "./phoneMockupChat/ReservationMessage";

import { chatAnimationInfiteLoop } from "./phoneMockupChat/_config";
import { data } from "./phoneMockupChat/_data";
import { Message } from "./phoneMockupChat/_type";

const Wrapper = styled(motion.div, {});
const ChatBox = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  padding: em(16),
  position: "absolute",
  bottom: 0,
  minHeight: `calc(100% - ${em(146)})`,
  width: "100%",
  boxSizing: "border-box",
});

const EmptySpace = styled("div", {
  fontSize: rem(10),
  "@md": {
    fontSize: rem(16),
  },

  width: em(1),
  height: em(600),
});

interface PhoneMockupChatProps {
  inView?: boolean;
}

const PhoneMockupChat: React.FC<PhoneMockupChatProps> = ({ inView }) => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const ref = React.useRef();
  const interval = React.useRef<any>();
  const messageIndex = React.useRef<number>(0);

  React.useEffect(() => {
    if (!interval.current && inView) {
      interval.current = setInterval(() => {
        if (messageIndex.current < 0) return messageIndex.current++;

        let newMessage = data.messages[messageIndex.current++];
        if (!newMessage) {
          if (chatAnimationInfiteLoop) {
            messageIndex.current = 0;
            setMessages([]);
          } else {
            clearInterval(interval.current);
          }
        } else {
          setMessages((prev) => [...prev, newMessage]);
        }
      }, 1600);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [inView]);

  if (!inView) return <EmptySpace></EmptySpace>;

  return (
    <Wrapper
      {...{
        initial: {
          opacity: 0,
          y: 200,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        transition: {
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      <Phone frameColor="green" header={<Header {...data.header} />}>
        <Item {...data.item} />
        <ChatBox ref={ref as any}>
          <AnimatePresence>
            {messages.map((message, i) => {
              const key = `${message.type}-${i}`;
              switch (message.type) {
                case "reservation":
                  return (
                    <ReservationMessage key={key}>
                      {message.text}
                    </ReservationMessage>
                  );
                case "location":
                  return (
                    <LocationMessage
                      key={key}
                      userType={message.userType}
                      buttonText={message.text}
                      image={message.image}
                    />
                  );
                default:
                case "user":
                  return (
                    <UserMessage key={key} userType={message.userType}>
                      {message.text}
                    </UserMessage>
                  );
              }
            })}
          </AnimatePresence>
        </ChatBox>
      </Phone>
    </Wrapper>
  );
};

export default React.memo(PhoneMockupChat);
