import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { isEmailFormat, isPasswordFormat } from '@utils/index';

import { ErrorWithMessage } from '@custom-types/error';

import { useLoginMutation } from '@hooks/useLoginMutation';

export default function useLogin() {
  const { mutate: loginMutate } = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidateInputs = () => {
    if (email === '' || password === '') {
      throw new ErrorWithMessage('모든 항목은 필수 입력란 입니다');
    }
    if (!isEmailFormat(email)) {
      throw new ErrorWithMessage('이메일이 형식에 맞지 않습니다');
    }
    if (!isPasswordFormat(password)) {
      throw new ErrorWithMessage('비밀번호가 형식에 맞지 않습니다');
    }
    return true;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isValidateInputs()) {
        loginMutate({ email, password });
      }
    } catch (e) {
      if (e instanceof ErrorWithMessage) {
        toast.error(e.message);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
  };
}
