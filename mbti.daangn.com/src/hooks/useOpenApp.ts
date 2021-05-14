import { useEffect } from 'react'
import { getAccurateAgent } from '@egjs/agent'

import { useOpenAppState } from '@src/context/openAppState'
import { IS_DAANGN_WEBVIEW } from '@src/constants/env'

const shouldOpenKarrotApp = async () => {
  const agent = await getAccurateAgent()
  if (agent) {
    return agent.isMobile
  }
  return false
}

export const useOpenApp = () => {
  const { handleOpen, opened } = useOpenAppState()

  useEffect(() => {
    ;(async () => {
      const valid = await shouldOpenKarrotApp()
      if (valid && !opened && !IS_DAANGN_WEBVIEW) {
        location.href = `karrot://minikarrot/router?remote=${encodeURIComponent(location.href)}&navbar=false`
        handleOpen()
      }
    })()
  }, [handleOpen, opened])
}
