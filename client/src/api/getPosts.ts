import { Categories } from '@custom-types/Categories';

import axiosInstance from '@api/axiosInstance';

export type PostOrder = 'newest' | 'popularity';

export type Post = {
  id: number;
  title: string;
  detail: string;
  username: string;
  createAt: Date;
  likes: number;
  hits: number;
  category: Categories;
};

export type GetPostsOptions = {
  filter: 'all' | Categories;
  order: PostOrder;
  search: string;
};

export type GetPostsResponse = {
  posts: Post[];
};

export const getPosts = async (option: GetPostsOptions) => {
  const { filter, order, search } = option;

  const response = await axiosInstance.get<GetPostsResponse>('/posts', {
    params: { filter, order, search },
  });
  return response.data;
};
