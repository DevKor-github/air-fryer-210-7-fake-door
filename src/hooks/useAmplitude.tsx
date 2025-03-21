import * as amplitude from '@amplitude/analytics-browser';

import { useEffectOnce } from '@/hooks/useEffectOnce';

const useAmplitude = () => {
  useEffectOnce(() => {
    amplitude.init(import.meta.env.VITE_API_AMPLITUDE_API_KEY, {
      autocapture: true,
    });
    console.log(import.meta.env.VITE_API_AMPLITUDE_API_KEY);
    // 이런 식으로 체크
    // amplitude.track('Sign Up');
  });
};

export default useAmplitude;
