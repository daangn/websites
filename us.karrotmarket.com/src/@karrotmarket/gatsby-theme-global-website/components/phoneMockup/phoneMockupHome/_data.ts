import { PhoneMockupHomeData } from "@karrotmarket/gatsby-theme-website-global/src/components/phoneMockup/phoneMockupHome/_type";

import { ReactComponent as PopularIcon } from "@karrotmarket/gatsby-theme-website-global/src/icons/popular.svg";
import { ReactComponent as NearbyIcon } from "@karrotmarket/gatsby-theme-website-global/src/icons/nearby.svg";
import { ReactComponent as MostSearchedIcon } from "@karrotmarket/gatsby-theme-website-global/src/icons/most-searched.svg";

import TableImg from "@karrotmarket/gatsby-theme-website-global/src/images/img_home_table.jpg";
import PotImg from "@karrotmarket/gatsby-theme-website-global/src/images/img_home_pot.jpg";
import AirpodImg from "@karrotmarket/gatsby-theme-website-global/src/images/img_home_airpod.jpg";

export const data: PhoneMockupHomeData = {
  region: "Upper West Side",
  filters: [
    { name: "All" },
    { name: "Popular", icon: PopularIcon },
    { name: "Nearby", icon: NearbyIcon },
    { name: "Most Searched", icon: MostSearchedIcon },
  ],
  articles: [
    {
      name: "Dining table",
      image: TableImg,
      price: "$120.00",
      date: "2 secs ago",
      region: "Chelsea",
      interestCount: 8,
      chatCount: 24,
    },
    {
      name: "5 plant pot bundle",
      image: PotImg,
      price: "$10.00",
      date: "10 secs ago",
      region: "Union Square",
      interestCount: 6,
      chatCount: 3,
    },
    {
      name: "New unused airpods",
      image: AirpodImg,
      price: "$46.50",
      date: "53 secs ago",
      region: "Meatpacking District",
    },
  ],
};
