import { PropsWithChildren } from 'react';

import { useEffectOnce } from '@/hooks/useEffectOnce';
import * as amplitude from '@amplitude/analytics-browser';

const AmplitudeProvider = ({ children }: PropsWithChildren) => {
  const searchParams = new URLSearchParams(document.location.search);
  const from = searchParams.get('c');
  useEffectOnce(() => {
    amplitude.init(import.meta.env.VITE_API_AMPLITUDE_API_KEY, {
      autocapture: true,
    });
    amplitude.track({
      event_type: 'view',
      user_properties: {
        from,
      },
    });
  });

  return <>{children}</>;
};
export default AmplitudeProvider;
