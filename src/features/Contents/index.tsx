import FeatureDescription from '@/features/Contents/FeatureDescription';
import AppPreview1 from '@/assets/app-preview-1.webp';
import AppPreview2 from '@/assets/app-preview-2.webp';

import s from './Contents.module.css';

const Contents = () => {
  return (
    <div className={s.Container}>
      <FeatureDescription
        index={1}
        title={
          <>
            독립영화를 <b>확인</b>하고
            <br />
            쉽게 <b>예매</b>하고 빠르게 <b>공유</b>
            해봐요!
          </>
        }
        descriptions={[
          '다른 유저들이 주최한 공동체상영의\n펀딩 현황을 확인하고 예매를 진행할 수 있어요.',
          '기존 영화와 동일한 방식으로 편하게 예매를 진행해 보세요!',
        ]}
        imgSrc={AppPreview1}
      />
      <FeatureDescription
        index={2}
        title={
          <>
            <b>내가 원하는</b> 독립영화,
            <br />
            공동체상영을 <b>직접 주최</b>해보세요!
          </>
        }
        descriptions={[
          '현재 열린 상영 중에 내가 원하는 영화가 없다면,\n직접 상영을 진행하는 것도 가능해요.',
          '상영 날짜와 장소를 선택하고 빠르게 공유해 인원을 모아 보세요!',
        ]}
        imgSrc={AppPreview2}
      />
    </div>
  );
};
export default Contents;
