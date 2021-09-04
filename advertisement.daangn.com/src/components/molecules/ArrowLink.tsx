import * as React from "react"
import { styled } from "gatsby-theme-stitches/src/stitches.config"
import ArrowSvg from "~/image/arrow.svg";

type ArrowLinkProps = {
  target : string
}

export const ArrowLink:React.FC<ArrowLinkProps> = ({target}) => {

  const onClickHandler = (target:string) => {
    window.open(target, '_blank')
  }
  return (
    <Base onClick={()=>onClickHandler(target)}/>

  )
}

const Base = styled("div", {
  width: 28,
  aspectRatio: 1,
  background: `url(${ArrowSvg})`,
  backgroundRepeat: 'no-repeat',
  cursor: "pointer"
})
