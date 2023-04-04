import { useEffect } from 'react';

import { getHello } from '@api/getHello';

import Header from '@components/Header';

const MainPage = () => {
  useEffect(() => {
    getHello().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Header shouldDisplaySearch={true} shouldDisplayProfile={true} />
      <div>Main Page</div>
    </div>
  );
};

export default MainPage;
