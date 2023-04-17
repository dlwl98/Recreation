import { theme } from '@styles/theme';

import { usePostsQuery } from '@hooks/usePostsQuery';

import MainLayout from '@layouts/MainLayout';

import Cards from '@components/Cards';
import Header from '@components/Header';

import Spacing from '@ds/Spacing';

const MainPage = () => {
  const { data, status } = usePostsQuery({ filter: 'all', order: 'popularity' });

  return (
    <div>
      <Header shouldDisplaySearch={true} shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        {status === 'success' ? <Cards width={200} cards={data.posts} /> : 'loading'}
      </MainLayout>
    </div>
  );
};

export default MainPage;
