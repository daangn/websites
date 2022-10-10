import React, { useRef } from 'react'
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished'

import { ReactComponent as ChevronLeft } from './assets/chevron_left.svg'
import { ReactComponent as ChevronRight } from './assets/chevron_right.svg'

interface CarouselProps {
  children: React.ReactNode
}
const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scrollToRight = (e: React.MouseEvent) => {
    e.preventDefault()
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        top: 0,
        behavior: 'smooth',
      })
    }
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
  }

  return (
    <Container>
      <CarouselItem className="carousel" ref={carouselRef}>
        {children}
      </CarouselItem>
      <LeftButton onClick={scrollToLeft}>
        <CarouselButton>
          <ChevronLeft />
        </CarouselButton>
      </LeftButton>
      <RightButton onClick={scrollToRight}>
        <CarouselButton>
          <ChevronRight />
        </CarouselButton>
      </RightButton>
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
  left: rem(10),
  transform: 'translateY(-50%)'
})

const RightButton = styled('span', {
  position: 'absolute',
  top: '50%',
  right: rem(10),
  transform: 'translateY(-50%)'
})

const CarouselButton = styled('button', {
  width: rem(30),
  height: rem(30),
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export default Carousel