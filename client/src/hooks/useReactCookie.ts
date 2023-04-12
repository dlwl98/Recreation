import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

export const useReactCookie = () => {
  const cookie = new Cookies();

  const setCookie = (name: string, value: string, option?: CookieSetOptions) => {
    return cookie.set(name, value, { ...option });
  };

  const getCookie = (name: string) => {
    return cookie.get(name);
  };

  const removeCookie = (name: string) => {
    return cookie.remove(name);
  };

  return {
    setCookie,
    getCookie,
    removeCookie,
  };
};
