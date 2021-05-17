import { captureException } from '@sentry/gatsby'

import wrapWithProvider from './wrapWithProvider'
import { bridge } from './src/bridge'
import { IS_DAANGN_WEBVIEW } from './src/constants/env'

window.addEventListener('error', (error) => {
  captureException(error)
})

if (IS_DAANGN_WEBVIEW) {
  try {
    bridge.router.style({
      navbar: false,
      enableSafeAreaInsets: true,
      backSwipable: true,
      scrollable: true,
    })
    // eslint-disable-next-line no-empty
  } catch {}
}

export const wrapRootElement = wrapWithProvider

export const onClientEntry = () => {
  if (typeof window.gtag === 'function') {
    return
  }

  window.addEventListener('click', (e) => {
    const target = e.target
    if (!(target && target.closest)) {
      return
    }

    const closestEl = target.closest('a[id], button[id], input[id]')
    if (closestEl) {
      return
    }

    window.gtag('event', 'click', { element_id: closestEl.id })
  })
}
