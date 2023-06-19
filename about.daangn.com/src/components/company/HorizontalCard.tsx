import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type HorizontalCardProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyHorizontalCard;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({ slice }) => {
  const image =
    slice.primary?.image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.image.localFile.childImageSharp.gatsbyImageData);

  const mobileImage =
    slice.primary?.image_mobile?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.image_mobile.localFile.childImageSharp.gatsbyImageData);

  return (
    <Section>
      <Wrapper>
        <TextArea>
          <TextWapper>
            <KeyText>당근의 처음</KeyText>
            <Title
              dangerouslySetInnerHTML={{
                __html: slice.primary?.title?.html || '',
              }}
            />
            <Description>{slice.primary.description}</Description>
          </TextWapper>
        </TextArea>
        {image && mobileImage && (
          <ImageArea>
            <Image image={image} alt={slice.primary?.image?.alt || ''} />
            <MobileImage image={mobileImage} alt={slice.primary?.image_mobile?.alt || ''} />
          </ImageArea>
        )}
      </Wrapper>
    </Section>
  );
};

const Section = styled('section', {
  contentArea: false,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',

  '@md': {
    contentArea: true,
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: 0,

  '@md': {
    flexDirection: 'row',
    width: '100%',
    height: rem(680),
    padding: `${rem(80)} 0`,
    margin: 0,
  },

  '@xl': {
    padding: `${rem(160)} 0`,
  },
});

const TextArea = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
  padding: rem(16),
  boxSizing: 'border-box',

  '@md': {
    alignItems: 'flex-start',
    width: '50%',
    height: '100%',
    marginBottom: 0,
    paddingBottom: rem(40),
  },
});

const TextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  alignItems: 'center',

  '@md': {
    alignItems: 'flex-start',
  },
});

const KeyText = styled('span', {
  marginBottom: rem(24),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize300,
});

const Title = styled('div', {
  maxWidth: rem(200),
  color: vars.$scale.color.gray900,

  '@md': {
    maxWidth: rem(370),
  },

  '& h2': {
    fontSize: vars.$scale.dimension.fontSize600,

    '@md': {
      fontSize: vars.$scale.dimension.fontSize900,
    },
  },
});

const Description = styled('p', {
  marginTop: rem(24),
  lineHeight: '150%',
  textAlign: 'left',
  fontSize: vars.$scale.dimension.fontSize300,
  color: vars.$scale.color.gray700,

  '@md': {
    maxWidth: rem(280),
  },

  '@lg': {
    maxWidth: rem(420),
    marginTop: rem(48),
  },
});

const ImageArea = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  padding: '0',
  marginTop: rem(8),

  '@md': {
    width: rem(450),
    marginTop: rem(0),
  },
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  height: 'auto',
  borderRadius: rem(60),

  '@md': {
    display: 'block !important',
  },
});

const MobileImage = styled(GatsbyImage, {
  display: 'block !important',
  width: '100%',
  height: '100%',

  '@md': {
    display: 'none !important',
  },
});

export default HorizontalCard;
