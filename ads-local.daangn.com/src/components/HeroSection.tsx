import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

import DownloadLinkButtonPlayStore from './DownloadLinkButtonPlayStore';
import DownloadLinkButtonAppStore from './DownloadLinkButtonAppStore';

export const fragment = graphql`
  fragment HeroSection_data on PrismicAdsContentDataType {
    hero_title {
      text
    }
    hero_image {
      alt
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
      thumbnails {
        pc_main {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    appstore_app_id
    playstore_app_id
  }
`;

type Props = {
  data: GatsbyTypes.HeroSection_dataFragment,
};

export default function HeroSection({
  data,
}: Props) {
  const defaultImage = (data.hero_image?.localFile?.childImageSharp?.gatsbyImageData && getImage(data.hero_image.localFile.childImageSharp.gatsbyImageData))!;
  const pcMainImage = (data.hero_image?.thumbnails.pc_main?.localFile?.childImageSharp?.gatsbyImageData && getImage(data.hero_image.thumbnails.pc_main.localFile.childImageSharp.gatsbyImageData))!;

  return (
    <Root>
      <DefaultBackground
        image={defaultImage}
        alt={data.hero_image?.alt || ''}
        loading="lazy"
      />
      <PcMainBackground
        image={pcMainImage}
        alt={data.hero_image?.thumbnails.pc_main?.alt || ''}
        loading="lazy"
      />
      <Content>
        <HeroTitle>
          {data.hero_title.text || ''}
        </HeroTitle>
        <ButtonContainer>
          <DownloadLinkButtonPlayStore id="google_top" />
          <DownloadLinkButtonAppStore id="apple_top" />
        </ButtonContainer>
      </Content>
    </Root>
  );
}

const Root = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  height: rem(600),

  '@md': {
    height: 780,
  },
});

const DefaultBackground = styled(GatsbyImage, {
  pointerEvents: 'none',
  userSelect: 'none',
  '&&': {
    '@md': {
      display: 'none',
    },
  },
});

const PcMainBackground = styled(GatsbyImage, {
  pointerEvents: 'none',
  userSelect: 'none',
  '&&': {
    display: 'none',

    '@md': {
      display: 'inline-block',
    },
  },
});

const Content = styled('div', {
  contentArea: true,
  width: '100%',
  position: 'absolute',
  top: rem(100),
  textAlign: 'center',

  '@md': {
    top: '36%',
    paddingLeft: '5rem',
    textAlign: 'left',
  },

  '@xl': {
    paddingLeft: '1.5rem',
  },
});

const HeroTitle = styled('h1', {
  typography: '$subtitle1',
  wordBreak: 'keep-all',
  whiteSpace: 'initial',

  '@md': {
    typography: '$heading3',
    whiteSpace: 'pre-line',
  },
});

const ButtonContainer = styled('div', {
  display: 'none',

  '@md': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: rem(8),
    marginTop: 35,
  },
});

const DownloadLink = styled('a', {
  display: 'inline-block',
  height: rem(52),

  '& > svg': {
    height: '100%',
  },
});
