import { PrismicRichText } from '@prismicio/react';

import { vars } from '@seed-design/design-token';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

type FullImageProps = {
  slice: GatsbyTypes.FullImage;
};

const FullImageSection: React.FC<FullImageProps> = ({ slice }) => {
  return (
    <HeroImageSection>
      <Image
        image={slice.primary.full_image.localFile.childImageSharp.gatsbyImageData}
        alt={slice.primary.full_image.alt}
      />
      <TextWrapper>
        <PrismicRichText
          field={slice.primary.full_image_text.richText}
          components={{
            paragraph: ({ children, key }) => <Paragraph key={key}>{children}</Paragraph>,
            heading1: ({ children, key }) => <Heading1 key={key}>{children}</Heading1>,
            heading2: ({ children, key }) => <Heading2 key={key}>{children}</Heading2>,
            heading3: ({ children, key }) => <Heading3 key={key}>{children}</Heading3>,
            heading4: ({ children, key }) => <Heading4 key={key}>{children}</Heading4>,
            heading5: ({ children, key }) => <Heading5 key={key}>{children}</Heading5>,
          }}
        />
      </TextWrapper>
    </HeroImageSection>
  );
};

const HeroImageSection = styled('section', {
  width: 'auto',
  height: 'calc(100vh - 58px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

  '@sm': {
    height: 'calc(100vh - 68px)',
  },
});

const Image = styled(GatsbyImage, {
  width: 'auto',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(50%)',
});

const TextWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  color: vars.$scale.color.gray00,
});

const Paragraph = styled('p', {
  padding: `0 ${rem(16)}`,
  fontSize: vars.$scale.dimension.fontSize400,
  fontWeight: 400,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize600,
  },
});

const Heading1 = styled('h1', {
  padding: `0 ${rem(16)}`,
  fontSize: vars.$scale.dimension.fontSize700,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const Heading2 = styled('h2', {
  fontSize: vars.$scale.dimension.fontSize600,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize800,
  },
});

const Heading3 = styled('h3', {
  fontSize: vars.$scale.dimension.fontSize500,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

const Heading4 = styled('h4', {
  fontSize: vars.$scale.dimension.fontSize400,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize600,
  },
});

const Heading5 = styled('h5', {
  fontSize: vars.$scale.dimension.fontSize400,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize500,
  },
});

export default FullImageSection;
