import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { SimpleReveal } from 'simple-reveal';

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
            <SimpleReveal
              render={({ ref, cn, style }) => (
                <KeyText ref={ref} className={cn()} style={style}>
                  당근의 시작
                </KeyText>
              )}
              duration={1000}
              delay={600}
              initialTransform="translateY(2rem)"
            />
            <SimpleReveal
              render={({ ref, cn, style }) => (
                <Title
                  ref={ref}
                  className={cn()}
                  style={style}
                  dangerouslySetInnerHTML={{
                    __html: slice.primary?.title?.html || '',
                  }}
                />
              )}
              duration={1000}
              delay={800}
              initialTransform="translateY(2rem)"
            />
            <SimpleReveal
              render={({ ref, cn, style }) => (
                <Description ref={ref} className={cn()} style={style}>
                  {slice.primary.description}
                </Description>
              )}
              duration={1000}
              delay={1000}
              initialTransform="translateY(2rem)"
            />
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
  padding: rem(24),
  boxSizing: 'border-box',
  paddingBottom: rem(88),

  '@md': {
    alignItems: 'flex-start',
    width: '50%',
    height: '100%',
    marginBottom: 0,
    paddingBottom: 0,
  },
});

const TextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  alignItems: 'flex-start',
});

const KeyText = styled('span', {
  marginTop: rem(36),
  marginBottom: rem(16),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize300,

  '@sm': {
    marginTop: 0,
  },
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
  marginTop: rem(48),
  lineHeight: '170%',
  textAlign: 'left',
  fontSize: vars.$scale.dimension.fontSize200,
  color: vars.$scale.color.gray700,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize300,
  },

  '@md': {
    maxWidth: rem(280),
  },

  '@lg': {
    maxWidth: rem(420),
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
    width: rem(510),
    marginTop: rem(0),
  },
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  height: 'auto',
  borderRadius: rem(30),
  opacity: 0.99,

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
