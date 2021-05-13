import { useEffect } from 'react'

import { useOpenAppState } from '@src/context/openAppState'
import { bridge } from '@src/bridge'

export const useOpenApp = () => {
  const { handleOpen, opened } = useOpenAppState()

  useEffect(() => {
    if (!opened && bridge.environment === 'Web') {
      location.href = `karrot://minikarrot/router?remote=${encodeURIComponent(location.href)}&navbar=false`
      handleOpen()
    }
  }, [handleOpen, opened])
}
