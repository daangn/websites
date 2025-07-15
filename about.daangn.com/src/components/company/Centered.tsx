import { forwardRef } from 'react';
import * as css from './Centered.css';

export const cn = (...args: (string | undefined)[]) => {
  return args.filter(Boolean).join(' ');
};

const Centered = forwardRef(
  (
    {
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={cn(css.container, className)}>
        {children}
      </div>
    );
  },
);

export default Centered;
