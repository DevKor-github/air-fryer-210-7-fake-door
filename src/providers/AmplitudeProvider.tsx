import { PropsWithChildren } from 'react';

import { useEffectOnce } from '@/hooks/useEffectOnce';
import * as amplitude from '@amplitude/analytics-browser';

const AmplitudeProvider = ({ children }: PropsWithChildren) => {
  // const searchParams = new URLSearchParams(document.location.search);
  // const from = searchParams.get('c');
  useEffectOnce(() => {
    amplitude.init(import.meta.env.VITE_API_AMPLITUDE_API_KEY, {
      autocapture: true,
    });
  });

  return <>{children}</>;
};
export default AmplitudeProvider;
