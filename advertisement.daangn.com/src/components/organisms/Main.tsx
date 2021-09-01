import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { StaticImage as Picture } from "gatsby-plugin-image"

export function Main() {
  return (
    <div>
      <Picture src="../../image/img_advertisement_main_01.png" alt="main01" />
      <Picture src="../../image/img_advertisement_main_02.png" alt="main02" />
      <Picture src="../../image/img_advertisement_main_03.png" alt="main03" />
      <Picture src="../../image/img_advertisement_main_04.png" alt="main04" />
      <Picture src="../../image/img_advertisement_main_05.png" alt="main05" />
    </div>
  );
}

const Image = styled("img", {
  width: "100%",
});
