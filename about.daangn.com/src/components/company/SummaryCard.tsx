import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type SummaryCardProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodySummaryCard;
};

const SummaryCard: React.FC<SummaryCardProps> = ({ slice }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>당근마켓은 더 큰 꿈을 향해달리고 있어요</Title>
      </TitleWrapper>
      <CardWrapper>
        {slice.items.map((item) => (
          <Card key={item.summary_text}>
            <CardText>{item.summary_text}</CardText>
            <IconWrapper>
              <IconImage
                src={item.graphic_image?.localFile?.publicURL || ''}
                alt={item.graphic_image?.alt || ''}
              />
            </IconWrapper>
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

const Container = styled('section', {
  contentArea: true,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  marginBottom: rem(160),
});

const TitleWrapper = styled('div', {
  width: '100%',
  textAlign: 'left',
});

const Title = styled('h2', {
  maxWidth: rem(300),
  margin: `${rem(40)} 0`,
  marginBottom: rem(60),
  fontSize: vars.$scale.dimension.fontSize700,

  '@md': {
    maxWidth: rem(400),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(20),
  width: '100%',
  // maxWidth: rem(800),

  '@lg': {
    // gap: rem(35),
    // maxWidth: rem(1000),
  },
});

const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: rem(280),
  height: rem(180),
  padding: rem(16),
  backgroundColor: vars.$scale.color.gray100,
  borderRadius: rem(18),
  boxSizing: 'border-box',

  // '@sm': {
  //   maxWidth: rem(280),
  //   height: rem(180),
  // },

  '@md': {
    maxWidth: rem(360),
    height: rem(220),
  },

  '@lg': {
    maxWidth: rem(550),
    height: rem(340),
    padding: rem(35),
    borderRadius: rem(24),
  },
});

const CardText = styled('h3', {
  maxWidth: rem(160),
  fontSize: vars.$scale.dimension.fontSize400,

  '@md': {
    maxWidth: rem(260),
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

const IconWrapper = styled('div', {
  width: '100%',
  height: rem(50),
  textAlign: 'right',

  '@md': {
    width: '100%',
    height: rem(100),
  },
});

const IconImage = styled('img', {
  height: '100%',
});

export default SummaryCard;
