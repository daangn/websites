import React, { ReactNode, useEffect, useState } from 'react'

export interface TransitionOutProps {
  isOpen: boolean
  onClosed?: () => void
  children: (params: { outro: boolean; duration: number }) => ReactNode
  duration?: number
}

const TransitionOut = ({ children, isOpen, onClosed, duration = 300 }: TransitionOutProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen)

  useEffect(() => {
    if (!isOpen) {
      if (isOpenState) {
        const timerId = setTimeout(() => {
          setIsOpenState(false)
          onClosed?.()
        }, duration)
        return () => {
          timerId && clearTimeout(timerId)
        }
      }
    } else {
      setIsOpenState(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return isOpenState ? <>{children({ outro: !isOpen, duration })}</> : null
}

export default TransitionOut
