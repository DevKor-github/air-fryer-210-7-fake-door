import { FormEvent, useState } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { postEmail } from '@/features/EmailForm/apis/postEmail';

interface Props {
  label: string;
}
const EmailForm = ({ label }: Props) => {
  const [email, setEmail] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    amplitude.track('Submit Email');

    (async () => {
      try {
        await postEmail({ email });
        alert('정상 제출 되었습니다');
        setEmail('');
      } catch (error) {
        alert('다시 시도해주세요');
        console.error(error);
      }
    })();
  };

  return (
    <div>
      <label>{label}</label>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit">신청</button>
      </form>
    </div>
  );
};
export default EmailForm;
