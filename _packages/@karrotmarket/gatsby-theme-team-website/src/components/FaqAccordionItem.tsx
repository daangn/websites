import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { motion } from 'framer-motion';
import { vars } from '@seed-design/design-token';

import { ReactComponent as ChevronSvg } from './faqAccordionItem/chevron.svg'

type FaqAccordionItemProps = {
  id: string,
  entry: GatsbyTypes.TeamWebsite_FaqAccordionItem_entryFragment,
  className?: string,
  open?: boolean,
  onClick?: (id: string) => void,
  onFocus?: (id: string) => void,
};

export const query = graphql`
  fragment TeamWebsite_FaqAccordionItem_entry on PrismicFaqDataEntries {
    question
    answer {
      text
      html
    }
  }
`;

const Container = styled('div', {
  borderBottom: `1px solid ${vars.$scale.color.gray200}`,
});

const Header = styled('h2', {
  display: 'flex',
  typography: '$subtitle3',

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
  color: vars.$scale.color.gray900,
  border: 'none',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ChevronIcon = styled(ChevronSvg, {
  width: rem(24),
  height: rem(24),
  transition: 'transform .3s',
  marginLeft: rem(12),
  color: vars.$scale.color.gray900,

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
  fontSize: '$body2',
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
          <ChevronIcon rotate={open} aria-hidden />
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
