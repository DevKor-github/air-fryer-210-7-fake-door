import { PropsWithChildren } from 'react';

import { useEffectOnce } from '@/hooks/useEffectOnce';
import * as amplitude from '@amplitude/analytics-browser';

const AmplitudeProvider = ({ children }: PropsWithChildren) => {
  useEffectOnce(() => {
    amplitude.init(import.meta.env.VITE_API_AMPLITUDE_API_KEY, {
      autocapture: true,
    });
  });

  return <>{children}</>;
};
export default AmplitudeProvider;
