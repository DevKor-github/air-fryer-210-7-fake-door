import Logo from '@/assets/Logo';

import s from './Intro.module.css';
import EmailForm from '@/common/components/EmailForm';
import TopBackground from '@/assets/top-bg.webp';
import MobileBr from '@/common/components/MobileBr';
import ScenarioImage from '@/assets/scenario.png';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Intro = () => {
  const showScenario = useMediaQuery('(min-width: 1300px)');
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
              독립영화를 함께 보고 싶지만,
              <MobileBr /> 상영 절차가 복잡하고 어렵다고 느끼셨나요?
              <br />
              <MobileBr />
              <b>mêm mo</b>는 <b>독립영화 공동체상영</b>을 누구나 <MobileBr />
              <b>신청하고 진행</b>할 수 있도록 돕는 서비스입니다.
            </p>
            <p>
              <b>mêm mo</b>를 통해 공동체상영을 쉽고 빠르게 참여해 보세요!
            </p>
          </div>
        </div>
        <EmailForm />
        {showScenario && (
          <img className={s.Scenario} src={ScenarioImage} alt="scenario" />
        )}
      </div>
    </div>
  );
};
export default Intro;
