import axiosInstance from '@api/axiosInstance';

export const getHello = async () => {
  const response = await axiosInstance.get('/hello');
  return response.data;
};
