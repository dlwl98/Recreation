import { type AxiosError } from 'axios';
import { useQuery } from 'react-query';

import axiosInstance from '@api/axiosInstance';

export const getHello = async () => {
  const response = await axiosInstance.get<string>('/hello');
  return response.data;
};

export const useHelloQuery = ({ param }: { param: string }) =>
  useQuery<string, AxiosError>(
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
