import { PhoneMockupHomeData } from './_type';

import { ReactComponent as PopularIcon } from '../../../icons/popular.svg';
import { ReactComponent as NearbyIcon } from '../../../icons/nearby.svg';
import { ReactComponent as MostSearchedIcon } from '../../../icons/most-searched.svg';

import TableImg from '../../../images/img_home_table.jpg';
import PotImg from '../../../images/img_home_pot.jpg';
import AirpodImg from '../../../images/img_home_airpod.jpg';

export const data: PhoneMockupHomeData = {
  region: 'City Centre',
  filters: [
    { name: 'All' },
    { name: 'Popular', icon: PopularIcon },
    { name: 'Nearby', icon: NearbyIcon },
    { name: 'Most Searched', icon: MostSearchedIcon },
  ],
  articles: [
    {
      name: 'Dining table',
      image: TableImg,
      price: '£120.00',
      date: '2 secs ago',
      region: 'Altrincham',
      interestCount: 8,
      chatCount: 24,
    },
    {
      name: '5 plant pot bundle',
      image: PotImg,
      price: '£10.00',
      date: '10 secs ago',
      region: 'Salford',
      interestCount: 6,
      chatCount: 3,
    },
    {
      name: 'New unused airpods',
      image: AirpodImg,
      price: '£46.50',
      date: '53 secs ago',
      region: 'Chorlton',
    },
  ],
};
