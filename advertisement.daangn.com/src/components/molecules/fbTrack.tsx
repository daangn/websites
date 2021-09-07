export default function fbTrack (a: string, b: string) {
  // @ts-ignore
  if(typeof fbq === `function`){
    // @ts-ignore
    fbq(a, b)
  }
}
