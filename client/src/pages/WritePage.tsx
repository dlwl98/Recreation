import { theme } from '@styles/theme';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';

import Spacing from '@ds/Spacing';

const WritePage = () => {
  return (
    <div>
      <Header shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>Write Page</MainLayout>
    </div>
  );
};

export default WritePage;
