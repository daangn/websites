import wrapWithProvider from './wrapWithProvider'
import { bridge } from './src/bridge'

bridge.router.style({
  navbar: false,
  enableSafeAreaInsets: true,
  backSwipable: true,
  scrollable: true,
})

export const wrapRootElement = wrapWithProvider
