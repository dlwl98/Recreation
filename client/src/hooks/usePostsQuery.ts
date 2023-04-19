import { type AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { GetPostsOptions, GetPostsResponse, getPosts } from '@api/getPosts';

export const usePostsQuery = (option: GetPostsOptions) =>
  useQuery<GetPostsResponse, AxiosError>(
    ['get-posts', option],
    () => {
      console.log(option);
      return getPosts(option);
    },
    {
      staleTime: 10000,
      suspense: true,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e: Error) => {
        console.log(e.message);
      },
    },
  );
