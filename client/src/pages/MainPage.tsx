import { useEffect } from 'react';

import { theme } from '@styles/theme';

import { getHello } from '@api/getHello';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';
import Spacing from '@components/Spacing';

const MainPage = () => {
  useEffect(() => {
    getHello().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Header shouldDisplaySearch={true} shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout> Main Page </MainLayout>
    </div>
  );
};

export default MainPage;
