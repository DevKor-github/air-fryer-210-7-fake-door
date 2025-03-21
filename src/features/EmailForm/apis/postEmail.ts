import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '@/lib/firebase';

interface PostEmailRequest {
  email: string;
}

export const postEmail = async ({ email }: PostEmailRequest) => {
  await setDoc(doc(db, 'user-email', email), {
    email,
    timestamp: serverTimestamp(),
  });
};
