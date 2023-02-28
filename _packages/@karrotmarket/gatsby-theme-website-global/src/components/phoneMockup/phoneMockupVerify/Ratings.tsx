import * as React from 'react';
import { em } from 'polished';
import { motion } from 'framer-motion';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import { RatingType } from './_type';

import { ReactComponent as Feedback1Icon } from '../../../icons/feedback_1.svg';
import { ReactComponent as Feedback2Icon } from '../../../icons/feedback_2.svg';

interface RatingProps {
  ratings: RatingType[];
}

const Ratings: React.FC<RatingProps> = ({ ratings }) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.5,
      }}
    >
      <Title>Feedback</Title>
      {ratings.map((rating, i) => (
        <Container>
          {i === 0 ? <Feedback1Icon width={em(20)} /> : <Feedback2Icon width={em(20)} />}
          <Comment>{rating.comment}</Comment>
          <Count>{rating.count}</Count>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  padding: em(24),
  paddingBottom: em(28),
  background: vars.$semantic.color.paperDefault,
  borderRadius: em(8),
  boxShadow: `0 ${em(12)} ${em(14)} rgba(0, 0, 0, 0.12), 0 0 ${em(6)} rgba(0, 0, 0, 0.06)`,
  width: em(270),
  '*': {
    fontFamily: '$system',
  },
});

const Title = styled('div', {
  fontSize: em(22),
  fontWeight: 'bold',
  marginRight: em(6),
  marginBottom: em(14),
});

const Container = styled('div', {
  rowCenterY: true,
  width: 'fit-content',
  position: 'relative',
  padding: `${em(12)} ${em(16)}`,
  background: '$gray100',
  borderRadius: em(6),
  marginBottom: em(20),
  '&:last-of-type': {
    marginBottom: 0,
  },
});

const Comment = styled('div', {
  fontSize: em(16),
  color: vars.$scale.color.gray900,
  marginLeft: em(6),
});

const Count = styled('div', {
  fontSize: em(16),
  fontWeight: 'bold',
  marginLeft: em(4),
});

export default Ratings;
