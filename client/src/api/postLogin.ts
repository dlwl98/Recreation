import axiosInstance from '@api/axiosInstance';

export type LoginFormData = {
  username: string;
  password: string;
};

export type PostLoginResponse = {
  username: string;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
};

export const postLogin = async ({ username, password }: LoginFormData) => {
  const response = await axiosInstance.post<PostLoginResponse>('/login', {
    username,
    password,
  });
  return response.data;
};
