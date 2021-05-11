import { useCallback } from 'react'
import copy from 'copy-text-to-clipboard'

import { bridge } from '@src/bridge'

export const useShare = (href?: string) => {
  return useCallback(() => {
    if (bridge.environment === 'Web') {
      try {
        navigator
          .share({
            title: document.title,
            url: location.href,
          })
          .catch((err) => {
            throw err
          })
      } catch {
        copy(href || window.location.href)
        alert('주소가 복사되었어요!')
      }
    } else {
      bridge.share.open({ text: '당근마켓 MBTI', url: href || window.location.href })
    }
  }, [href])
}
