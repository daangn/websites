import React, {ReactElement} from "react"
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import {rem} from "polished";

type SectionProps = {
  backgroundColor: string
}

export const Section:React.FC<SectionProps> = ({backgroundColor, children})=> {
  return (
    <Base css={{backgroundColor: `${backgroundColor}`}}>
      {children}
    </Base>
  )
}


const Base = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: "center",
  paddingY: rem(80),
  overflow: "hidden",

  "@md": {
    paddingY: rem(160),
  }

})
