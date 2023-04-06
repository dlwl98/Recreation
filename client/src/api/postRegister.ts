import axiosInstance from '@api/axiosInstance';
import { LoginFormData, PostLoginResponse } from '@api/postLogin';

export const postRegister = async ({ username, password }: LoginFormData) => {
  const response = await axiosInstance.post<PostLoginResponse>('/register', {
    username,
    password,
  });
  return response.data;
};
