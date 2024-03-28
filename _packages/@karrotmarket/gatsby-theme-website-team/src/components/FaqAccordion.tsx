import { AnimatePresence } from 'framer-motion';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';

import FaqAccordionItem from './FaqAccordionItem';

type FaqAccordionProps = {
  className?: string;
  data: GatsbyTypes.TeamWebsite_FaqAccordion_faqDataFragment;
};

export const query = graphql`
  fragment TeamWebsite_FaqAccordion_faqData on PrismicFaqData {
    entries {
      ...TeamWebsite_FaqAccordionItem_entry
    }
  }
`;

const Container = styled('div', {});

type State = {
  lastAction: Action['type'] | '';
  id: string;
};

type Action =
  | {
      type: 'CLICK';
      id: string;
    }
  | {
      type: 'FOCUS';
      id: string;
    };

const initialState: State = {
  lastAction: '',
  id: '',
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  const reset = state.id === action.id && state.lastAction === action.type;
  return reset
    ? initialState
    : {
        lastAction: action.type,
        id: action.id,
      };
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ className, data }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container className={className}>
      <AnimatePresence initial={false}>
        {data.entries
          .filter((entry) => entry.question && entry.answer)
          .map((entry) => (
            <FaqAccordionItem
              // biome-ignore lint/style/noNonNullAssertion: intentional
              key={entry.question!}
              // biome-ignore lint/style/noNonNullAssertion: intentional
              id={entry.question!}
              entry={entry}
              // biome-ignore lint/style/noNonNullAssertion: intentional
              open={state.id === entry.question!}
              // biome-ignore lint/style/noNonNullAssertion: intentional
              onClick={() => dispatch({ type: 'CLICK', id: entry.question! })}
              // biome-ignore lint/style/noNonNullAssertion: intentional
              onFocus={() => dispatch({ type: 'FOCUS', id: entry.question! })}
            />
          ))}
      </AnimatePresence>
    </Container>
  );
};

export default FaqAccordion;
