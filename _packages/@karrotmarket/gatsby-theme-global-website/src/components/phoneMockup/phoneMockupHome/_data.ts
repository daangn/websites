import { PhoneMockupHomeData } from "./_type";

import { ReactComponent as PopularIcon } from "../../../icons/popular.svg";
import { ReactComponent as NearbyIcon } from "../../../icons/nearby.svg";
import { ReactComponent as MostSearchedIcon } from "../../../icons/most-searched.svg";

import TableImg from "../../../images/img_home_table.jpg";
import PotImg from "../../../images/img_home_pot.jpg";
import AirpodImg from "../../../images/img_home_airpod.png";

export const data: PhoneMockupHomeData = {
  region: "Woolston",
  filters: [
    { name: "All" },
    { name: "Popular", icon: PopularIcon },
    { name: "Nearby", icon: NearbyIcon },
    { name: "Most Searched", icon: MostSearchedIcon },
  ],
  articles: [
    {
      name: "Table",
      image: TableImg,
      price: "£120.00",
      date: "2 sec ago",
      region: "Woolston",
      interestCount: 8,
      chatCount: 24,
    },
    {
      name: "Take 5 pots at a low price.",
      image: PotImg,
      price: "£10.00",
      date: "10 sec ago",
      region: "Harefield",
      interestCount: 6,
      chatCount: 3,
    },
    {
      name: "It's a new AirPod.",
      image: AirpodImg,
      price: "£46.50",
      date: "53 sec ago",
      region: "Woolston",
    },
  ],
};
