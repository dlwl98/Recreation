import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import { postLogin } from '@api/postLogin';

export const useLoginMutation = () =>
  useMutation(postLogin, {
    onError: (e: Error) => {
      toast.error(e.message);
    },
  });
