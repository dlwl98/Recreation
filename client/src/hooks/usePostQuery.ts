import { type AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { GetPostResponse, getPost } from '@api/getPost';

export const usePostQuery = ({ id }: { id: string }) =>
  useQuery<GetPostResponse, AxiosError>(
    ['get-post', id],
    () => {
      return getPost({ id });
    },
    {
      staleTime: Infinity,
      suspense: true,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e: Error) => {
        console.log(e.message);
      },
    },
  );
