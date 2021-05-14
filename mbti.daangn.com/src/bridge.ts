import { Bridge } from '@daangn/webview-bridge-modern'
import { PluginRouter } from '@daangn/webview-bridge-modern/lib/plugins/Router'
import { PluginShare } from '@daangn/webview-bridge-modern/lib/plugins/Share'

export const bridge = (typeof window === 'undefined'
  ? { environment: 'Web' }
  : new Bridge().addPlugin(PluginRouter).addPlugin(PluginShare)) as Bridge
