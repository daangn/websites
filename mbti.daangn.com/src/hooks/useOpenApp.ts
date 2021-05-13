import { useEffect } from 'react'
import { getAccurateAgent } from '@egjs/agent'

import { useOpenAppState } from '@src/context/openAppState'
import { bridge } from '@src/bridge'

const shouldOpenKarrotApp = async () => {
  const agent = await getAccurateAgent()

  if (agent) {
    return agent.browser.webkit || !agent.isMobile
  }
  return false
}

export const useOpenApp = () => {
  const { handleOpen, opened } = useOpenAppState()

  useEffect(() => {
    ;(async () => {
      const valid = await shouldOpenKarrotApp()
      if (valid && !opened && bridge.environment === 'Web') {
        location.href = `karrot://minikarrot/router?remote=${encodeURIComponent(location.href)}&navbar=false`
        handleOpen()
      }
    })()
  }, [handleOpen, opened])
}
