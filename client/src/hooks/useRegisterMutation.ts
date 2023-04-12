import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import { postRegister } from '@api/postRegister';

export const useRegisterMutation = () => {
  return useMutation(postRegister, {
    onError: (e: Error) => {
      toast.error(e.message);
    },
  });
};
