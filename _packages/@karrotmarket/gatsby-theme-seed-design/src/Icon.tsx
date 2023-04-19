/* eslint-disable */
import * as React from "react";
import { iconData } from "./IconData";

export interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
};

const Icon: React.ForwardRefRenderFunction<HTMLSpanElement, IconProps> = (
  { name, className, size },
  ref,
) => {
  return (
    <span
      ref={ref}
      style={{ display: "inline-flex", width: size, height: size }}
      className={className}
      data-seed-icon={name}
      data-seed-icon-version="0.2.0"
    >
      {iconData[name]}
    </span>
  );
};

export default React.forwardRef(Icon);
type IconName = (
  | "icon_backward_regular"
  | "icon_search_regular"
  | "icon_expand_more_regular"
  | "icon_chevron_right_regular"
  | "icon_call_fill"
  | "icon_close_regular"
  | "icon_forward_regular"
  | "icon_ios_share_regular"
);
