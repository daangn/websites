import * as React from "react"
import { styled } from "gatsby-theme-stitches/src/stitches.config"
import {ArrowLink} from "~/components/molecules/ArrowLink";
import {rem} from "polished";
import chevronIconUrl from '~/image/chevron.svg';

export const LearnMore = () => {
  return (
    <Wrapper>
      <Container>
        <Item left>
          <DocsWrapper>
            <LearnMoreTitle>
              당근마켓 지역광고
            </LearnMoreTitle>
            <LearnMoreTitle>
              더 알아보기
            </LearnMoreTitle>
          </DocsWrapper>
          <DocsLink>
            <p>
              지역광고 소개서
            </p>
            <ArrowLink target="#" />
          </DocsLink>
          <DocsLink>
            <p>
              지역광고 만들기 가이드
            </p>
            <ArrowLink target="#" />
          </DocsLink>
        </Item>
        <Item right>
          <FaqItem>
            <p>
              지역광고는 어떻게 만드나요?
            </p>
            <ChevronRight src={chevronIconUrl} alt="" rotate={true} />

          </FaqItem>
          <FaqItem>
            <p>
              지역광고는 비용은 얼마인가요?
            </p>
            <ChevronRight src={chevronIconUrl} alt="" rotate={true} />
          </FaqItem>
          <FaqItem>
            <p>
              지역광고는 어디에 노출되나요?
            </p>
            <ChevronRight src={chevronIconUrl} alt="" rotate={true} />
          </FaqItem>

        </Item>
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingY: 160,
  backgroundColor: "$white",
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: 'top',
  justifyContent: "space-between",
  width: "80%",
  "@md": {
    flexDirection: "row"
  }


  // display: "grid",
  // columnGap: rem(96),
  // alignContent: "space-between",
  // // border: '1px solid',
  // "@md" : {
  //   gridTemplateColumns: 'repeat(2, minmax(400px, auto))',
  // },
})
const DocsWrapper = styled("div",{
  marginTop: 20
})

const DocsLink = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: 'center',
  justifyContent : "center",
  typography: "$subtitle4",
  fontWeight: "bold",
  marginY: 10,
  p: {
    marginRight: 8
  },

  "@md" : {
    justifyContent : "left"
  }
})

const LearnMoreTitle = styled("p", {
  typography: "$subtitle1",
  fontWeight: "bold",
  textAlign: 'center',

  "@md" : {
    textAlign: "left"
  },

})

const Item = styled("div", {
  variants : {
    left: {
      true: {
        display: "flex",
        flexDirection: "column",
        "@md": {
          paddingRight: rem(40),
          paddingTop: 15
        }
      }
    },
    right:{
      true: {
        flex: 1
      }
    }
  }
})

const FaqItem = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: 'space-between',
  paddingY: 40,
  borderBottom: "1px solid #EAEBEE",
  p: {
    fontSize: "$subtitle3",
    fontWeight: 400,
  },

  "@md" : {
    justifyContent: 'space-between',
  }
})

const ChevronRight = styled("img", {
  color: "$gray500",
  width: rem(24),
  height: rem(24),

  variants: {
    rotate: {
      true: {
        transform: 'rotate(270deg)',
      },
    },
  },
})
