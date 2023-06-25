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
      <PageTitle>우리는 함께 성장할 수 있다고 믿어요.</PageTitle>
      <Image
        image={slice.primary.full_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.full_image.alt}
      />
      <Description>
        당근마켓 팀에는 일에 몰입할 때 즐거움을 느끼는 사람들이 모였습니다. 사용자의 문제를 발견하면
        주도적으로 해결하고, 상상할 수도 없던 일을 함께 이루어가며 매일 성장하고 있습니다.{' '}
      </Description>
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
    maxWidth: rem(800),
    paddingX: rem(0),
  },

  '@md': {
    marginBottom: rem(88),
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  borderRadius: rem(0),

  '@md': {
    borderRadius: rem(30),
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
