import * as React from 'react';
import { rem } from 'polished';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { SimpleReveal } from 'simple-reveal';

import _DetailLink from './DetailLink';

const Container = styled('section', {
  display: 'grid',
  width: '100%',
  height: rem(260),
  backgroundColor: 'lightgray',
  marginBottom: rem(-120),

  '@sm': {
    marginBottom: rem(-160),
  },
});

const TextWrapper = styled('div', {
  display: 'grid',
  gridArea: '1/1',
  justifyContent: 'center',
  alignContent: 'center',
  position: 'relative',
  placeItems: 'center',
});

const Title = styled('h1', {
  textAlign: 'center',
  typography: '$subtitle2',
  marginBottom: rem(12),

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
        style={{ gridArea: '1/1', height: '100%' }}
        layout="fullWidth"
        alt="이미지_채용배너"
        src={'./JobsBannerSection/jobs_banner.png'}
        formats={['auto', 'webp', 'avif']}
      />
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <TextWrapper ref={ref} className={cn()} style={style}>
            <Title>당근마켓과 함께 성장해보세요</Title>
            <DetailLink
              link={parseLink('https://about.daangn.com/jobs/')}
              message="채용공고 보러 가기"
            />
          </TextWrapper>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
    </Container>
  );
};

export default JobsBannerSection;
