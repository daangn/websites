import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { AnimatePresence } from 'framer-motion';

import FaqAccordionItem from './FaqAccordionItem';

type FaqAccordionProps = {
  className?: string,
  faq: GatsbyTypes.FaqAccordion_faqFragment,
};

export const query = graphql`
  fragment FaqAccordion_faq on Faq {
    entries {
      ...FaqAccordionItem_entry
    }
  }
`;

const Container = styled('div', {
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

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  className,
  faq,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container className={className}>
      <AnimatePresence initial={false}>
        {faq.entries.map(entry => (
          <FaqAccordionItem
            key={entry.id}
            entry={entry}
            open={state.id === entry.id}
            onClick={() => dispatch({ type: 'CLICK', id: entry.id })}
            onFocus={() => dispatch({ type: 'FOCUS', id: entry.id })}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default FaqAccordion;
