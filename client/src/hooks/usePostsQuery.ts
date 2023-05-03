import { type AxiosError } from 'axios';
import { useInfiniteQuery } from 'react-query';

import { GetPostsOptions, GetPostsResponse, getPosts } from '@api/getPosts';

export const usePostsQuery = (option: GetPostsOptions) =>
  useInfiniteQuery<GetPostsResponse, AxiosError>(
    ['get-posts', option],
    ({ pageParam }) => {
      return getPosts({ ...option, pageParam });
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
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
