import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import Button from './Button';
import Centered from './Centered';
import * as css from './WorkingCulture.css';
import test1 from '../../assets/img_test_1.png';
import test2 from '../../assets/img_test_2.png';

export default function WorkingCulture() {
  return (
    <Centered>
      <div className={css.container}>
        <div className={css.title}>
          <span>당근이 일하는 문화</span>
        </div>
        <div className={css.cards}>
          <div className={css.cardRatio}>
            <div className={css.card}>
              <div className={css.cardTitle}>
                <span>{'함께의 가치를 만드는 사람들은\n어떤 문화에서 일할까요?'}</span>
              </div>
              <div className={css.cardButton}>
                <Button icon={<IconArrowRightLine size={18} />}>팀문화 보러 가기</Button>
              </div>
              <div className={css.cardIllustration}>
                <img className={css.cardIllustrationImage} src={test1} alt="working culture" />
              </div>
            </div>
          </div>
          <div className={css.cardRatio}>
            <div className={css.card}>
              <div className={css.cardTitle}>
                <span>{'당근 팀과 함께 할\n멋진 동료를 찾고 있어요!'}</span>
              </div>
              <div className={css.cardButton}>
                <Button icon={<IconArrowRightLine size={18} />}>채용 공고 보러 가기</Button>
              </div>
              <div className={css.cardIllustration}>
                <img className={css.cardIllustrationImage} src={test2} alt="working culture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Centered>
  );
}
