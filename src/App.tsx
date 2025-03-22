import Contents from '@/features/Contents';
import Intro from '@/features/Intro';
import AmplitudeProvider from '@/providers/AmplitudeProvider';

function App() {
  return (
    <AmplitudeProvider>
      <Intro />
      <Contents />
    </AmplitudeProvider>
  );
}

export default App;
