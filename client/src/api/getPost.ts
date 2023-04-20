import axiosInstance from './axiosInstance';
import { Post } from './getPosts';

export type PostElement = {
  quiz: string;
  answer: string;
};

export type GetPostResponse = {
  post: Post;
  elements: PostElement[];
};

export const getPost = async ({ id }: { id: string }) => {
  const response = await axiosInstance.get<GetPostResponse>(`/post/:${id}`);
  return response.data;
};
