import { PhoneMockUpVerifyData } from "@karrotmarket/gatsby-theme-global-website/src/components/phoneMockup/phoneMockupVerify/_type";

//@ts-ignore
import VerifyLocationImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_verify_location.png";
//@ts-ignore
import ProfileImg from "@karrotmarket/gatsby-theme-global-website/src/images/img_verify_profile.png";

export const data: PhoneMockUpVerifyData = {
  verify: {
    mapImage: VerifyLocationImg,
    location: "Upper West Side",
    buttonText: "Verified",
  },
  profile: {
    image: ProfileImg,
    name: "Emilia",
    id: "#10006",
    buttonText: "Rate",
  },
  ratings: [
    { count: 31, comment: "Product as described" },
    { count: 12, comment: "Kind and friendly" },
  ],
};
