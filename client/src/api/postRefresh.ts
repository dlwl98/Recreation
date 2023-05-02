import axios from 'axios';

const PostRefreshInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export type PostRefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

export const postRefresh = async () => {
  const response = await PostRefreshInstance.post<PostRefreshResponse>('/refresh');
  return response.data;
};
