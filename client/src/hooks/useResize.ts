import { useEffect } from 'react';

const useResize = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [handler]);
};

export default useResize;
