import React, { ChangeEvent } from "react";
import { graphql } from "gatsby";
import { styled } from "~/gatsby-theme-stitches/config";
import { Condition } from "@cometjs/core";
import { rem } from "polished";
import TextLoop from "react-text-loop";

type VisitorsProps = {
  data: GatsbyTypes.PrismicAdvertisementContentsDataBodyVisitorCountSlide_dataFragment;
};

export const fragment = graphql`
  fragment PrismicAdvertisementContentsDataBodyVisitorCountSlide_data on PrismicAdvertisementContentsDataBodyVisitorCountSlide {
    primary {
      date(formatString: "YYYY.MM 기준")
    }
    items {
      region
      visitor_count
    }
  }
`;

export const Visitors: React.FC<VisitorsProps> = ({ data }) => {
  const intl = new Intl.NumberFormat("ko");
  const regions = data.items?.map((item) => item!.region);
  const visitors = data.items?.map((item) => intl.format(item!.visitor_count!));
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <span>
            {/*{data.items?.map(item => (*/}
            {/*  <span key={item!.region!}>*/}
            {/*    {item!.region!} 근처 <strong>{intl.format(item!.visitor_count!)}명</strong>*/}
            {/*  </span>*/}
            {/*))}*/}
            <TextLoop interval={5000}>
              <Region>{regions![0]}</Region>
              <Region>{regions![1]}</Region>
              <Region>{regions![2]}</Region>
            </TextLoop>
            <p>&nbsp;근처&nbsp;</p>
          </span>
          <span>
            <TextLoop interval={5000}>
              <ColoredText>{visitors![0]}명</ColoredText>
              <ColoredText>{visitors![1]}명</ColoredText>
              {/*<ColoredText>26,949명</ColoredText>*/}
              {/*<ColoredText>17,019명</ColoredText>*/}
              <ColoredText>{visitors![2]}명</ColoredText>
            </TextLoop>
            <p>이 매주&nbsp;</p>
          </span>
          <p>당근마켓을 방문하고 있어요.</p>
        </TextContainer>
        {data.primary?.date && (
          <TextContainer end>
            <Caption>{data.primary.date}</Caption>
          </TextContainer>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: rem(200),
  backgroundColor: "$white",
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

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
          alignSelf: "flex-end",
        },
      },
    },
  },
  "@md": {
    gridTemplateColumns: "repeat(4, auto)",
    gridTemplateRows: "auto auto",
  },
  p: {
    display: "inline",
    fontWeight: "bold",
    fontSize: "$subtitle3",
    "@md": {
      fontSize: "$subtitle2",
    },
    paddingBottom: rem(8),
  },
  span: {
    paddingBottom: rem(8),
  },
});

const TextLoopMobile = styled(TextLoop, {
  display: "inline",
  "@md": {
    display: "none",
  },
});

const Region = styled("p", {
  fontSize: "$subtitle3",
  fontWeight: "bold",
});

const ColoredText = styled("p", {
  fontSize: "$subtitle2",
  paddingTop: rem(5),
  paddingBottom: rem(5),
  color: "$carrot500",
  fontWeight: "bold",
});

const Caption = styled("div", {
  fontSize: "$caption3",

  "@md": {
    fontSize: "$caption2",
  },
  color: "#ADB1BA",
});
