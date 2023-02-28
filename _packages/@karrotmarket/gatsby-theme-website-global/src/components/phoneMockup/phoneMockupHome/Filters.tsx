import * as React from 'react';
import { em } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import { Filter } from './_type';

interface RatingProps {
  filters: Filter[];
}

const Filters: React.FC<RatingProps> = ({ filters }) => {
  return (
    <Wrapper>
      {filters.map((filter, i) => {
        const Icon = filter.icon;
        return (
          // rome-ignore lint/suspicious/noArrayIndexKey: will be removed soon
          <Container active={i === 0} icon={!!Icon} key={i}>
            {Icon && <Icon width={em(14)} height={em(14)} />}
            <Name>{filter.name}</Name>
          </Container>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  padding: `${em(12)} ${em(12)}`,
});

const Container = styled('div', {
  display: 'grid',

  color: vars.$scale.color.gray700,
  border: `1px solid ${vars.$scale.color.gray200}`,
  gridTemplateColumns: 'repeat(2, max-content)',
  padding: `${em(6)} ${em(14)}`,
  borderRadius: em(100),
  marginRight: em(8),

  '& > *': {
    alignSelf: 'center',
  },

  variants: {
    active: {
      true: {
        background: '$gray100',
        border: `1px solid ${vars.$scale.color.gray700}`,
        color: vars.$scale.color.gray900,
      },
    },
    icon: {
      true: {
        gridColumnGap: em(4),
      },
    },
  },
});

const Name = styled('div', {
  fontSize: em(12),
  fontWeight: 'bold',
  alignSelf: 'center',
  // transform: `translateY(${em(2)})`,

  '@md': {
    transform: `translateY(${em(0)})`,
  },
});

export default Filters;
