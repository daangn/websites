import * as React from "react"
import { styled } from "gatsby-theme-stitches/src/stitches.config"
import ArrowSvg from "~/image/arrow.svg";
import ArrowSvgWhite from "~/image/arrow_white.svg";
import fbTrack from "~/components/molecules/fbTrack";

type ArrowLinkProps = {
  target : string
  color?: any,
  fbPixel? : string[]
}

export const ArrowLink:React.FC<ArrowLinkProps> = ({target,color="black", fbPixel}) => {

  const onClickHandler = (target:string) => {
    if(fbPixel){
      fbTrack(fbPixel[0], fbPixel[1])
    }
    window.open(target, '_blank')
  }
  return (
    <Base onClick={()=>onClickHandler(target)} color={color}/>

  )
}

const Base = styled("div", {
  width: 28,
  aspectRatio: 1,
  background: `url(${ArrowSvg})`,
  backgroundRepeat: 'no-repeat',
  cursor: "pointer",
  variants: {
    color: {
      white:{
        background: `url(${ArrowSvgWhite})`
      },
      black: {
        background: `url(${ArrowSvg})`,
      }
    },

  }
})
