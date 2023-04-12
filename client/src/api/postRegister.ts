import axiosInstance from '@api/axiosInstance';

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

export type PostRegisterResponse = {
  username: string;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
};

export const postRegister = async ({ username, email, password }: RegisterFormData) => {
  const response = await axiosInstance.post<PostRegisterResponse>('/register', {
    username,
    email,
    password,
  });
  return response.data;
};
