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
            즐겁게 몰입하고 크게 성장합니다
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
            당근마켓 팀에는 일에 몰입할 때 즐거움을 느끼는 사람들이 모였습니다. 개인은 자신의 역량을
            마음껏 발휘하고 팀은 서로의 잠재력을 최대로 끌어내면서, 혼자서는 상상할 수 없던 눈부신
            성장을 함께 이루어가고 있습니다.
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

  '@sm': {
    contentArea: true,
  },
});

const PageTitle = styled('h1', {
  marginBottom: rem(32),
  typography: '$subtitle2',
  whiteSpace: 'pre-line',
  paddingX: rem(24),
  maxWidth: rem(280),

  '@sm': {
    typography: '$heading3',
    maxWidth: rem(400),
    paddingX: rem(0),
  },

  '@md': {
    marginBottom: rem(88),
  },
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  borderRadius: rem(0),
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
  maxWidth: rem(720),
  marginTop: rem(32),
  paddingX: rem(24),
  lineHeight: rem(28),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize200,

  '@sm': {
    paddingX: 0,
    lineHeight: rem(39),
    fontSize: vars.$scale.dimension.fontSize600,
  },
});

export default TempHeroSection;
