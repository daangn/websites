import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type InvestorsSectionProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyInvestorsSection;
};

const InvestorsSection: React.FC<InvestorsSectionProps> = ({ slice }) => {
  return (
    <Container>
      <Title
        dangerouslySetInnerHTML={{
          __html: slice?.primary.title?.html || '',
        }}
      />
      <LogoWapper>
        {slice.items.map((item) => (
          <Logo src={item?.image?.localFile?.publicURL || ''} alt={item?.image?.alt || ''} />
        ))}
      </LogoWapper>
    </Container>
  );
};

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',

  backgroundColor: '#EBF7FA',
  marginTop: rem(80),
  paddingBottom: rem(60),

  '@md': {
    height: '100vh',
    marginTop: 0,
    paddingBottom: 0,
  },
});

const Title = styled('div', {
  width: rem(300),
  margin: `${rem(40)} 0`,
  marginBottom: rem(60),
  paddingTop: rem(40),
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize300,

  '@md': {
    width: '100%',
    paddingTop: 0,
    fontSize: vars.$scale.dimension.fontSize500,
  },
});

const LogoWapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: rem(400),
  gap: rem(10),
  padding : `${rem(30)} ${rem(40)}`,

  '@md': {
    gap: rem(20),
    maxWidth: rem(700),
    justifyContent: 'center',
  },

  '@xl': {
    gap: rem(50),
    padding : `${rem(40)} ${rem(200)}`,
  },
});

const Logo = styled('img', {
  width: rem(140),
  mexHeight: rem(100),
  objectFit: 'contain',

  '@sm': {
    width: rem(180),
    mexHeight: rem(100),
  },

  '@md': {
    width: rem(200),
    mexHeight: rem(100),
  },
});

export default InvestorsSection;
