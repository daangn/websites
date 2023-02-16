import * as React from 'react';
import { rem } from 'polished';
import { motion, LayoutGroup } from 'framer-motion';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token'

type PrismicTeamContentsDataMainBodyHowWeWorkProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyHowWeWork_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyHowWeWork_data on PrismicTeamContentsDataMainBodyHowWeWork {
    primary {
      title {
        text
      }
    }
    items {
      group
      key_text
      description {
        text
      }
    }
  }
`;

const Container = styled('article', {
  contentArea: true,
  width: '100%',
  display: 'grid',
  gap: rem(64),

  '@md': {
    gap: rem(100),
  },
});

const Header = styled('header', {
  display: 'grid',
  gap: rem(32),
});

const Title = styled('h1', {
  typography: '$subtitle2',
  '@md': {
    typography: '$heading4',
  },
});

const Body = styled('div', {
  display: 'flex',
  overflowX: 'hidden',
  flexDirection: 'column',
  gap: rem(80),

  '@md': {
    flexDirection: 'row',
    gap: rem(0),
  },

  '& > *': {
    flexShrink: 0,
    width: '100%',
  },
});

const EntryGroupNav = styled('nav', {
  display: 'none',

  '@md': {
    display: 'block',
  },
});

const EntryGroupNavList = styled('ul', {
  display: 'flex',
  gap: rem(32),
  listStyle: 'none',
  paddingLeft: 0,
});

const EntryGroupNavListItem = styled('li', {
  position: 'relative',
  display: 'grid',
  paddingBottom: rem(8),
});

const EntryGroupNavButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  typography: '$subtitle3',
  variants: {
    active: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
});

const EntryGroupNavUnderline = styled(motion.div, {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '3px',
  background: vars.$scale.color.carrot500,
});

const EntryGroup = styled('section', {
  display: 'grid',
  gap: rem(40),
});

const EntryGroupTitle = styled('h2', {
  typography: '$body2',
  color: vars.$scale.color.carrot500,

  '@md': {
    display: 'none',
  },
});

const Entries = styled('div', {
  display: 'grid',
  width: '100%',
  gap: rem(40),

  '@md': {
    gridTemplateColumns: '1fr 1fr',
    gap: `${rem(20)} ${rem(35)}`,
  },

  '@xl': {
    gap: `${rem(80)} ${rem(140)}`,
  },
});

const Entry = styled('section', {
  display: 'grid',
  gridTemplateRows: 'min-content',
  gap: rem(16),

  '@md': {
    gap: rem(24),
  },
});

const EntryTitle = styled('h3', {
  typography: '$subtitle3',

  '@md': {
    typography: '$subtitle1',
  },
});

const EntryDescription = styled('p', {
  typography: '$body2',
  color: vars.$scale.color.gray700,
});

const PrismicTeamContentsDataMainBodyHowWeWork: React.FC<PrismicTeamContentsDataMainBodyHowWeWorkProps> = ({
  data,
}) => {
  const [slide, setSlide] = React.useState(0);

  type ItemAggregation = {
    [group: string]: Array<{
      keyText: string,
      description: string,
    }>,
  };

  const itemAggregation = (data.items || []).reduce((state, item) => {
    if (!(item.group && item.key_text && item.description)) {
      return state;
    }

    const entry = {
      keyText: item.key_text,
      description: item.description.text,
    };

    void (state[item.group]
      ? state[item.group].push(entry)
      : state[item.group] = [entry]
    );

    return state;
  }, {} as ItemAggregation);

  return (
    <Container>
      <Header>
        <Title>
          {data.primary?.title?.text}
        </Title>
        <EntryGroupNav aria-hidden="true">
          <EntryGroupNavList>
            <LayoutGroup>
              {Object.entries(itemAggregation).map(([group], i) => (
                <EntryGroupNavListItem key={group}>
                  <EntryGroupNavButton
                    onClick={() => setSlide(i)}
                    active={i === slide}
                  >
                    {group}
                  </EntryGroupNavButton>
                  {i === slide && (
                    <EntryGroupNavUnderline layoutId="how-we-work-underline" />
                  )}
                </EntryGroupNavListItem>
              ))}
            </LayoutGroup>
          </EntryGroupNavList>
        </EntryGroupNav>
      </Header>
      <Body>
        {Object.entries(itemAggregation).map(([group, entries], i) => (
          <EntryGroup
            key={group}
            aria-hidden={i !== slide}
            css={{
              '@md': {
                transition: 'transform 0.3s ease-in-out',
                transform: `translateX(calc(-100% * ${slide}))`,
              },
            }}
          >
            <EntryGroupTitle>{group}</EntryGroupTitle>
            <Entries>
              {entries.map((entry, i) => (
                <Entry key={i}>
                  <EntryTitle>{entry.keyText}</EntryTitle>
                  <EntryDescription>{entry.description}</EntryDescription>
                </Entry>
              ))}
            </Entries>
          </EntryGroup>
        ))}
      </Body>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyHowWeWork;
