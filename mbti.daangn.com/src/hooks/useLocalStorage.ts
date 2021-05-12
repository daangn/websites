import * as React from 'react'

export const useLocalStorage = (key: string): [string | null, () => void] => {
  const [state, setState] = React.useState<string | null>(null)

  React.useEffect(() => {
    setState(localStorage.getItem(key))
  }, [key])

  return React.useMemo(
    () => [
      state,
      () => {
        setState(null)
        localStorage.removeItem(key)
      },
    ],
    [state, key]
  )
}
