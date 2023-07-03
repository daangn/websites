import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';
import { SimpleReveal } from 'simple-reveal';

type TempHeroSectionProps = {
  slice: GatsbyTypes.FullImage;
};

const TempHeroSection: React.FC<TempHeroSectionProps> = ({ slice }) => {
  const image =
    slice.primary?.full_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.full_image.localFile.childImageSharp.gatsbyImageData);

  const mobileImage =
    slice.primary?.mobile_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.mobile_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <Section>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <PageTitle ref={ref} className={cn()} style={style}>
            더 가깝고 따뜻한 당신 근처를 위하여
          </PageTitle>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
      <Image image={image} alt={slice.primary?.full_image?.alt || ''} />
      <MobileImage image={mobileImage} alt={slice.primary?.mobile_image?.alt || ''} />
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <Description ref={ref} className={cn()} style={style}>
            당근마켓은 활발한 교류가 있는 지역 생활 커뮤니티를 꿈꿉니다. 누구나 동네에서의 즐겁고
            따뜻한 연결을 경험할 수 있도록 하이퍼로컬의 새로운 길을 만들어가고 있습니다.
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
  maxWidth: rem(200),

  '@sm': {
    typography: '$heading4',
    maxWidth: rem(400),
  },

  '@md': {
    marginBottom: rem(88),
    paddingX: 0,
    typography: '$heading3',
  },
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  borderRadius: 0,
  opacity: 0.99,

  '@sm': {
    display: 'block !important',
  },

  '@md': {
    borderRadius: rem(30),
  },
});

const MobileImage = styled(GatsbyImage, {
  display: 'block !important',
  width: '100%',
  height: '100%',

  '@sm': {
    display: 'none !important',
  },
});

const Description = styled('p', {
  maxWidth: rem(700),
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
