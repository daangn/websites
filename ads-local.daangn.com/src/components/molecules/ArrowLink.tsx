import * as React from "react";
import { styled } from "~/gatsby-theme-stitches/config";
import ArrowSvg, { ReactComponent as Arrow } from "~/image/arrow.svg";
import ArrowSvgWhite, {
  ReactComponent as ArrowWhite,
} from "~/image/arrow_white.svg";
import { rem } from "polished";

type ArrowLinkProps = {
  target: string;
  color?: any;
  id?: string;
};

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  target,
  color = "black",
  id
}) => {
  const onClickHandler = (target: string) => {
    window.open(target, "_blank");
  };
  return (
    // <Base onClick={()=>onClickHandler(target)} color={color}/>
    <>
      {color === "black" ? (
        <Arrow
          onClick={() => onClickHandler(target)}
          style={{ width: rem(28), height: rem(28) }}
          id={id}
        />
      ) : (
        <ArrowWhite
          onClick={() => onClickHandler(target)}
          style={{ width: rem(28), height: rem(28), marginTop: rem(5) }}
          id={id}
        />
      )}
    </>
  );
};

const Base = styled("div", {
  width: 28,
  aspectRatio: 1,
  background: `url(${ArrowSvg})`,
  backgroundRepeat: "no-repeat",
  cursor: "pointer",
  variants: {
    color: {
      white: {
        background: `url(${ArrowSvgWhite})`,
      },
      black: {
        background: `url(${ArrowSvg})`,
      },
    },
  },
});
