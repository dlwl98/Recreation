import { Categories } from '@custom-types/Categories';

import axiosInstance from './axiosInstance';

export type PostOrder = 'newest' | 'popularity';

export type Post = {
  title: string;
  detail: string;
  username: string;
  createAt: Date;
  likes: number;
  category: Categories;
};

export type GetPostsOptions = {
  filter: 'all' | Categories;
  order: PostOrder;
};

export type GetPostsResponse = {
  posts: Post[];
};

export const getPosts = async (option: GetPostsOptions) => {
  const response = await axiosInstance.get<GetPostsResponse>(
    `/posts/?filter=${option.filter}&order=${option.order}`,
  );
  return response.data;
};
