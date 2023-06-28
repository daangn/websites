import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';
import { SimpleReveal } from 'simple-reveal';

type TempHeroSectionProps = {
  slice: GatsbyTypes.FullImage;
};

const TempHeroSection: React.FC<TempHeroSectionProps> = ({ slice }) => {
  return (
    <Section>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <PageTitle ref={ref} className={cn()} style={style}>
            더 따뜻한 당신근처를 위하여
          </PageTitle>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
      <Image
        image={slice.primary.full_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.full_image.alt}
      />
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <Description ref={ref} className={cn()} style={style}>
            당근마켓은 가까이 있지만 서로 소통한 적 없던 동네 이웃이 처음 만날 수 있는 공간을
            만들어갑니다. 중고거래부터 모임, 홍보와 결제까지 대한민국을 넘어 전 세계 동네가 있는
            곳이라면 어디서든 당근마켓으로 연결될 수 있습니다.
          </Description>
        )}
        duration={1000}
        delay={400}
        initialTransform="translateY(2rem)"
      />
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
