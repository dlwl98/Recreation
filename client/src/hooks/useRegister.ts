import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { isEmailFormat, isPasswordFormat } from '@utils/index';

import { ErrorWithMessage } from '@custom-types/error';

import { useReactCookie } from '@hooks/useReactCookie';

import { ModalContext } from '@context/ModalContext';
import { UserContext } from '@context/UserContext';

import { useRegisterMutation } from './useRegisterMutation';

export default function useRegister() {
  const nevigate = useNavigate();
  const { closeModal } = useContext(ModalContext);
  const { login } = useContext(UserContext);
  const { mutate: registerMutate } = useRegisterMutation();
  const { setCookie } = useReactCookie();

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
    const { username, email, password, passwordConfirm } = inputs;
    if (username === '' || email === '' || password === '') {
      throw new ErrorWithMessage('모든 항목은 필수 입력란 입니다');
    }
    if (password !== passwordConfirm) {
      throw new ErrorWithMessage('비밀번호가 일치하지 않습니다');
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
    const { username, email, password } = inputs;
    try {
      if (isValidateInputs()) {
        registerMutate(
          { username, email, password },
          {
            onSuccess: (data) => {
              login(data);
              setCookie('refreshToken', data.tokens.refreshToken, {
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                httpOnly: true,
              });
              toast.success('회원가입이 완료되었습니다');
              closeModal();
              nevigate('/');
            },
          },
        );
      }
    } catch (e) {
      if (e instanceof ErrorWithMessage) {
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
