/* eslint-disable */
import * as React from "react";
import spriteUrl from "./sprite.svg";

export interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
};

const Icon: React.ForwardRefRenderFunction<HTMLSpanElement, SeedIconProps> = (
  { name, className, size },
  ref,
) => {
  const isMobileSafari =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
  return  (
    <span
      ref={ref}
      style={{ display: "inline-flex", width: size, height: size }}
      className={className}
      data-seed-icon={name}
      data-seed-icon-version="0.1.12"
    >
      <svg viewBox="0 0 24 24">
        {isMobileSafari
          ? <use xlinkHref={`${spriteUrl}#${name}`} />
          : <use href={`${spriteUrl}#${name}`} />}
      </svg>
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
);
