import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { motion } from 'framer-motion';

import chevronIconUrl from '!!file-loader?modules!./faqAccordionItem/chevron.svg';

type FaqAccordionItemProps = {
  id: string,
  entry: GatsbyTypes.FaqAccordionItem_entryFragment,
  className?: string,
  open?: boolean,
  onClick?: (id: string) => void,
  onFocus?: (id: string) => void,
};

export const query = graphql`
  fragment FaqAccordionItem_entry on PrismicFaqDataEntries {
    question
    answer {
      html
    }
  }
`;

const Container = styled('div', {
  borderBottom: '1px solid $gray200',
});

const Header = styled('h2', {
  display: 'flex',
  typography: '$body2',

  '@sm': {
    fontSize: '$subtitle3',
  },
});

const Button = styled('button', {
  font: 'inherit',
  textAlign: 'left',
  outline: 'none',
  paddingLeft: 0,
  paddingRight: rem(12),
  paddingY: rem(24),
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ChevronIcon = styled('img', {
  width: rem(24),
  height: rem(24),
  transition: 'transform .3s',
  marginLeft: rem(12),

  variants: {
    rotate: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

const Panel = styled('div', {
  overflow: 'hidden',
});

const Content = styled('div', {
  paddingX: rem(12),
  paddingY: rem(32),
  '> p:not(:last-child)': {
    marginBottom: rem(40),
  },
});

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

const transition = {
  duration: 0.8,
  ease: [0.04, 0.62, 0.23, 0.98],
};

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  id,
  entry,
  className,
  onClick,
  onFocus,
  open = false,
}) => {
  return (
    <Container className={className}>
      <Header as="h2">
        <Button id={id} onClick={() => onClick?.(id)} onFocus={() => onFocus?.(id)}>
          {entry.question}
          <ChevronIcon rotate={open} src={chevronIconUrl} alt="" aria-hidden />
        </Button>
      </Header>
      <Panel>
        <motion.div
          variants={variants}
          transition={transition}
          initial="collapsed"
          animate={open ? 'open' : 'collapsed'}
        >
          <Content aria-hidden={!open} dangerouslySetInnerHTML={{ __html: entry.answer?.html || '' }} />
        </motion.div>
      </Panel>
    </Container>
  );
};

export default FaqAccordionItem;
