import * as css from './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  target?: string;
}
export default function Button({ children, icon, href, target }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={css.container} target={target}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type="button" className={css.container}>
      {children}
      {icon}
    </button>
  );
}
