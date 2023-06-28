import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';
import { Link } from 'gatsby';

import CtaButton from '../CtaButton';

type ListCardProps = {
  slice: GatsbyTypes.ListCard;
};

const ListCardSection: React.FC<ListCardProps> = ({ slice }) => {
  return (
    <CultureSection>
      <CultureSectionTitle>당근마켓 팀은 이렇게 일해요</CultureSectionTitle>
      <CardWrapper>
        {slice.items.map((item) => (
          <CultureDescriptionCard key={item?.card_title}>
            <CultureTextWapper>
              <DescritionTitle>{item.card_title}</DescritionTitle>
              <Description>{item.card_description.text}</Description>
            </CultureTextWapper>
            <GraphicWrapper>
              <CultureGraphic
                image={item.card_image.localFile.childImageSharp.gatsbyImageData}
                alt={item.card_image.alt ?? ''}
              />
            </GraphicWrapper>
          </CultureDescriptionCard>
        ))}
        <BlogCard key="cta-to-blog">
          <CultureTextWapper>
            <DescritionTitle>당근마켓 팀 문화는 끊임없이 발전 중이에요</DescritionTitle>
            <CtaButton link="/blog/category/culture/">블로그 글 보러가기</CtaButton>
          </CultureTextWapper>
        </BlogCard>
      </CardWrapper>
    </CultureSection>
  );
};

const CultureSection = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: `${rem(96)} 0`,

  '@sm': {
    margin: `${rem(160)} 0`,
  },
});

const CultureSectionTitle = styled('h2', {
  maxWidth: rem(200),
  marginBottom: rem(32),
  lineHeight: '150%',
  fontSize: vars.$scale.dimension.fontSize600,
  textAlign: 'center',

  '@md': {
    maxWidth: rem(800),
    marginBottom: rem(120),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CardWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: rem(14),
  justifyItems: 'center',

  '@md': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: rem(14),
  },

  '@lg': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: rem(30),
  },
});

const CultureDescriptionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  maxWidth: rem(405),
  height: rem(400),
  padding: `${rem(30)} ${rem(28)}`,
  borderRadius: rem(30),
  border: `1px solid ${vars.$scale.color.gray50}`,
  backgroundColor: vars.$scale.color.gray00,
  boxShadow: '0px 0px 64px 0px rgba(125, 121, 139, 0.15) ',
  boxSizing: 'border-box',

  '@sm': {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: rem(405),
    height: rem(434),
    padding: `${rem(46)} ${rem(50)}`,
  },
});

const CultureTextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 0,

  '@sm': {
    marginBottom: rem(38),
  },
});

const DescritionTitle = styled('h3', {
  marginBottom: rem(16),
  maxWidth: rem(160),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize400,

  '@md': {
    maxWidth: rem(300),
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

const Description = styled('div', {
  maxWidth: rem(500),
  width: '100%',
  lineHeight: '140%',
  textAlign: 'left',
  color: vars.$scale.color.gray700,

  '@md': {
    width: '100%',
    lineHeight: '150%',
  },
});

const GraphicWrapper = styled('div', {
  width: '100%',
});

const CultureGraphic = styled(GatsbyImage, {
  width: rem(64),
  height: rem(64),
  marginBottom: rem(66),

  '@sm': {
    width: rem(108),
    height: rem(108),
    marginBottom: rem(0),
  },
});

const BlogCard = styled(CultureDescriptionCard, {
  backgroundColor: '#FFDD87',
  justifyContent: 'flex-end',

  '@md': {
    justifyContent: 'flex-start',
  },
});

export default ListCardSection;
