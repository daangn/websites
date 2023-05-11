import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { styled } from 'gatsby-theme-stitches/src/config';

import PhoneMockupVerify from '../phoneMockup/PhoneMockupVerify';
import PhoneMockupChat from '../phoneMockup/PhoneMockupChat';

import { ReactComponent as WriteIcon } from '../../icons/write.svg';
import { ReactComponent as KeywordIcon } from '../../icons/keyword.svg';
import { ReactComponent as LocationIcon } from '../../icons/location_outline.svg';
import { ReactComponent as ReservationIcon } from '../../icons/reservation.svg';
import { ReactComponent as SearchIcon } from '../../icons/mock-magnifying-glass-solid.svg';
import { ReactComponent as MakeAnOfferIcon } from '../../icons/mock-money-bill-1-wave-regular.svg';
import { ReactComponent as ChatIcon } from '../../icons/mock-comments-solid.svg';
import { ReactComponent as MeetUpIcon } from '../../icons/mock-handshake-solid.svg';
import { vars } from '@seed-design/design-token';

export const query = graphql`
  fragment MockupSection_content on PrismicGlobalContentsDataMainBodyMockupSection {
    primary {
      text {
        html
      }
      background_color
      text_highlight_color
      phone_mockup_component
      inverted
    }
    items {
      icon
      text
    }
  }
`;

type PhoneMockupType = 'PhoneMockupVerify' | 'PhoneMockupChat';
const PhoneMockup: { [key in PhoneMockupType]: React.FC } = {
  PhoneMockupVerify,
  PhoneMockupChat,
};

type MockupIconType =
  | 'Keyword'
  | 'Location'
  | 'Reservation'
  | 'Write'
  | 'Search'
  | 'MakeAnOffer'
  | 'Chat'
  | 'MeetUp';
const MockupIcon: { [key in MockupIconType]: React.FC } = {
  Keyword: KeywordIcon,
  Location: LocationIcon,
  Reservation: ReservationIcon,
  Write: WriteIcon,
  Search: SearchIcon,
  MakeAnOffer: MakeAnOfferIcon,
  Chat: ChatIcon,
  MeetUp: MeetUpIcon,
};

type MockupSectionProps = {
  content: GatsbyTypes.MockupSection_contentFragment;
};

const MockupSection: React.FC<MockupSectionProps> = ({ content }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.55 });

  if (!(content.primary && content.items)) return <></>;

  const { text, background_color, text_highlight_color, phone_mockup_component, inverted } =
    content.primary;

  const PhoneMockupComponent: React.FC<{ inView?: boolean }> =
    PhoneMockup[phone_mockup_component as PhoneMockupType];

  return (
    <Section css={{ background: background_color }} ref={ref}>
      <Container inverted={inverted}>
        <LeftContainer>
          <Text
            dangerouslySetInnerHTML={{ __html: text.html }}
            css={{
              highlightColor: text_highlight_color,
            }}
          />
          <Grid>
            {content.items.map((info, i) => {
              const Icon = MockupIcon[info?.icon as MockupIconType];
              return (
                // rome-ignore lint/suspicious/noArrayIndexKey: will be removed soon
                <InfoContainer key={i}>
                  {Icon && <Icon />}
                  <span>{info?.text}</span>
                </InfoContainer>
              );
            })}
          </Grid>
        </LeftContainer>
        <RightContainer>
          <div ref={ref}>
            <PhoneMockupComponent inView={inView} />
          </div>
        </RightContainer>
      </Container>
    </Section>
  );
};

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'max-content',
  gridRowGap: rem(10),
  gridColumnGap: rem(0),
  marginTop: rem(16),
  marginBottom: rem(36),

  '@md': {
    gridTemplateColumns: 'repeat(2, max-content)',
    gridRowGap: rem(16),
    gridColumnGap: rem(30),
    marginTop: rem(40),
    marginBottom: rem(0),
  },
});

const Section = styled('section', {
  width: '100%',
  '@md': {
    height: '700px',
  },
});

const Container = styled('div', {
  display: 'flex',
  margin: '0 auto',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  padding: `${rem(56)} ${rem(26)}`,

  variants: {
    inverted: {
      true: {
        flexDirection: 'column',
        '@md': {
          flexDirection: 'row',
        },
      },
      false: {
        flexDirection: 'column',
        '@md': {
          flexDirection: 'row-reverse',
        },
      },
    },
  },

  '@md': {
    width: '$maxContent',
    flexDirection: 'row',
    textAlign: 'left',
    padding: 0,
    justifyContent: 'space-between',
  },
});

const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@md': {
    alignItems: 'flex-start',
  },
});

const RightContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  '@md': {
    justifyContent: 'flex-start',
  },
});

const InfoContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, max-content)',
  gridColumnGap: rem(5),

  span: {
    opacity: 0.6,
    alignItems: 'center',
  },

  svg: {
    width: rem(24),
    height: rem(24),
    opacity: 0.6,
    marginRight: rem(4),
    path: {
      fill: vars.$scale.color.gray900,
    },
  },
});

const Text = styled('div', {
  '*': {
    fontSize: '$subtitle2',
    lineHeight: '$subtitle2',
    '@md': {
      fontSize: '$heading3',
      lineHeight: '$heading3',
    },
  },
});

export default MockupSection;
