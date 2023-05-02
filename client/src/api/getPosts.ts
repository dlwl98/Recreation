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
  const filterParam = `filter=${option.filter}`;
  const orderParam = `order=${option.order}`;
  const searchParam = `search=${option.search}`;

  const response = await axiosInstance.get<GetPostsResponse>(
    '/posts/?' + filterParam + '&' + orderParam + '&' + searchParam,
  );
  return response.data;
};
