import * as React from 'react';
import { rem } from 'polished';
import { StaticImage } from 'gatsby-plugin-image';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';

import _DetailLink from './DetailLink';

const Container = styled('section', {
  display: 'grid',
  width: '100%',
  height: rem(360),
  backgroundColor: 'lightgray',
  marginBottom: rem(-120),

  '@sm': {
    marginBottom: rem(-160),
  },
});

const TextWrapper = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  gap: rem(32),
  gridArea: "1/1",
  position: "relative",
  placeItems: "center",
  paddingX: rem(64),
  paddingY: rem(72),

  '@md': {
    paddingY: rem(100),
  },
});

const Title = styled('h1', {
  textAlign: 'center',
  typography: '$subtitle2',

  '@md': {
    typography: '$heading4',
  },
});

const DetailLink = styled(_DetailLink, {
  justifyContent: 'center',
});

const JobsBannerSection: React.FC = () => {
  const parseLink = useLinkParser();

  return (
    <Container>
      <StaticImage
        style={{ gridArea: "1/1", width: "100%", }}
        layout="fullWidth"
        alt="이미지_채용배너"
        src={"./JobsBannerSection/jobs_banner.png"}
        formats={["auto", "webp", "avif"]}
      />
      <TextWrapper>
        <Title>당근마켓의 여정에 함께 하세요</Title>
        <DetailLink
          link={parseLink("https://about.daangn.com/jobs/")}
          message="채용공고 보러 가기"
        />
      </TextWrapper>
    </Container>
  );
};

export default JobsBannerSection;
