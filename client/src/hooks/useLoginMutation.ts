import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import { postLogin } from '@api/postLogin';

export const useLoginMutation = () =>
  useMutation(postLogin, {
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.tokens.access_token);
      Cookies.set('refreshToken', data.tokens.refresh_token, { expires: 30 });
      toast.success('로그인이 완료되었습니다');
    },
    onError: (e: Error) => {
      toast.error(e.message);
    },
  });
