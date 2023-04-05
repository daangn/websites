import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { AnimatePresence } from 'framer-motion';

import FaqAccordionItem from './FaqAccordionItem';

type FaqAccordionProps = {
  className?: string;
  data: GatsbyTypes.TeamWebsite_FaqAccordion_faqDataFragment;
};

export const query = graphql`
  fragment TeamWebsite_FaqAccordion_faqData on PrismicFaqDataType {
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
              // rome-ignore lint/style/noNonNullAssertion: intentional
              key={entry.question!}
              // rome-ignore lint/style/noNonNullAssertion: intentional
              id={entry.question!}
              entry={entry}
              // rome-ignore lint/style/noNonNullAssertion: intentional
              open={state.id === entry.question!}
              // rome-ignore lint/style/noNonNullAssertion: intentional
              onClick={() => dispatch({ type: 'CLICK', id: entry.question! })}
              // rome-ignore lint/style/noNonNullAssertion: intentional
              onFocus={() => dispatch({ type: 'FOCUS', id: entry.question! })}
            />
          ))}
      </AnimatePresence>
    </Container>
  );
};

export default FaqAccordion;
