import { createContext, useContext, useState } from 'react'

const OpenAppStateContext = createContext<{ opened: boolean; handleOpen: () => void }>({} as any)

export const OpenAppStateProvider: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(false)

  return (
    <OpenAppStateContext.Provider value={{ opened, handleOpen: () => setOpened(true) }}>
      {children}
    </OpenAppStateContext.Provider>
  )
}

export const useOpenAppState = () => useContext(OpenAppStateContext)
