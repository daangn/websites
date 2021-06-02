import { PhoneMockUpVerifyData } from "./_type";

//@ts-ignore
import VerifyLocationImg from "!!url-loader?modules!@src/images/img_verify_location.png";
//@ts-ignore
import ProfileImg from "!!url-loader?modules!@src/images/img_profile.png";

export const data: PhoneMockUpVerifyData = {
    verify: {
        mapImage: VerifyLocationImg,
        location: "Woolston",
        buttonText: "Verify",
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
