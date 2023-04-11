import * as React from 'react';
import { graphql } from 'gatsby';

import RootContainer from './prismicBrochureDataBodyFaqSection/RootContainer';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';
import Icon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyFaqSection_section on PrismicBrochureDataBodyFaqSection {
    primary {
      section_id

      title {
        html
      }

      learn_more_link {
        url
      }
      learn_more_label

      direction
    }

    items {
      question

      answer_text {
        html
      }

      answer_link {
        url
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyFaqSection_sectionFragment;
};

export default function PrismicBrochureDataBodyFaqSection({ section }: Props) {
  return (
    <RootContainer id={section.primary.section_id || undefined}>
      <Container>
        <Inner>
          <TitleContainer dangerouslySetInnerHTML={{ __html: section.primary.title.html }} />
          <Questions>
            {section.items.map((item, i: number) => {
              return (
                <Question
                  // rome-ignore lint/suspicious/noArrayIndexKey: 순서가 바뀌지 않음
                  key={i}
                  questionText={item.question}
                  answerText={item.answer_text.html}
                />
              );
            })}
          </Questions>
          <ButtonContainer>
            <BottomButton href={section.primary.learn_more_link.url} target="_blank" rel="noopener">
              {section.primary.learn_more_label}
            </BottomButton>
          </ButtonContainer>
        </Inner>
      </Container>
    </RootContainer>
  );
}

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
});

const Inner = styled('div', {
  width: '45rem',
  marginTop: '2rem',
  padding: '2rem',
  '@lg': {
    width: '60rem',
  },
});

const TitleContainer = styled('div', {
  fontSize: rem(26),
  textAlign: 'left',
  marginBottom: '3rem',
  '@lg': {
    fontSize: rem(42),
    textAlign: 'center',
  },
});

const Questions = styled('div', {});

const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
  marginBottom: '10rem',
});

const BottomButton = styled('a', {
  padding: '1rem 2rem',
  appearance: 'none',
  backgroundColor: vars.$semantic.color.secondaryLow,
  border: 'none',
  borderRadius: '0.375rem',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  textDecoration: 'none',
});

interface QuestionProps {
  questionText: string;
  answerText?: string;
  answerLink?: string;
}
const Question: React.FC<QuestionProps> = ({ questionText, answerText, answerLink }) => {
  const [opened, toggle] = React.useReducer((t) => !t, false);

  return (
    <QuestionContainer>
      <QuestionTitle
        onClick={() => {
          if (answerText) {
            toggle();
          }
        }}
        {...(answerLink
          ? {
              as: 'a',
              href: answerLink,
              target: '_blank',
              rel: 'noopener',
            }
          : {})}
      >
        <QuestionTitleLabel>{questionText}</QuestionTitleLabel>
        <QuestionTitleIcon
          style={{
            transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <StyledIcon name="icon_expand_more_regular" />
        </QuestionTitleIcon>
      </QuestionTitle>
      {opened && answerText && (
        <AnswerTextContainer dangerouslySetInnerHTML={{ __html: answerText }} />
      )}
    </QuestionContainer>
  );
};

const QuestionContainer = styled('div', {
  boxShadow: `0 1px 0 0 ${vars.$scale.color.gray300}`,
});

const QuestionTitle = styled('button', {
  display: 'flex',
  alignItems: 'center',
  appearance: 'none',
  border: 'none',
  background: 'none',
  width: '100%',
  padding: '2rem 0',
  justifyContent: 'space-between',
  cursor: 'pointer',
  color: vars.$scale.color.gray900,
});

const QuestionTitleLabel = styled('div', {
  fontWeight: 'bold',
  fontSize: '0.8125rem',
  textAlign: 'left',
  '@md': {
    fontSize: '1.25rem',
  },
});

const QuestionTitleIcon = styled('div', {
  transition: '200ms',
});

const StyledIcon = styled(Icon, {
  width: '1.5rem',
  height: '1.5rem',
});

const AnswerTextContainer = styled('div', {
  padding: '.5rem 1.5rem 2.5rem',
});
