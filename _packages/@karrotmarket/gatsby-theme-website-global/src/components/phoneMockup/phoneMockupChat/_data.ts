import { PhoneMockUpChatData } from './_type';

//@ts-ignore
import LocationImg from '../../../images/img_chat_location.png';
//@ts-ignore
import ItemImg from '../../../images/img_chat_item.png';

export const data: PhoneMockUpChatData = {
  header: {
    name: 'Emilia',
    temperature: 430,
    info: 'within 10 mins',
  },
  item: {
    name: 'Cozy Chair',
    image: ItemImg,
    price: '£120.00',
  },
  messages: [
    {
      type: 'user',
      text: 'Yes, that works for me',
      userType: 'sender',
    },
    {
      type: 'reservation',
      text: 'Emilia has set up an appointment on <br/> <b>February 26th at 7:00 pm.</b>',
    },
    {
      type: 'location',
      text: 'See location',
      userType: 'sender',
      image: LocationImg,
    },
    {
      type: 'user',
      text: 'Ok, See you soon!',
      userType: 'receiver',
    },
  ],
};
