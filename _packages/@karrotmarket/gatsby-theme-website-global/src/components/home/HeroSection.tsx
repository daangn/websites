import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import AppLink from '../AppLink';
import PhoneMockupHome from '../phoneMockup/PhoneMockupHome';
import HeroSectionBackground from './HeroSectionBackground';

export const query = graphql`
  fragment HeroSection_content on PrismicGlobalContentsDataMainBodyHeroSection {
    primary {
      title {
        html
      }
      text {
        html
      }
      background_color
      side_image {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: NONE)
          }
        }
        dimensions {
          width
          height
        }
      }
    }
  }
  fragment HeroSection_links on PrismicGlobalContentsDataType {
    ...AppLink_links
  }
`;

type HeroSectionProps = {
  content: GatsbyTypes.HeroSection_contentFragment;
  links: GatsbyTypes.DownloadSection_linksFragment;
};

const HeroSection: React.FC<HeroSectionProps> = ({ content, links }) => {
  if (!(content.primary && links)) return <></>;
  const { title, background_color } = content.primary;

  return (
    <Section css={{ background: background_color }}>
      <HeroSectionBackground />
      <Container>
        <LeftContainer>
          <Title dangerouslySetInnerHTML={{ __html: title?.html }} />
          <AppLink theme="primary" type="desktop" links={links} />
        </LeftContainer>
        <RightContainer>
          <PhoneMockupHome />
        </RightContainer>
      </Container>
    </Section>
  );
};

const Section = styled('section', {
  height: '582px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '@md': {
    height: '780px',
  },
});

const Container = styled('div', {
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textAlign: 'center',
  position: 'relative',
  '@md': {
    width: '$maxContent',
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'initial',
    alignItems: 'initial',
  },
});

const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const RightContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  flex: 1,
});

const Title = styled('div', {
  marginBottom: rem(0),
  '@md': {
    marginBottom: rem(36),
  },
  '*': {
    fontSize: rem(32),
    lineHeight: '120%',
    marginTop: rem(82),

    '@md': {
      fontSize: '$heading1',
      lineHeight: '$heading1',
    },
  },
});

export default HeroSection;
