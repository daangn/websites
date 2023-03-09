import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { vars } from '@seed-design/design-token';

import ArrowLink from './ArrowLink';

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyUserStorySection_data on PrismicAdsContentDataBodyUserStorySection {
    primary {
      section_id
      section_title {
        text
      }
    }

    items {
      user_story {
        text
      }

      goto_text goto_link {
        url
      }

      background_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 500
              placeholder: BLURRED
            )
          }
        }

        thumbnails {
          mobile {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  height: 576
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;

type Props = {
  data: GatsbyTypes.PrismicAdsContentDataBodyUserStorySection_dataFragment;
};

export default function PrismicAdsContentDataBodyUserStorySection({
  data: { primary, items },
}: Props) {
  const parseLink = useLinkParser();
  const [slide, setSlide] = React.useState(0);

  const validItems = React.useMemo(() => {
    const validItems: Array<typeof items[number]> = [];
    for (const item of items) {
      if (
        !(
          item.background_image?.localFile?.childImageSharp &&
          item.background_image.thumbnails?.mobile?.localFile?.childImageSharp
        )
      ) {
        console.error('some slide has no image');
        continue;
      }
      validItems.push(item);
    }
    return validItems;
  }, [items]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (_) => {
      setSlide((prev) => Math.min(prev + 1, validItems.length - 1));
    },
    onSwipedRight: (_) => {
      setSlide((prev) => Math.max(prev - 1, 0));
    },
    trackMouse: true,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide + 1) % validItems.length);
    }, 5 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [slide, validItems.length]);

  return (
    <Container id={primary.section_id || undefined} {...swipeHandlers}>
      <SrOnly>{primary.section_title?.text || ''}</SrOnly>
      <Camera>
        <Track
          css={{
            $$slide: slide,
          }}
        >
          {validItems.map((item, i) => {
            const image = (item.background_image?.localFile?.childImageSharp?.gatsbyImageData &&
              getImage(item.background_image.localFile.childImageSharp.gatsbyImageData))!;
            const mobileImage = (item.background_image?.thumbnails?.mobile?.localFile
              ?.childImageSharp?.gatsbyImageData &&
              getImage(
                item.background_image.thumbnails.mobile.localFile.childImageSharp.gatsbyImageData,
              ))!;

            return (
              <UserStoryItem>
                <UserStoryBackground
                  wide={true}
                  image={image}
                  alt={item.background_image?.alt || ''}
                />
                <UserStoryBackground
                  wide={false}
                  image={mobileImage}
                  alt={item.background_image?.thumbnails?.mobile?.alt || ''}
                />
                <UserStoryContainer>
                  <UserStoryQuote>{item.user_story?.text || ''}</UserStoryQuote>
                  <UserStoryLink link={parseLink(item.goto_link?.url || '#')} id={`user_story_${i+1}`}>
                    {item.goto_text || '사장님 이야기'}
                  </UserStoryLink>
                </UserStoryContainer>
              </UserStoryItem>
            );
          })}
        </Track>
      </Camera>
      <Dots>
        {items.map((_, i) => (
          <Dot
            // rome-ignore lint/suspicious/noArrayIndexKey: intentional
            key={i}
            aria-label={`carousel button index ${i + 1}`}
            active={slide === i}
            onClick={() => setSlide(i)}
          />
        ))}
      </Dots>
    </Container>
  );
}

const Container = styled('section', {
  contentArea: true,
  position: 'relative',
  display: 'grid',
  boxSizing: 'border-box',
  maxWidth: '100vw',
  paddingX: 0,
});

const SrOnly = styled('h2', {
  position: 'absolute',
  overflow: 'hidden',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0,0,0,0)',
});

const Camera = styled('div', {
  overflowX: 'hidden',
});

const Track = styled('div', {
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(calc(-100% * $$slide))',
  '& > *': {
    flexShrink: 0,
    width: '100%',
  },
});

const Dots = styled('div', {
  position: 'absolute',
  display: 'flex',
  gap: rem(24),
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  bottom: rem(32),
});

const Dot = styled('button', {
  position: 'relative',
  borderRadius: '100%',
  border: `1px solid ${vars.$static.color.staticWhite}`,
  width: rem(10),
  height: rem(10),
  padding: 0,
  background: 'transparent',
  cursor: 'pointer',

  '&::after': {
    content: '',
    position: 'absolute',
    left: '-10px',
    right: '-10px',
    top: '-10px',
    bottom: '-10px',
  },

  variants: {
    active: {
      true: {
        background: vars.$static.color.staticWhite,
      },
    },
  },
});

const UserStoryItem = styled('div', {
  $$minHeight: rem(576),

  position: 'relative',
  display: 'flex',
  alignItems: 'end',
  height: '$$minHeight',

  '@lg': {
    $$minHeight: rem(500),
    alignItems: 'center',
    justifyContent: 'end',
  },
});

const UserStoryContainer = styled('div', {
  contentArea: true,

  position: 'absolute',
  display: 'grid',
  width: '100%',
  gap: '1.5rem',
  marginBottom: '5rem',

  '@lg': {
    width: '40%',
    marginBottom: 0,
  },
});

const UserStoryQuote = styled('blockquote', {
  typography: '$subtitle3',
  fontWeight: 'bold',
  color: vars.$static.color.staticWhite,

  '@lg': {
    typography: '$subtitle2',
    whiteSpace: 'pre-line',
  },
});

const UserStoryBackground = styled(GatsbyImage, {
  minHeight: '$$minHeight',

  userSelect: 'none',
  pointerEvents: 'none',

  '&&': {
    position: 'absolute',
    width: '100%',
  },

  variants: {
    wide: {
      true: {
        '&&': {
          display: 'none',
          '@lg': {
            display: 'block',
          },
        },
      },
      false: {
        '&&': {
          display: 'inline-block',
          '@lg': {
            display: 'none',
          },
        },
      },
    },
  },
});

const UserStoryLink = styled(ArrowLink, {
  typography: '$body3',
  color: vars.$static.color.staticWhite,

  '@lg': {
    typography: '$body1',
  },
});
