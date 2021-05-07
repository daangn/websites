import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useRecoilState } from 'recoil'

import { toastAtom } from '@src/store/app'

import Portal from './Portal'

const Toast: React.FC = () => {
  const [toasts, setToasts] = useRecoilState(toastAtom)

  const onAnimationEnd = (id: string | number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }
  return (
    <>
      {toasts.map((toast) => (
        <Portal key={toast.id}>
          <Base onAnimationEnd={() => onAnimationEnd(toast.id)}>
            <Card>{toast.message}</Card>
          </Base>
        </Portal>
      ))}
    </>
  )
}

const animation = keyframes`
0% {
   opacity: 0;
   transform: translate(0, 100%);
}
15% {
  opacity: 1;
   transform: translate(0, 0);
}
85% {
  opacity: 1;
   transform: translate(0, 0);
}
100% {
  opacity: 0;
   transform: translate(0, 100%);
}

`

const Base = styled.div`
  position: fixed;
  margin: 0 1rem 1.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;

  animation: 2.5s ${animation} forwards;

  @media (min-width: 989px) {
    margin-bottom: 2rem;
  }
`
const Card = styled.div`
  background-color: rgba(33, 37, 41, 0.9);
  padding: 0.75rem;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  border-radius: 6px;
  flex: 1;
  max-width: 26.25rem;
`

export default Toast
