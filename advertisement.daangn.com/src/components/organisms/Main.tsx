import React from "react";

import { Main01 } from "~/components/organisms/Main01";
import { Main02 } from "~/components/organisms/Main02";
import { Main03 } from "~/components/organisms/Main03";
import { Main04 } from "~/components/organisms/Main04";
import { NowStart } from "~/components/organisms/NowStart";
import { UserQuoteCarousel } from "~/components/organisms/UserQuoteCarousel";

export function Main() {
  return (
    <div>
      <Main01
        titleBig={["원하는 동네만", "쏙쏙 골라서"]}
        subtitle={[
          "우리 동네부터 다른 동네까지",
          "광고할 지역을 선택할 수 있어요.",
        ]}
      />
      <Main02
        titleBig={["동네 이웃을", "고객으로"]}
        subtitle={[
          "이웃들이 많이 보는 당근마켓 글 사이에서",
          "자연스럽게 홍보할 수 있어요.",
        ]}
      />
      <Main03
        titleBig={["소통은", "쉽고 편리하게"]}
        subtitle={["광고를 본 이웃과", "채팅이나 전화로 소통할 수 있어요."]}
      />
      <Main04 />
      <UserQuoteCarousel />
      <NowStart />
    </div>
  );
}
