import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';

type ListCardProps = {
  slice: GatsbyTypes.ListCard;
};

const ListCardSection: React.FC<ListCardProps> = ({ slice }) => {
  return (
    <CultureSection>
      <CultureSectionTitle>{slice.primary.list_card_title}</CultureSectionTitle>
      {slice.items.map((item) => (
        <CultureDescriptionCard key={item?.card_title}>
          <GraphicWrapper>
            <CultureGraphic
              image={item.card_image.localFile.childImageSharp.gatsbyImageData}
              alt={item.card_image.alt ?? ''} />
          </GraphicWrapper>
          <CultureTextWapper>
            <DescritionTitle>{item.card_title}</DescritionTitle>
            <Description
              dangerouslySetInnerHTML={{
                __html: item.card_description.html || '',
              }}
            />
          </CultureTextWapper>
        </CultureDescriptionCard>
      ))}
    </CultureSection>
  );
};

const CultureSection = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: rem(120),
});

const CultureSectionTitle = styled('h1', {
  margin: `${rem(72)} 0`,
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize800,
  },
});

const CultureDescriptionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: rem(800),
  width: '90%',
  padding: rem(20),
  marginBottom: rem(40),
  borderRadius: rem(16),
  backgroundColor: vars.$scale.color.gray00,

  '@md': {
    flexDirection: 'row',
    backgroundColor: vars.$scale.color.gray100,
    padding: rem(40),
  },
});

const CultureTextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: rem(10),

  '@md': {
    paddingLeft: rem(50),
  },
});

const DescritionTitle = styled('h2', {
  marginBottom: rem(12),
  fontSize: '$subtitle4',

  '@md': {
    fontSize: '$subtitle2',
  },
});

const Description = styled('div', {
  maxWidth: rem(600),
  width: '100%',
  lineHeight: '150%',
  textAlign: 'left',
  // textJustify: 'distribute',
  // wordBreak: 'break-all',
  // textAlignLast: 'left',
  // '-moz-text-align-last': 'left',

  '@md': {
    width: '100%',
  },
});

const GraphicWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minWidth: rem(180),

  '@md': {
    width: '10%',
  },
});

const CultureGraphic = styled(GatsbyImage, {
  width: rem(200),
  height: rem(200),
  marginBottom: rem(20),

  '@md': {
    marginBottom: rem(0),
  },
});

export default ListCardSection;
