import axiosInstance from '@api/axiosInstance';

export const getHello = async () => {
  const response = await axiosInstance.get<string>('/hello');
  return response.data;
};
