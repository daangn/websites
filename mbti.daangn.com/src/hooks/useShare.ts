import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import copy from 'copy-text-to-clipboard'

import { bridge } from '@src/bridge'
import { toastAtom } from '@src/store/app'

export const useShare = (href?: string) => {
  const setToasts = useSetRecoilState(toastAtom)

  return useCallback(() => {
    if (bridge.environment === 'Web') {
      copy(href || window.location.href)
      setToasts((prev) => [...prev, { id: `${Math.random()}`, message: '주소가 복사되었어요' }])
    } else {
      bridge.share.open({ text: '당근마켓 MBTI', url: href || window.location.href })
    }
  }, [setToasts, href])
}
