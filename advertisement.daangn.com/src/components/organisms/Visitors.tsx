import React, {ChangeEvent} from 'react'
import { styled } from "gatsby-theme-stitches/src/stitches.config"
import {rem} from "polished";


export const Visitors = () => {

  const [selected, setSelected] = React.useState<number>(0)

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setSelected(parseInt(e.target.value))
  }
  const peopleNum = [100,200,300,400]
  const region = ["서울 강남구", "제주도 노형동", "천안시 불당동", "부산 해운대구"]

  return (
    <Wrapper>
      <Container>
          <TextContainer>
            <span>
              <SelectBox onChange={handleChange} value={selected}>
                {region.map((item, idx)=>{
                  return (<option value={idx} key={idx}>
                    {item}
                  </option>)
                })}
              </SelectBox>
              <p>근처&nbsp;</p>
            </span>
            <span>
              <ColoredText>{peopleNum[selected]}명</ColoredText>
              <p>이&nbsp;</p>
            </span>
            <p>
              매주 당근마켓을 방문하고 있어요.
            </p>
          </TextContainer>
          <TextContainer end>
            <Caption>
              2021.07 기준
            </Caption>
          </TextContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled("div", {
  display: 'flex',
  flexDirection: "row",
  justifyContent: 'center',
  alignItems: 'center',
  height: rem(200),
  backgroundColor: "$white"
})

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

})

const TextContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(4, auto)",
  justifyItems: "center",
  alignItems: "center",
  variants: {
    end: {
      true: {
        alignSelf: "center",
        "@md": {
          alignSelf: "flex-end"
        }
      }
    }
  },
 "@md": {
    gridTemplateColumns: "repeat(4, auto)",
   gridTemplateRows: "auto auto"
 },
  p: {
    display: "inline",
    fontWeight: "bold",
    fontSize: "$subtitle2",
    paddingBottom: rem(8),
  },
  span: {
    paddingBottom: rem(8)

  }
})

const SelectBox = styled("select", {
  display: "inline",
  alignItems: 'center',
  height: rem(42),
  border:"none",
  borderBottom: '1px solid $gray400',
  typography: '$subtitle2',
  fontWeight: "bold",
  paddingX: rem(5),
  boxSizing: 'border-box',
  appearance: 'none',
  backgroundColor: '$white',
  '&:focus': {
    border: '1px solid $carrot500',
  },
  '::placeholder': {
    color: '$gray500',
  },
  '&::-ms-expand': {
    display: 'none',
  },
  '&::after': {
    content: "▼",
    justifySelf: 'end',
  },
})

const ColoredText = styled('p', {
  fontSize: "$subtitle2",
  paddingTop: rem(5),
  paddingBottom: rem(5),
  color: "$carrot500",
  fontWeight: "bold",
})

const Caption = styled('div',{
  typography: {
    fontSize: "$caption1",
  },
  color: "#ADB1BA"
})
