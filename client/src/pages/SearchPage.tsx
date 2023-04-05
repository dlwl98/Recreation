import { theme } from '@styles/theme';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import Spacing from '@components/Spacing';

const SearchPage = () => {
  return (
    <div>
      <Header shouldDisplaySearch={false} shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        <SearchBar />
      </MainLayout>
    </div>
  );
};

export default SearchPage;
