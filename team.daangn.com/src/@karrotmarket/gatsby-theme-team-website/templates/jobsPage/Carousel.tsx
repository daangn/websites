import React, { useRef } from 'react'
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished'

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
      <div>
        <button onClick={scrollToLeft}>Prev</button>
        <button onClick={scrollToRight}>Next</button>
      </div>
    </Container>
  )
}

const Container = styled('div', {
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

export default Carousel