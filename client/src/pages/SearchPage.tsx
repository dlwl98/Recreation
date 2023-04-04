import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import Spacing from '@components/Spacing';

const SearchPage = () => {
  return (
    <div>
      <Header shouldDisplaySearch={false} shouldDisplayProfile={true} />
      <Spacing size={15} />
      <SearchBar />
    </div>
  );
};

export default SearchPage;
