import * as React from "react"
import { styled } from "gatsby-theme-stitches/src/stitches.config"
import ArrowSvg from "~/image/arrow.svg";
import {Link} from "gatsby";

type ArrowLinkProps = {
  target : string
}

export const ArrowLink:React.FC<ArrowLinkProps> = ({target}) => {
  return (
    <Base to={target}/>

  )
}

const Base = styled(Link, {
  width: 28,
  aspectRatio: 1,
  background: `url(${ArrowSvg})`,
  backgroundRepeat: 'no-repeat',
  cursor: "pointer"
})
