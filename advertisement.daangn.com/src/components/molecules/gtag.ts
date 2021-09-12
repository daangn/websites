export const gtag = (event: string, type: string, data?: any) => {
  try {
    // @ts-ignore
    typeof window !== "undefined" && window.gtag(event, type, data);
  } catch (e) {
    console.warn("GA script not found");
  }
};
