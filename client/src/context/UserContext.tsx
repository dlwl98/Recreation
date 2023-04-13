import { createContext, useState } from 'react';

import { PostLoginResponse } from '@api/postLogin';
import { postRefresh } from '@api/postRefresh';

import { useReactCookie } from '@hooks/useReactCookie';

export type UserContextType = {
  isLoggedIn: boolean | null;
  username: string;
  accessToken: string;
  expireAt: number;
  login: (res: PostLoginResponse) => void;
  logout: () => void;
  setNewAccessToken: (accessToken: string) => void;
};

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  username: '',
  accessToken: '',
  expireAt: 0,
  login: () => {},
  logout: () => {},
  setNewAccessToken: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [username, setUsername] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [expireAt, setExpireAt] = useState<number>(0);
  const { setCookie, removeCookie } = useReactCookie();

  const login = (res: PostLoginResponse) => {
    setIsLoggedIn(true);
    setUsername(res.username);
    setAccessToken(res.tokens.accessToken);
    setExpireAt(new Date().getTime() + 24 * 60 * 60 * 1000);
    setCookie('refreshToken', res.tokens.refreshToken, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setAccessToken('');
    setExpireAt(0);
    removeCookie('refreshToken');
  };

  const setNewAccessToken = (accessToken: string) => {
    setAccessToken(accessToken);
    setExpireAt(new Date().getTime() + 24 * 60 * 60 * 1000);
  };

  if (isLoggedIn === null) {
    postRefresh()
      .then((data) => {
        setIsLoggedIn(true);
        return setNewAccessToken(data.accessToken);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, accessToken, expireAt, login, logout, setNewAccessToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
