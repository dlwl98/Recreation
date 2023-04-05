import { createContext, useState } from 'react';

export type UserContextType = {
  isLoggedIn: boolean;
  username: string;
};

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  username: '',
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return <UserContext.Provider value={{ isLoggedIn, username }}>{children}</UserContext.Provider>;
};
