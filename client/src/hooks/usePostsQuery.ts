import { type AxiosError } from 'axios';
import { useInfiniteQuery } from 'react-query';

import { GetPostsOptions, GetPostsResponse, getPosts } from '@api/getPosts';

export const usePostsQuery = (option: GetPostsOptions) =>
  useInfiniteQuery<GetPostsResponse, AxiosError>(
    ['get-posts', option],
    ({ pageParam }) => {
      return getPosts({ ...option, page: pageParam });
    },
    {
      getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.nextPage : undefined),
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
