import { FormEvent, useState } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { postEmail } from '@/common/components/EmailForm/apis/postEmail';

import s from './EmailForm.module.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    amplitude.track('Submit Email');

    (async () => {
      try {
        await postEmail({ email });
        alert('이메일이 정상적으로 등록되었어요');
        setEmail('');
      } catch (error) {
        alert('다시 시도해주세요');
        console.error(error);
      }
    })();
  };

  return (
    <div className={s.Wrapper}>
      <label>출시 예약하기</label>
      <form className={s.Form} onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit">신청</button>
      </form>
    </div>
  );
};
export default EmailForm;
