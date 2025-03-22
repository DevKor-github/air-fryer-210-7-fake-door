import Intro from '@/features/Contents/Intro';
import AmplitudeProvider from '@/providers/AmplitudeProvider';

function App() {
  return (
    <AmplitudeProvider>
      <Intro />
    </AmplitudeProvider>
  );
}

export default App;
