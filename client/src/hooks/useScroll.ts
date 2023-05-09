import { useEffect } from 'react';

const useScroll = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [handler]);
};

export default useScroll;
