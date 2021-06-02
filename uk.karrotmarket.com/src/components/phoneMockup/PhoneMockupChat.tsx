import React, { useEffect, useRef, useState } from "react";

import { em } from "polished";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import Phone from "./Phone";
import Item from "./phoneMockupChat/Item";
import Header from "./phoneMockupChat/Header";
import UserMessage from "./phoneMockupChat/UserMessage";
import LocationMessage from "./phoneMockupChat/LocationMessage";
import ReservationMessage from "./phoneMockupChat/ReservationMessage";

import { chatAnimationInfiteLoop, data } from "./phoneMockupChat/_config";
import { Message } from "./phoneMockupChat/_type";

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

const Wrapper = styled("div", {});

const PhoneMockupChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const ref = useRef();
    const interval = useRef<any>();
    const messageIndex = useRef<number>(0);

    useEffect(() => {
        if (!interval.current) {
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
    }, []);

    return (
        <Wrapper>
            <Phone frameColor="green" header={<Header {...data.header} />}>
                <Item {...data.item} />
                <ChatBox ref={ref as any}>
                    <AnimatePresence>
                        {messages.map((message, i) => {
                            const key = `${message.type}-${i}`;
                            switch (message.type) {
                                case "reservation":
                                    return <ReservationMessage key={key}>{message.text}</ReservationMessage>;
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
