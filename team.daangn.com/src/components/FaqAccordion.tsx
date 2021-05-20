import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { AnimatePresence } from 'framer-motion';

import FaqAccordionItem from './FaqAccordionItem';

type FaqAccordionProps = {
  className?: string,
  faqData: GatsbyTypes.FaqAccordion_faqDataFragment,
};

export const query = graphql`
  fragment FaqAccordion_faqData on PrismicFaqDataType {
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
  faqData,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container className={className}>
      <AnimatePresence initial={false}>
        {faqData.entries
        .filter(entry => entry.question && entry.answer)
        .map(entry => (
          <FaqAccordionItem
            key={entry.question!}
            id={entry.question!}
            entry={entry}
            open={state.id === entry.question!}
            onClick={() => dispatch({ type: 'CLICK', id: entry.question! })}
            onFocus={() => dispatch({ type: 'FOCUS', id: entry.question! })}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default FaqAccordion;
