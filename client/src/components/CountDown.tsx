import { css } from '@emotion/css';
import { useEffect, useState } from 'react';

const CountDown = ({ timer, size = 1 }: { timer: number; size?: number }) => {
  const [remain, setRemain] = useState('');
  const intervalhandler = () => setRemain(((timer - Date.now()) / 1000).toFixed(1));

  useEffect(() => {
    intervalhandler();
    const interval = setInterval(intervalhandler, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h3
      className={css`
        font-size: ${size}rem;
        width: ${6 * size}rem;
      `}
    >
      {remain}초 남음
    </h3>
  );
};

export default CountDown;
