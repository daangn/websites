import { bridge } from '@src/bridge'

export const GATSBY_CLOUDFRONT_DOMAIN = process.env.GATSBY_CLOUDFRONT_DOMAIN

// https://github.com/daangn/webview/blob/develop/bridge-modern/src/core/Driver.ts#L33
export const IS_CUPERTINO =
  bridge.environment === 'Cupertino' && Boolean((window as any).webkit?.messageHandlers?.messageHandler)

// https://github.com/daangn/webview/blob/develop/bridge-modern/src/core/Driver.ts#L30
export const IS_ANDROID = bridge.environment === 'Android' && Boolean((window as any).AndroidFunction?.messageHandler)

export const IS_DAANGN_WEBVIEW = IS_CUPERTINO || IS_ANDROID
