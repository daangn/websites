export interface Filter {
  name: string;
  icon?: React.FC;
}

export interface Article {
  name: string;
  image: string;
  price: string;
  region: string;
  date: string;
  chatCount?: number;
  interestCount?: number;
}

export interface PhoneMockupHomeData {
  region: string;
  filters: Filter[];
  articles: Article[];
}
