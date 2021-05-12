import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as React from 'react'

import TransitionOut from './TransitionOut'
import Portal from './Portal'

interface Props {
  open: boolean
  onClose: () => void
}

const Modal: React.FC<Props> = ({ onClose, open, children }) => {
  const child = React.useRef<React.ReactNode>(null)

  React.useEffect(() => {
    if (open) {
      const scrollY = window.scrollY
      document.body.style.cssText = `
        transform: translate(0, ${scrollY});
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        overflow: visible;
        width: 100%;
        height: 100%;
      `

      return () => {
        document.body.style.cssText = ``
      }
    }
  }, [open])

  const childInstance = React.useMemo(() => {
    if (open) {
      child.current = children
    }
    return child.current
  }, [children, open])

  return (
    <Portal>
      <TransitionOut isOpen={open}>
        {({ outro }) => (
          <Base open={!outro}>
            <ScrollContainer
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  onClose()
                }
              }}>
              <CardContainer>
                {childInstance}
                <Margin />
              </CardContainer>
            </ScrollContainer>
          </Base>
        )}
      </TransitionOut>
    </Portal>
  )
}

const fadeIn = keyframes`
  from {
    transform: scale(1.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`
const fadeOut = keyframes`
from {
  transform: scale(1);
  opacity: 1;
}
to {
  transform: scale(1.2);
  opacity: 0;
}
`
const Base = styled.div<{ open: boolean }>`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  animation: 300ms ${({ open }) => (open ? fadeIn : fadeOut)} forwards;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
`
const CardContainer = styled.div`
  position: relative;
  margin: 2.5rem 1.5rem 0;
`
const Margin = styled.div`
  height: 2.5rem;
`
const ScrollContainer = styled.div`
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  position: relative;
`

export default Modal
