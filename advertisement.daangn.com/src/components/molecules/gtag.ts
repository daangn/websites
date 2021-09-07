export const gtag = (event: string, type: string, data?: any) => (
// @ts-ignore
  typeof window !== "undefined" && window.gtag(event, type, data)
)
