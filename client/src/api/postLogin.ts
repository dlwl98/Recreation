import axiosInstance from '@api/axiosInstance';

export type LoginFormData = {
  email: string;
  password: string;
};

export type PostLoginResponse = {
  username: string;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
};

export const postLogin = async ({ email, password }: LoginFormData) => {
  const response = await axiosInstance.post<PostLoginResponse>('/login', {
    email,
    password,
  });
  return response.data;
};
