import { Bridge } from '@daangn/webview-bridge-modern'
import { PluginRouter } from '@daangn/webview-bridge-modern/lib/plugins/Router'

export const bridge = (typeof window === 'undefined'
  ? { environment: 'Web' }
  : new Bridge().addPlugin(PluginRouter)) as Bridge
