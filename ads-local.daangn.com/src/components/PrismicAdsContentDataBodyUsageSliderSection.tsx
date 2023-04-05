import * as React from 'react';
import TextLoop from 'react-text-loop';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type Props = {
  data: GatsbyTypes.PrismicAdsContentDataBodyUsageSliderSection_dataFragment;
};

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyUsageSliderSection_data on PrismicAdsContentDataBodyUsageSliderSection {
    primary {
      section_id 
      date(formatString: "YYYY.MM 기준")
    }
    items {
      region
      visitor_count
    }
  }
`;

const intl = new Intl.NumberFormat('ko');

export default function PrismicAdsContentDataBodyUsageSliderSection({ data }: Props) {
  const items = data.items.filter((item) => item.region || item.visitor_count);
  return (
    <Container id={data.primary.section_id || undefined}>
      <Wrapper>
        <TextContainer>
          <span>
            <TextLoop interval={3000}>
              {items.map((item, i) => (
                // rome-ignore lint/suspicious/noArrayIndexKey: 컨텐츠 정적이라 괜찮음
                <React.Fragment key={i}>
                  {/* rome-ignore lint/style/noNonNullAssertion: intentional */}
                  <Region>{item.region!}</Region>
                  <p>{' 근처 '}</p>
                  {/* rome-ignore lint/style/noNonNullAssertion: intentional */}
                  <ColoredText>{`${intl.format(item.visitor_count!)}명`}</ColoredText>
                </React.Fragment>
              ))}
            </TextLoop>
          </span>
          <p>이 매 주 당근마켓을 방문하고 있어요.</p>
        </TextContainer>
        {data.primary?.date && (
          <TextContainer end>
            <Caption>{data.primary.date}</Caption>
          </TextContainer>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: rem(200),
  backgroundColor: vars.$semantic.color.paperDefault,
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const TextContainer = styled('div', {
  display: 'grid',
  gridTemplateRows: 'repeat(4, auto)',
  justifyItems: 'center',
  alignItems: 'center',
  variants: {
    end: {
      true: {
        alignSelf: 'center',
        '@md': {
          alignSelf: 'flex-end',
        },
      },
    },
  },
  '@md': {
    gridTemplateColumns: 'repeat(4, auto)',
    gridTemplateRows: 'auto auto',
  },
  p: {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '$subtitle3',
    '@md': {
      fontSize: '$subtitle2',
    },
    paddingBottom: rem(8),
  },
  span: {
    paddingBottom: rem(8),
  },
});

const Region = styled('p', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
});

const ColoredText = styled('p', {
  fontSize: '$subtitle2',
  paddingTop: rem(5),
  paddingBottom: rem(5),
  color: vars.$semantic.color.primary,
  fontWeight: 'bold',
});

const Caption = styled('div', {
  fontSize: '$caption3',

  '@md': {
    fontSize: '$caption2',
  },
  color: '#ADB1BA',
});
