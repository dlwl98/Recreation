import { Suspense } from 'react';

import ErrorBoundary from '@utils/ErrorBoundary';

import { theme } from '@styles/theme';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';
import HelloQueryData from '@components/data/HelloQueryData';

import Spacing from '@ds/Spacing';

const MainPage = () => {
  return (
    <div>
      <Header shouldDisplaySearch={true} shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        {/* <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>loading</div>}>
            <HelloQueryData />
          </Suspense>
        </ErrorBoundary> */}
      </MainLayout>
    </div>
  );
};

export default MainPage;
