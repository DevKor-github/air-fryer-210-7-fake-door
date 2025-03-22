import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '@/lib/firebase';

interface PostEmailRequest {
  email: string;
  from: string | null;
}

export const postEmail = async ({ email, from }: PostEmailRequest) => {
  await setDoc(doc(db, 'user-email', email), {
    email,
    from,
    timestamp: serverTimestamp(),
  });
};
