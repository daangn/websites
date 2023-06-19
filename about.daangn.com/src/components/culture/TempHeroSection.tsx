import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type TempHeroSectionProps = {
  slice: GatsbyTypes.FullImage;
};

const TempHeroSection: React.FC<TempHeroSectionProps> = ({ slice }) => {
  return (
    <Section>
      <PageTitle>우리는 함께 성장할 수 있다고 믿어요.</PageTitle>
      <Image
        image={slice.primary.full_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.full_image.alt}
      />
    </Section>
  );
};

const Section = styled('section', {
  contentArea: true,
});

const PageTitle = styled('h1', {
  marginBottom: rem(32),
  typography: '$subtitle2',
  whiteSpace: 'pre-line',

  '@sm': {
    typography: '$heading3',
  },

  '@md': {
    marginBottom: rem(88),
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  borderRadius: rem(30),
});

export default TempHeroSection;
