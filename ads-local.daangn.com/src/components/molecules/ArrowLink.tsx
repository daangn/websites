import * as React from "react";
import { rem } from "polished";

import { ReactComponent as Arrow } from "~/image/arrow.svg";
import { ReactComponent as ArrowWhite } from "~/image/arrow_white.svg";

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
