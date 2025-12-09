import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React, { useRef } from 'react';

import { ReactComponent as ChevronLeft } from './assets/chevron_left.svg';
import { ReactComponent as ChevronRight } from './assets/chevron_right.svg';

type State = {
  idx: number;
  count: number;
  visible: {
    left: boolean;
    right: boolean;
  };
  autoscroll: boolean;
};

type Action = (
  | { type: 'LEFT' }
  | { type: 'RIGHT' }
  | { type: 'AUTOSCROLL_NEXT' }
);

// TODO: replace entierly with native scroll snap events
const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'LEFT': {
      let idx = (state.idx - 1) % state.count;
      if (idx < 0) {
        idx = state.count - 1;
      }
      return {
        ...state,
        idx,
        visible: {
          left: idx !== 0,
          right: idx !== state.count - 1,
        },
        autoscroll: false,
      };
    }
    case 'RIGHT':
    case 'AUTOSCROLL_NEXT':
    {
      const idx = (state.idx + 1) % state.count;
      return {
        ...state,
        idx,
        visible: {
          left: idx !== 0,
          right: idx !== state.count - 1,
        },
        autoscroll: action.type === 'AUTOSCROLL_NEXT',
      };
    }
  }
};

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = React.useReducer(reducer, null, () => ({
    idx: 0,
    count: React.Children.toArray(children).length,
    visible: {
      left: false,
      right: React.Children.toArray(children).length > 1,
    },
    autoscroll: true,
  }));

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.children[state.idx]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [state.idx]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (state.autoscroll) {
        dispatch({ type: 'AUTOSCROLL_NEXT' });
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [state.autoscroll]);

  return (
    <Container>
      <CarouselItem className="carousel" ref={carouselRef}>
        {children}
      </CarouselItem>
      {state.visible.left && (
        <LeftButton onClick={() => dispatch({ type: 'LEFT' })}>
          <CarouselButton>
            <ChevronLeft />
          </CarouselButton>
        </LeftButton>
      )}
      {state.visible.right && (
        <RightButton onClick={() => dispatch({ type: 'RIGHT' })}>
          <CarouselButton>
            <ChevronRight />
          </CarouselButton>
        </RightButton>
      )}
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  marginTop: 0,
  marginBottom: rem(36),

  '@sm': {
    marginBottom: rem(100),
  },
});

const CarouselItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const LeftButton = styled('span', {
  position: 'absolute',
  top: '50%',
  left: rem(8),
  transform: 'translateY(-50%)',
});

const RightButton = styled('span', {
  position: 'absolute',
  top: '50%',
  right: rem(8),
  transform: 'translateY(-50%)',
});

const CarouselButton = styled('button', {
  width: rem(24),
  height: rem(24),
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default Carousel;
