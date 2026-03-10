import { getCdnImage } from '@karrotmarket/gatsby-theme-prismic/image-utils';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';
import { SimpleReveal } from 'simple-reveal';

type PrismicTeamContentsDataMainBodyKeyVisualProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyKeyVisual_dataFragment;
  locale?: string;
  className?: string;
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyKeyVisual_data on PrismicTeamContentsDataMainBodyKeyVisual {
    primary {
      key_visual_image {
        alt
        gatsbyImageData(
          layout: FULL_WIDTH
        )
        thumbnails {
          portrait {
            alt
            gatsbyImageData(
              layout: FULL_WIDTH
            )
          }
        }
      }
      description {
        text
      }
      expanded
    }
  }
`;

const Container = styled('section', {
  display: 'grid',
  gridTemplateRows: 'auto auto',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: rem(40),
  width: '100%',

  '@md': {
    contentArea: true,
    gap: rem(48),
  },
});

const ImageContainer = styled('figure', {
  gridFullColumns: true,
  variants: {
    expanded: {
      true: {},
      false: {
        paddingX: rem(24),
      },
    },
  },
});

const Image = styled(GatsbyImage, {
  variants: {
    layout: {
      landscape: {
        display: 'none',
        '@md': {
          display: 'block',
        },
      },
      portrait: {
        display: 'block',
        '@md': {
          display: 'none',
        },
      },
    },
    round: {
      true: {
        borderRadius: rem(30),
        opacity: 0.99,
      },
    },
  },
});

const Description = styled('p', {
  contentArea: true,
  gridColumnStart: 1,
  gridColumnEnd: 'end',

  typography: '$body2',
  fontWeight: 'bold',
  whiteSpace: 'pre-line',
  paddingX: rem(24),

  '@md': {
    typography: '$subtitle2',
    paddingX: rem(0),
  },

  '@lg': {
    gridColumnEnd: 3,
  },
});

const PrismicTeamContentsDataMainBodyKeyVisual: React.FC<
  PrismicTeamContentsDataMainBodyKeyVisualProps
> = ({ data, className, locale }) => {
  if (data.primary == null) {
    return null;
  }

  const image =
    data.primary.key_visual_image?.gatsbyImageData &&
    getCdnImage(data.primary.key_visual_image.gatsbyImageData);

  if (image == null) {
    return null;
  }

  // Note: 선택적으로 art-direction 적용
  // CMS 에서 portrait 추가 이미지 업로드하면 사용, landscape 이미지가 항상 우선 됨
  const portraitImage =
    (data.primary.key_visual_image?.thumbnails?.portrait?.gatsbyImageData &&
      getCdnImage(data.primary.key_visual_image.thumbnails.portrait.gatsbyImageData)) ??
    image;

  return (
    <Container className={className}>
      {image && (
        <ImageContainer expanded={{ '@initial': data.primary.expanded ?? false, '@md': true }}>
          <Image
            layout="landscape"
            // round는 KR에서만 적용
            round={locale === 'ko-kr'}
            image={image}
            alt={data.primary?.key_visual_image?.alt ?? ''}
          />
          <Image
            layout="portrait"
            image={portraitImage}
            alt={data.primary?.key_visual_image?.alt ?? ''}
          />
        </ImageContainer>
      )}
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <Description ref={ref} className={cn()} style={style}>
            {data.primary.description?.text}
          </Description>
        )}
        duration={1000}
        delay={400}
        initialTransform="translateY(2rem)"
      />
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyKeyVisual;
