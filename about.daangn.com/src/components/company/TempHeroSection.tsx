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
        누구나 사용하는 지역 커뮤니티 로컬앱을 꿈꿔요. 근처 이웃들은 진짜 우리 동네 이야기를 주고받을 수 있고, 가게 사장님은 이웃들의 목소리를 가장 가까이서 귀 기울여 들을 수 있지요. 이웃과 더 가까워지는 풍요로운 동네가 될 수 있도록 당근마켓은 오늘도 머리를 맞대고 있습니다.
      </Description>
    </Section>
  );
};

const Section = styled('section', {
  contentArea: false,

  '@md': {
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
