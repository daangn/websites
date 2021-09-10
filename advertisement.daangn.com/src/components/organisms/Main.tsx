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
          gatsbyImageData(height: 680, quality: 90, formats: [WEBP, AVIF, AUTO])
        }
      }
      image1: file(relativePath: { eq: "img_sub_pc_02.png" }) {
        childImageSharp {
          gatsbyImageData(height: 680, quality: 90, formats: [WEBP, AVIF, AUTO])
        }
      }
      image2: file(relativePath: { eq: "img_sub_pc_03.png" }) {
        childImageSharp {
          gatsbyImageData(height: 680, quality: 90, formats: [WEBP, AVIF, AUTO])
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
      <MainSection
        titleBig={["소통은", "쉽고 편리하게"]}
        subtitle={["광고를 본 이웃과", "채팅이나 전화로 소통할 수 있어요."]}
        image={ImageQuery.image2?.childImageSharp?.gatsbyImageData}
        right
      />
      <Main04 />
      <UserQuoteCarousel />
      <NowStart />
    </div>
  );
};
