import { useCallback, useMemo, useState } from 'react'

import { useMemoryRouteState } from './useMemoryRouteState'

export const useQuestionNumberWithRoute = (initialIndex = 0) => {
  const [idx, setIdx] = useState(initialIndex)

  const customHistory = useMemoryRouteState(() => {
    setIdx((prev) => prev - 1)
  }, [])

  const push = useCallback(
    (...params: Parameters<typeof customHistory['push']>) => {
      setIdx((prev) => prev + 1)
      customHistory.push(...params)
    },
    [customHistory]
  )

  return useMemo(() => ({ push, idx }), [push, idx])
}
