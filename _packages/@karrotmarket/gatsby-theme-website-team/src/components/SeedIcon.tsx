// @ts-nocheck
/* eslint-disable */
import { forwardRef, type ForwardRefRenderFunction } from 'react';
import spriteUrl from '!!file-loader!../assets/icon-sprite.svg';

export interface SeedIconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}

const SeedIcon: ForwardRefRenderFunction<HTMLSpanElement, SeedIconProps> = (
  { name, className, size },
  ref,
) => {
  return (
    <span
      ref={ref}
      style={{ display: 'inline-flex', width: size, height: size }}
      className={className}
      data-seed-icon={name}
      data-seed-icon-version="0.1.7"
    >
      <svg viewBox="0 0 24 24">
        <use href={`${spriteUrl}#${name}`} />
      </svg>
    </span>
  );
};

export default forwardRef(SeedIcon);
type IconName =
  | 'icon_backward_regular'
  | 'icon_search_regular'
  | 'icon_expand_more_regular'
  | 'icon_chevron_right_regular';
