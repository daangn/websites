import { PhoneMockUpVerifyData } from "./_type";

//@ts-ignore
import VerifyLocationImg from "../../../images/img_verify_location.png";
//@ts-ignore
import ProfileImg from "../../../images/img_verify_profile.png";

export const data: PhoneMockUpVerifyData = {
  verify: {
    mapImage: VerifyLocationImg,
    location: "Woolston",
    buttonText: "Verified",
  },
  profile: {
    image: ProfileImg,
    name: "Emilia",
    id: "#10006",
    buttonText: "Rate",
    karrotScore: 430,
  },
  ratings: [
    { count: 32, comment: "Item as described" },
    { count: 12, comment: "Friendly" },
  ],
};
