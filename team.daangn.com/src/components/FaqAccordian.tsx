import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { AnimatePresence } from 'framer-motion';
import * as RadixAccordion from '@radix-ui/react-accordion';

import FaqAccordianItem from './FaqAccordianItem';

type FaqAccordianProps = {
  className?: string,
  faq: GatsbyTypes.FaqAccordian_faqFragment,
};

export const query = graphql`
  fragment FaqAccordian_faq on Faq {
    entries {
      ...FaqAccordianItem_entry
    }
  }
`;

const Container = styled('div', {
  minHeight: '100vh',
});

type State = {
  lastAction: Action['type'] | '',
  id: string,
};

type Action = (
  | {
    type: 'CLICK',
    id: string,
  }
  | {
    type: 'FOCUS',
    id: string,
  }
);

const initialState: State = {
  lastAction: '',
  id: '',
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  const reset = state.id === action.id && state.lastAction === action.type;
  return reset ? initialState : {
    lastAction: action.type,
    id: action.id,
  };
};

export default function FaqAccordian({
  className,
  faq,
}: FaqAccordianProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container className={className}>
      <AnimatePresence initial={false}>
        {faq.entries.map(entry => (
          <FaqAccordianItem
            key={entry.id}
            entry={entry}
            open={state.id === entry.id}
            onClick={() => dispatch({ type: 'CLICK', id: entry.id})}
            onFocus={() => dispatch({ type: 'FOCUS', id: entry.id})}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
}
