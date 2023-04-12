import axiosInstance from '@api/axiosInstance';

export type LoginFormData = {
  email: string;
  password: string;
};

export type PostLoginResponse = {
  username: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export const postLogin = async ({ email, password }: LoginFormData) => {
  const response = await axiosInstance.post<PostLoginResponse>('/login', {
    email,
    password,
  });
  return response.data;
};
