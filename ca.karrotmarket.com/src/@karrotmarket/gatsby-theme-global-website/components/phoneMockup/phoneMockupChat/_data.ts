import { PhoneMockUpChatData } from "@karrotmarket/gatsby-theme-global-website/src/components/phoneMockup/phoneMockupChat/_type";

import LocationImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_chat_location.png";
import ItemImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_chat_item.png";

export const data: PhoneMockUpChatData = {
  header: {
    name: "Emilia",
    temperature: 36.5,
    info: "within 10 mins",
  },
  item: {
    name: "Cozy Chair",
    image: ItemImg,
    price: "$120.00",
  },
  messages: [
    {
      type: "user",
      text: "Yes, that works for me",
      userType: "sender",
    },
    {
      type: "reservation",
      text: "Emilia set a Meet Up for <br/> <b>26 Feb, 7:00 pm</b>",
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
