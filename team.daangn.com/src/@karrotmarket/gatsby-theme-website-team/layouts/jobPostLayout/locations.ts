type Location = {
  postalCode: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion: string;
  addressCountry: string;
};

export default [
  {
    postalCode: '06611',
    addressLocality: '서초구',
    addressRegion: '서울특별시',
    addressCountry: '대한민국',
    streetAddress: '강남대로 465, 교보타워 11층',
  },
] as Location[];
