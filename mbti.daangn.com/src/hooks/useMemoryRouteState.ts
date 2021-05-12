import { DependencyList, useEffect, useMemo } from 'react'

export const useMemoryRouteState = (onPopState: () => void, dependency: DependencyList = []) => {
  useEffect(() => {
    const handlePopState = () => {
      onPopState()
    }
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependency)

  return useMemo(
    () => ({
      push: (...params: Parameters<typeof window['history']['pushState']>) => window.history.pushState(...params),
    }),
    []
  )
}
