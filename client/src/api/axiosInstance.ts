import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleAxiosError = (error: AxiosError) => {
  const { data } = error.response as AxiosResponse<{ message: string }>;
  if (data?.message) {
    throw new Error(data.message);
  }

  throw new Error('axios error');
};

axiosInstance.interceptors.response.use((response) => response, handleAxiosError);

export default axiosInstance;
