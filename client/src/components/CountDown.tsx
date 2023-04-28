import { useEffect, useState } from 'react';

const CountDown = ({ timer }: { timer: number }) => {
  const [remain, setRemain] = useState('');
  const intervalhandler = () => setRemain(((timer - Date.now()) / 1000).toFixed(1));

  useEffect(() => {
    intervalhandler();
    const interval = setInterval(intervalhandler, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>{remain}초 남음</h2>;
};

export default CountDown;
