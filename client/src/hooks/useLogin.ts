import { useState } from 'react';

import { useLoginMutation } from '@hooks/useLoginMutation';

export default function useLogin() {
  const { mutate: loginMutate } = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutate({ email, password });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
  };
}
