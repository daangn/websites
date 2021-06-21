import { PhoneMockupHomeData } from "@karrotmarket/gatsby-theme-global-website/src/components/phoneMockup/phoneMockupHome/_type";

import { ReactComponent as PopularIcon } from "@karrotmarket/gatsby-theme-global-website/src/icons/popular.svg";
import { ReactComponent as NearbyIcon } from "@karrotmarket/gatsby-theme-global-website/src/icons/nearby.svg";
import { ReactComponent as MostSearchedIcon } from "@karrotmarket/gatsby-theme-global-website/src/icons/most-searched.svg";

import TableImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_home_table.jpg";
import PotImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_home_pot.jpg";
import AirpodImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_home_airpod.jpg";

export const data: PhoneMockupHomeData = {
  region: "Bay Street Corridor",
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
      price: "$120.00",
      date: "2 sec ago",
      region: "Bay Street Corridor",
      interestCount: 8,
      chatCount: 24,
    },
    {
      name: "Take 5 pots at a low price.",
      image: PotImg,
      price: "$10.00",
      date: "10 sec ago",
      region: "Harefield",
      interestCount: 6,
      chatCount: 3,
    },
    {
      name: "It's a new AirPod.",
      image: AirpodImg,
      price: "$46.50",
      date: "53 sec ago",
      region: "Woolston",
    },
  ],
};
