import React from "react";

import { MainSection } from "~/components/organisms/MainSection";
import { Main04 } from "~/components/organisms/Main04";
import { NowStart } from "~/components/organisms/NowStart";
import { UserQuoteCarousel } from "~/components/organisms/UserQuoteCarousel";
import { graphql, useStaticQuery } from "gatsby";

export const Main = () => {
  const ImageQuery = useStaticQuery<GatsbyTypes.ImageQuery>(graphql`
    query Image {
      image0: file(relativePath: { eq: "img_sub_pc_01.png" }) {
        childImageSharp {
          gatsbyImageData(height: 680, quality: 90, formats: [WEBP, AVIF, AUTO], placeholder: NONE)
        }
      }
      image1: file(relativePath: { eq: "img_sub_pc_02.png" }) {
        childImageSharp {
          gatsbyImageData(height: 680, quality: 90, formats: [WEBP, AVIF, AUTO], placeholder: NONE)
        }
      }
    }
  `);

  return (
    <div>
      <MainSection
        titleBig={["원하는 동네만", "쏙쏙 골라서"]}
        subtitle={[
          "우리 동네부터 다른 동네까지",
          "광고할 지역을 선택할 수 있어요.",
        ]}
        image={ImageQuery.image0?.childImageSharp?.gatsbyImageData}
        right
      />
      <MainSection
        titleBig={["동네 이웃을", "고객으로"]}
        subtitle={[
          "이웃들이 많이 보는 당근마켓 글 사이에서",
          "자연스럽게 홍보할 수 있어요.",
        ]}
        image={ImageQuery.image1?.childImageSharp?.gatsbyImageData}
        right={false}
      />
      <Main04 />
      <NowStart />
      <UserQuoteCarousel />
    </div>
  );
};
