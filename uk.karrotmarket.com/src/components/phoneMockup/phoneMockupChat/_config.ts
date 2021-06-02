import { PhoneMockUpChatData } from "./_type";

//@ts-ignore
import LocationImg from "!!url-loader?modules!@src/images/img_location.png";
//@ts-ignore
import ItemImg from "!!url-loader?modules!@src/images/img_item.png";

export const data: PhoneMockUpChatData = {
    header: {
        name: "Emilia",
        temperature: 36.5,
        info: "within 10 mins",
    },
    item: {
        name: "Pram",
        image: ItemImg,
        price: "£120.00",
    },
    messages: [
        {
            type: "user",
            text: "Yes, that works for me",
            userType: "sender",
        },
        {
            type: "reservation",
            text: "Emilia has set up an appointment on <b>February 26th at 7:00 pm.</b>",
        },
        {
            type: "location",
            text: "See location",
            userType: "sender",
            image: LocationImg,
        },
        {
            type: "user",
            text: "Ok, See you soon!",
            userType: "receiver",
        },
    ],
};

export const chatAnimationInfiteLoop = true;

export const messageMotionOption = {
    initial: {
        opacity: 0,
        y: 50,
        scale: 0.7,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    transition: {
        duration: 0.5,
        ease: "anticipate",
    },
    exit: {
        scale: 0,
        opacity: 0,
    },
    layout: true,
};
