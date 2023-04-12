import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import { postRegister } from '@api/postRegister';

export const useRegisterMutation = () =>
  useMutation(postRegister, {
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.tokens.access_token);
      Cookies.set('refreshToken', data.tokens.refresh_token, { expires: 30 });
      toast.success('회원가입이 완료되었습니다');
    },
    onError: (e: Error) => {
      toast.error(e.message);
    },
  });
