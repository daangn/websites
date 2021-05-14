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
