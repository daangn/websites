import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';

type TempHeroSectionProps = {
  slice: GatsbyTypes.FullImage;
};

const TempHeroSection: React.FC<TempHeroSectionProps> = ({ slice }) => {
  return (
    <Section>
      <PageTitle>더 따뜻한 당신근처를 위하여</PageTitle>
      <Image
        image={slice.primary.full_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.full_image.alt}
      />
      <Description>
        당근마켓은 동네 곳곳에 흩어져 있던 이웃과 정보, 가게를 연결하며 동네에 가치를 불어넣습니다.
        중고거래, 모임, 가게 홍보와 결제까지, 대한민국을 넘어 전 세계 곳곳 동네의 모든 것을
        당근마켓으로 연결해나가고 있어요.
      </Description>
    </Section>
  );
};

const Section = styled('section', {
  contentArea: false,
  marginBottom: rem(96),

  '@md': {
    marginBottom: rem(0),
    contentArea: true,
    borderRadius: rem(30),
  },
});

const PageTitle = styled('h1', {
  marginBottom: rem(32),
  paddingX: rem(24),
  typography: '$subtitle2',
  whiteSpace: 'pre-line',
  maxWidth: rem(400),

  '@sm': {
    typography: '$heading4',
  },

  '@md': {
    marginBottom: rem(88),
    paddingX: 0,
    typography: '$heading3',
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  borderRadius: 0,

  '@md': {
    borderRadius: rem(30),
  },
});

const Description = styled('p', {
  maxWidth: rem(720),
  marginTop: rem(32),
  paddingX: rem(24),
  lineHeight: rem(25),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize200,

  '@sm': {
    paddingX: 0,
    lineHeight: rem(39),
    fontSize: vars.$scale.dimension.fontSize600,
  },
});

export default TempHeroSection;
