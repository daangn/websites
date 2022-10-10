import React, { useRef } from 'react'
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished'

import { ReactComponent as ChevronLeft } from './assets/chevron_left.svg'
import { ReactComponent as ChevronRight } from './assets/chevron_right.svg'

type State = {
  idx: number
  count: number
  visible: {
    left: boolean
    right: boolean
  }
}

type Action = 
  | {
      type: 'LEFT',
    } 
  | {
      type: 'RIGHT',
    }

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'LEFT':
      const leftIdx = state.idx - 1
      return {
        ...state,
        idx: leftIdx,
        visible: {
          left: leftIdx !== 0,
          right: leftIdx !== state.count - 1
        }
      }
      case 'RIGHT':
        const rightIdx = state.idx + 1
        return {
          ...state,
          idx: rightIdx,
          visible: {
            left: rightIdx !== 0,
            right: rightIdx !== state.count - 1
          }
        }
  }
}

interface CarouselProps {
  children: React.ReactNode
}
const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [state, dispatch] = React.useReducer(reducer, null, () => ({
    idx: 0,
    count: React.Children.toArray(children).length,
    visible: {
      left: false,
      right: React.Children.toArray(children).length > 1,
    }
  }))

  const scrollToRight = (e: React.MouseEvent) => {
    e.preventDefault()
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        top: 0,
        behavior: 'smooth',
      })
    }

    dispatch({ type: 'RIGHT' })
  }

  const scrollToLeft = (e: React.MouseEvent) => {
    e.preventDefault()
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        top: 0,
        behavior: 'smooth',
      })
    }

    dispatch({ type: 'LEFT' })
  }

  return (
    <Container>
      <CarouselItem className="carousel" ref={carouselRef}>
        {children}
      </CarouselItem>
      {state.visible.left && (
        <LeftButton onClick={scrollToLeft}>
          <CarouselButton>
            <ChevronLeft />
          </CarouselButton>
        </LeftButton>
      )}
      {state.visible.right && (
        <RightButton onClick={scrollToRight}>
          <CarouselButton>
            <ChevronRight />
          </CarouselButton>
        </RightButton>
      )}
    </Container>
  )
}

const Container = styled('div', {
  position: 'relative',
  marginTop: rem(-36),
  marginBottom: rem(36),

  '@sm': {
    marginTop: rem(-100),
    marginBottom: rem(100),
  },
})

const CarouselItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': {
    display: 'none',
  }
})

const LeftButton = styled('span', {
  position: 'absolute',
  top: '50%',
  left: rem(8),
  transform: 'translateY(-50%)'
})

const RightButton = styled('span', {
  position: 'absolute',
  top: '50%',
  right: rem(8),
  transform: 'translateY(-50%)'
})

const CarouselButton = styled('button', {
  width: rem(28),
  height: rem(28),
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default Carousel