import Description from '@/components/Description';
import EmailForm from '@/components/EmailForm';
import useAmplitude from '@/hooks/useAmplitude';

function App() {
  useAmplitude();

  return (
    <div>
      <EmailForm />
      <Description />
    </div>
  );
}

export default App;
