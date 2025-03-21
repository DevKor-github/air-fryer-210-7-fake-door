import EmailForm from '@/features/EmailForm';
import AmplitudeProvider from '@/providers/AmplitudeProvider';

function App() {
  return (
    <AmplitudeProvider>
      <div>
        <EmailForm label="출시 예약하기" />
      </div>
    </AmplitudeProvider>
  );
}

export default App;
