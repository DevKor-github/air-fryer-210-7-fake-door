import Logo from '@/assets/Logo';

import s from './Intro.module.css';
import EmailForm from '@/common/components/EmailForm';
import TopBackground from '@/assets/top-bg.webp';

const Intro = () => {
  return (
    <div
      className={s.FlexWrapper}
      style={{ backgroundImage: `url(${TopBackground})` }}
    >
      <div className={s.Wrapper}>
        <div className={s.Contents}>
          <div className={s.Title}>
            <h2>독립영화를 사랑하는 사람들을 위한 공동체상영 플랫폼</h2>
            <h1 className={s.Logo}>
              <Logo />
            </h1>
          </div>
          <div className={s.Descriptions}>
            <p>
              독립영화를 함께 보고 싶지만, 상영 절차가 복잡하고 어렵다고
              느끼셨나요?
              <br />
              <b>mêm mo</b>는 <b>독립영화 공동체상영</b>을 누구나{' '}
              <b>신청하고 진행</b>할 수 있도록 돕는 서비스입니다
            </p>
            <p>
              <b>mêm mo</b>를 통해 공동체상영을 쉽고 빠르게 참여해 보세요!
            </p>
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};
export default Intro;
