import { useEffect } from 'react';

import { getHello } from '@api/getHello';

const MainPage = () => {
  useEffect(() => {
    getHello().then((data) => console.log(data));
  }, []);

  return <div>Main Page</div>;
};

export default MainPage;
