import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { StaticImage as Picture } from "gatsby-plugin-image"
import {Main01} from "~/components/organisms/Main01";

export function Main() {
  return (
    <div>
      <Main01 titleBig={["원하는 동네만","쏙쏙 골라서"]} subtitle={['우리 동네부터 다른 동네까지','광고할 지역을 선택할 수 있어요.']} align="left"/>
      {/*<Picture src="../../image/img_advertisement_main_01.png" alt="main01" />*/}
      <Picture src="../../image/img_advertisement_main_02.png" alt="main02" />
      <Picture src="../../image/img_advertisement_main_03.png" alt="main03" />
      <Picture src="../../image/img_advertisement_main_04.png" alt="main04" />
      <Picture src="../../image/img_advertisement_main_05.png" alt="main05" />
    </div>
  );
}

