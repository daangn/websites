export interface RatingType {
  count: number;
  comment: string;
}
export interface PhoneMockUpVerifyData {
  verify: {
    mapImage: string;
    buttonText: string;
    location: string;
  };
  profile: {
    image: string;
    name: string;
    id: string;
    buttonText: string;
    karrotScore: number;
  };
  ratings: RatingType[];
}
