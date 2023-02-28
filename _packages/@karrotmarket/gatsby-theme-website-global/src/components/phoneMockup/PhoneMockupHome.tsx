import * as React from 'react';
import { em } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

import Phone from './Phone';
import Header from './phoneMockupHome/Header';

import { data } from './phoneMockupHome/_data';
import Filters from './phoneMockupHome/Filters';
import Articles from './phoneMockupHome/Articles';

interface PhoneMockupHomeProps {
  inView?: boolean;
}

const PhoneMockupHome: React.FC<PhoneMockupHomeProps> = () => {
  return (
    <Wrapper>
      <Phone
        frameColor="green"
        containerWidth={450}
        width={330}
        height={510}
        headerSection={<Header region={data.region} />}
      >
        <Filters filters={data.filters} />
        <Articles articles={data.articles} />
        <Gradient />
      </Phone>
    </Wrapper>
  );
};

const Wrapper = styled('div', {});
const Gradient = styled('div', {
  position: 'absolute',
  bottom: em(8),
  left: 0,
  right: 0,
  height: em(48),
  background: 'linear-gradient(to bottom, #F6F6F600, #FCFCFC)',
});

export default React.memo(PhoneMockupHome);
