import axios, { InternalAxiosRequestConfig } from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { postRefresh } from '@api/postRefresh';

import { UserContext } from '@context/UserContext';

const axiosAuthInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

const refresh = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
  const { accessToken, expireAt, logout, setNewAccessToken } = useContext(UserContext);
  const navigate = useNavigate();

  if (!expireAt || expireAt <= new Date().getTime()) {
    try {
      const { accessToken: newAccessToken } = await postRefresh();
      setNewAccessToken(newAccessToken);
    } catch (error) {
      logout();
      navigate('/');
    }
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const handleRefreshError = (e: Error) => {
  const { logout } = useContext(UserContext);
  logout();
};

axiosAuthInstance.interceptors.request.use(refresh, handleRefreshError);
export default axiosAuthInstance;
