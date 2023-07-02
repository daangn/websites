import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { SimpleReveal } from 'simple-reveal';

type VerticalCardProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyVerticalCard;
};

const VerticalCard: React.FC<VerticalCardProps> = ({ slice }) => {
  const image =
    slice.primary?.full_width_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.full_width_image.localFile.childImageSharp.gatsbyImageData);

  const mobileImage =
    slice.primary?.image_mobile?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.image_mobile.localFile.childImageSharp.gatsbyImageData);

  return (
    <Section>
      <Wrapper>
        <ImageWrapper>
          {image && mobileImage && (
            <>
              <Image image={image} alt={slice.primary?.full_width_image?.alt || ''} />
              <MobileImage image={mobileImage} alt={slice.primary?.image_mobile?.alt || ''} />
            </>
          )}
        </ImageWrapper>
        <TextWapper>
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
            delay={1200}
            initialTransform="translateY(2rem)"
          />
          <SimpleReveal
            render={({ ref, cn, style }) => (
              <Description ref={ref} className={cn()} style={style}>
                {slice.primary.description}
              </Description>
            )}
            duration={1000}
            delay={1400}
            initialTransform="translateY(2rem)"
          />
        </TextWapper>
      </Wrapper>
    </Section>
  );
};

const Section = styled('section', {
  position: 'relative',
  width: '100%',
  height: rem(536),
  margin: `${rem(40)} 0`,
  boxSizing: 'border-box',

  '@md': {
    height: rem(450),
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-end',
  width: '100%',

  '@md': {
    flexDirection: 'column',
  },
});

const ImageWrapper = styled('div', {
  position: 'absolute',
  objectFit: 'cover',
  top: 0,
  left: 0,
  zIndex: 1,

  display: 'flex',
  width: '100%',
  height: '100%',
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  height: rem(450),
  border: 'none',
  objectFit: 'cover',

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

const TextWapper = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  color: vars.$scale.color.gray00,
});

const Title = styled('div', {
  width: '100%',
  maxWidth: rem(220),
  marginBottom: rem(24),

  '@sm': {
    maxWidth: rem(800),
  },

  '& h2': {
    fontSize: vars.$scale.dimension.fontSize600,

    '@md': {
      fontSize: vars.$scale.dimension.fontSize900,
    },
  },
});

const Description = styled('p', {
  width: '100%',
  maxWidth: rem(250),
  lineHeight: '170%',
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize200,

  '@sm': {
    maxWidth: rem(500),
    fontSize: vars.$scale.dimension.fontSize300,
  },
});

export default VerticalCard;
