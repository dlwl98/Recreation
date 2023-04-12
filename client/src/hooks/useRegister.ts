import Cookies from 'js-cookie';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { isEmailFormat, isPasswordFormat } from '@utils/index';

import { RegisterValidateError } from '@custom-types/error';

import { useRegisterMutation } from './useRegisterMutation';

export default function useRegister() {
  const { data, mutate: registerMutate } = useRegisterMutation();

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const isValidateInputs = () => {
    const { email, password, passwordConfirm } = inputs;
    if (password !== passwordConfirm) {
      throw new RegisterValidateError('비밀번호가 일치하지 않습니다');
    }
    if (!isEmailFormat(email)) {
      throw new RegisterValidateError('이메일이 형식에 맞지 않습니다');
    }
    if (!isPasswordFormat(password)) {
      throw new RegisterValidateError('비밀번호가 형식에 맞지 않습니다');
    }
    return true;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = inputs;
    try {
      if (isValidateInputs()) {
        registerMutate({ username, email, password });
      }
    } catch (e) {
      if (e instanceof RegisterValidateError) {
        toast.error(e.message);
      }
    }
  };

  return {
    inputs,
    onChange,
    onSubmit,
  };
}
