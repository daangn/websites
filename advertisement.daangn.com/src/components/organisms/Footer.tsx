import React from "react"

import {styled} from "~/gatsby-theme-stitches/stitches.config";
import {rem} from "polished";


export const Footer = () => {
  return (
    <Base>
      <FooterDesktop>
        <p>이용약관</p>
        <p>여기는 아이콘들</p>
        <p>여기는 연락처들</p>
        <p>여기는 빈칸</p>
      </FooterDesktop>
    </Base>
  )
}

const Base = styled("div", {
  borderTop: "1px solid #DCDEE3",
  paddingX: rem(24),
  paddingTop: rem(33),
  paddingBottom: rem(76),
  "@md" :{
    paddingX: rem(141),
    paddingY: rem(71)
  }
})

const FooterDesktop = styled("div", {
  display: "none",

  "@md" : {
    display: "grid",
    gridTemplateRows: "auto auto",
    gridTemplateColumns: "auto auto",
  }

})
