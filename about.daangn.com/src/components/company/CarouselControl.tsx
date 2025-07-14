import { IconChevronLeftFill, IconChevronRightFill } from '@karrotmarket/react-monochrome-icon';
import * as css from './CarouselControl.css';

interface CarouselControlProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function CarouselControl({ onPrev, onNext }: CarouselControlProps) {
  return (
    <div className={css.root}>
      <button type="button" className={css.button} onClick={onPrev}>
        <IconChevronLeftFill size={18} />
      </button>
      <button type="button" className={css.button} onClick={onNext}>
        <IconChevronRightFill size={18} />
      </button>
    </div>
  );
}
