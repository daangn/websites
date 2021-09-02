import React from 'react'
import main01 from '~/image/img_advertisement_main_01.png';
import m_main01 from '~/image/img_m_main_01.jpg';
import {styled} from "~/gatsby-theme-stitches/stitches.config";
import {rem} from "polished";
import { StaticImage as Picture } from "gatsby-plugin-image"

type SectionProps = {
  titleBig: string[],
  subtitle: string[],
  align: "right" | "left"
}


export const Main01:React.FC<SectionProps> = ({titleBig, subtitle, align}) => {
  return(
    <Section>
      <Container>
        <Picture src="../../image/img_sub_pc_01.png" alt="main01" />
        {/*<Picture src={img} alt="main01" />*/}
        <Right>
          <GridRow>
            <TitleBig>
              {/*원하는 동네만*/}
              {titleBig[0]}
            </TitleBig>
            <TitleBig>
              {titleBig[1]}
            </TitleBig>
          </GridRow>
          <GridRow>
            <Subtitle>
              {subtitle[0]}
            </Subtitle>
            <p>
              {subtitle[1]}
            </p>
          </GridRow>
        </Right>
      </Container>
    </Section>
  )
}

const Section = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: "center",
  backgroundColor: "$white",
  paddingY: rem(30)
})

const Container = styled("div", {
  display: "grid",
  paddingX: rem(20),
  gridTemplateRows: "auto auto",

  '& > :nth-child(1)': {
    order: 2,
  },
  '& > :nth-child(2)': {
    order: 1,
  },

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    '& > :nth-child(1)': {
      order: 1,
    },
    '& > :nth-child(2)': {
      order: 2,
    },
    paddingX: rem(140),
  }
})

const Right = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: "column",
  "@md" : {

    justifyContent: "center",
    alignItems: "flex-start"
  }
})

const GridRow = styled("div",{
  display: 'grid',
  gridTemplateRows: "auto auto",
  alignItems: 'center',
  justifyItems: 'center',
  marginBottom: rem(12),
  Subtitle: {
    fontSize: "$body2",
    fontWeight: 400
  },

  "@md" : {
    justifyItems: 'start',
    marginBottom: rem(20),
  }
})

const TitleBig = styled("p", {
  fontSize: "$subtitle2",
  fontWeight: "bold",

  "@md": {
    fontSize: rem(42),
  }
})

const Subtitle = styled("p", {
  display:"flex"
})
