import EmailForm from '@/common/components/EmailForm';

import s from './Bottom.module.css';
import BottomBackground from '@/assets/bottom-bg.webp';

const Bottom = () => {
  return (
    <div
      className={s.FlexWrapper}
      style={{ backgroundImage: `url(${BottomBackground})` }}
    >
      <div className={s.Wrapper}>
        <p className={s.Contents}>
          <b>독립영화 공동체상영</b>에 대한 정보가 더 궁금하다면,
          <br />
          지금 바로 <b>mêm mo 출시 예약</b>을 진행하세요!
        </p>
        <EmailForm />
      </div>
    </div>
  );
};
export default Bottom;
