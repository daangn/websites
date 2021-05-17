declare interface Window {
  // Injected by Google Tag Manager
  // gtag(action: 'js', at: Date): void
  // gtag(action: 'config', trackingId: string): void

  gtag(action: 'event', category: string, data?: any): void
}
