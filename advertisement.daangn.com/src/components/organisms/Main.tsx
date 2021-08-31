import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import advertisementMain01 from "~/image/img_advertisement_main_01.png";
import advertisementMain02 from "~/image/img_advertisement_main_02.png";
import advertisementMain03 from "~/image/img_advertisement_main_03.png";
import advertisementMain04 from "~/image/img_advertisement_main_04.png";
import advertisementMain05 from "~/image/img_advertisement_main_05.png";

export function Main() {
  return (
    <div>
      <Image src={advertisementMain01} alt="advertisement-main" />
      <Image src={advertisementMain02} alt="advertisement-main" />
      <Image src={advertisementMain03} alt="advertisement-main" />
      <Image src={advertisementMain04} alt="advertisement-main" />
      <Image src={advertisementMain05} alt="advertisement-main" />
    </div>
  );
}

const Image = styled("img", {
  width: "100%",
});
