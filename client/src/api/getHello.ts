import { type AxiosError } from 'axios';
import { useQuery } from 'react-query';

import axiosInstance from '@api/axiosInstance';

type Res = {
  imkey: String;
};

export const getHello = async () => {
  const response = await axiosInstance.get<Res>('/hello');
  return response.data;
};

export const useHelloQuery = ({ param }: { param: string }) =>
  useQuery<Res, AxiosError>(
    ['get-hello', param],
    () => {
      console.log(param);
      return getHello();
    },
    {
      suspense: true,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e: Error) => {
        console.log(e.message);
      },
    },
  );
