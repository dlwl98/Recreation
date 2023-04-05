import { theme } from '@styles/theme';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';
import Spacing from '@components/Spacing';

const ErrorPage = () => {
  return (
    <div>
      <Header shouldDisplaySearch={true} shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>Error Page</MainLayout>
    </div>
  );
};

export default ErrorPage;
