import Bottom from '@/features/Bottom';
import Contents from '@/features/Contents';
import Intro from '@/features/Intro';
import AmplitudeProvider from '@/providers/AmplitudeProvider';

function App() {
  return (
    <AmplitudeProvider>
      <Intro />
      <Contents />
      <Bottom />
    </AmplitudeProvider>
  );
}

export default App;
